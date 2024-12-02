import React from 'react';
import ProductItem from './ProductItem';
import { Box, Grid, Typography } from '@mui/material';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jpg';

const products = [
  { id: 1, name: "Iphone 13 Pro", price: 500, image: p1 },
  { id: 2, name: "Iphone 12", price: 400, image: p2 },
  { id: 3, name: "Iphone XR", price: 150, image: p3 },
  { id: 4, name: "Iphone XS", price: 250, image: p4 },
];

const ProductList = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" marginBottom={4}>
        Top Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
