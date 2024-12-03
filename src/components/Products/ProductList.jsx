import React from 'react';
import ProductItem from './ProductItem';
import { Box, Grid, Typography } from '@mui/material';
import { products } from './ProductData';

const ProductList = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* <Typography variant="h4" marginBottom={4}>
        All Products
      </Typography> */}
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
