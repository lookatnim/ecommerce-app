import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import ProductList from "../components/Products/ProductList";
import Cart from "../components/Cart/Cart";
import Layout from "../components/Layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
