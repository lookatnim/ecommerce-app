import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 140,
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            maxHeight: "100%",  // Limit image height to container
            maxWidth: "100%",   // Limit image width to container
            objectFit: "contain", // Ensures the whole image is visible
          }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <Box sx={{ padding: 2, textAlign: "center" }}>
        <Button variant="contained" color="primary" onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ProductItem;
