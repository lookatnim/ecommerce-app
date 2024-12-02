import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Divider,
  TextField,
  CardMedia,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { removeFromCart, updateQuantity } from "../../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Shopping Cart
      </Typography>
      <Divider sx={{ mb: 3 }} />
      {cart.length > 0 ? (
        cart.map((item) => (
          <Card
            key={item.id}
            sx={{ display: "flex", alignItems: "center", mb: 2, p: 2 }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <CardMedia
                component="img"
                height="40"
                image={item.image}
                alt={item.name}
                sx={{
                  height: 40,          // Fixed height
                  width: "auto",       // Automatic width based on aspect ratio
                  objectFit: "contain" // Ensures the whole image is visible
                }}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6">{item.name}</Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Typography color="text.secondary">
                ${item.price.toFixed(2)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                color="primary"
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                <Remove />
              </IconButton>
              <TextField
                type="text"
                value={item.quantity}
                size="small"
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value))
                }
                sx={{ width: "50px", textAlign: "center" }}
              />
              <IconButton
                color="primary"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                <Add />
              </IconButton>
            </Box>
            <Typography sx={{ ml: 3, fontWeight: "bold" }}>
              ${item.price * item.quantity}
            </Typography>
            <IconButton
              color="error"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              <Delete />
            </IconButton>
          </Card>
        ))
      ) : (
        <Typography variant="h6" color="text.secondary">
          Your cart is empty.
        </Typography>
      )}
      <Divider sx={{ mt: 3, mb: 3 }} />
      {cart.length > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Total:</Typography>
          <Typography variant="h5" color="primary">
            $
            {cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
