import React, { useState } from "react";
import { Box, TextField, Autocomplete, Typography } from "@mui/material";
import { products } from "./ProductData"; // Import your product list

const ProductSearch = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Autocomplete
      options={products}
      getOptionLabel={(option) => option.name}
      filterOptions={(options, { inputValue }) => {
        return options.filter((option) => {
          const lowercasedInput = inputValue.toLowerCase();
          const matchName = option.name.toLowerCase().includes(lowercasedInput);
          const matchCategory = option.category.toLowerCase().includes(lowercasedInput);
          const matchPrice = option.price.toString().includes(lowercasedInput);
          return matchName || matchCategory || matchPrice;
        });
      }}
      onChange={(event, value) => {
        if (value) {
          handleSearch(value); // Trigger search action if it's a product
        }
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      sx={{ width: "20%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Products"
          variant="outlined"
          size="small"
          sx={{ bgcolor: "white", borderRadius: 1 }}
        />
      )}
      renderOption={(props, option) => (
        // Pass the key directly, instead of spreading it via props
        <Box
          key={option.id} // Ensure each option has a unique key
          component="li"
          sx={{ display: "flex", alignItems: "center", gap: 2, py: 1 }}
          {...props} // Spread remaining props, excluding the key
        >
          <img
            src={option.image}
            alt={option.name}
            style={{
              width: 40,
              height: 40,
              objectFit: "contain",
              borderRadius: 4,
            }}
          />
          <Typography variant="body2">{option.name}</Typography>
          <Typography variant="body2" sx={{ ml: 1, color: "text.secondary" }}>
            ${option.price}
          </Typography>
        </Box>
      )}
    />
  );
};

export default ProductSearch;
