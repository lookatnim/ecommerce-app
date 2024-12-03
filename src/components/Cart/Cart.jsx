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
import { Add, Remove, Delete, LocationOn } from "@mui/icons-material";
import { removeFromCart, updateQuantity } from "../../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const quantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Box>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Shopping Cart
        </Typography>
    <Box sx={{ p: 3, display: "flex", flexDirection: "row", gap: 3 }}>
      {/* Cart Items Section */}
      <Box sx={{ flex: 3 }}>
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
                    height: 40,
                    width: "auto",
                    objectFit: "contain",
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
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
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
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  <Add />
                </IconButton>
              </Box>
              <Typography sx={{ ml: 3, fontWeight: "bold" }}>
                ${(item.price * item.quantity).toFixed(2)}
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
      </Box>

      {/* Order Summary Section */}
      <Box sx={{ flex: 1, backgroundColor: "#f9f9f9", p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" display="flex" justifyContent="space-between">
            Subtotal ({quantity})
            <span>${total.toFixed(2)}</span>
          </Typography>
          <Typography variant="body2" display="flex" justifyContent="space-between">
            Shipping Fee
            <span>$0</span>
          </Typography>
        </Box>
        <TextField
          fullWidth
          placeholder="Enter Voucher Code"
          sx={{ mb: 2 }}
          InputProps={{
            endAdornment: (
              <Button variant="contained" color="primary" size="small">
                APPLY
              </Button>
            ),
          }}
        />
        <Divider sx={{ mb: 2 }} />
        <Typography
          variant="body2"
          display="flex"
          justifyContent="space-between"
          fontWeight="bold"
        >
          Total
          <span>${total.toFixed(2)}</span>
        </Typography>
        <Button
          variant="contained"
          color="warning"
          fullWidth
          sx={{ mt: 3 }}
        >
          PROCEED TO CHECKOUT ({quantity})
        </Button>
      </Box>
    </Box>
    </Box>
  );
};

export default Cart;
