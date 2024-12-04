import React from 'react';
import { useParams } from 'react-router-dom'; // To access the category from URL
import ProductItem from './ProductItem';
import { Box, Grid, Typography } from '@mui/material';
import { products } from './ProductData';

const ProductCategory = () => {
  // Use URL parameter to get the category
  const  category  = window.location.pathname.slice(1) 
  // console.log(window.location.pathname.slice(1));

  // Filter products based on the category from URL
  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" marginBottom={4}>
        {category ? `Top ${category.charAt(0).toUpperCase() + category.slice(1)}s` : 'All Products'}
      </Typography>
      <Grid container spacing={4}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductItem product={product} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6">No products found in this category.</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default ProductCategory;
