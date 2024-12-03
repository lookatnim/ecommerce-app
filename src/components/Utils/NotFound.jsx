import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Typography variant="h1" fontWeight="bold" color="error.main">
        404
      </Typography>
      <Typography variant="h4" mb={2}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" mb={4}>
        The page you are looking for does not exist or has been moved.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFound;
