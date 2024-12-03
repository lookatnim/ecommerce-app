import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import ProductList from "../components/Products/ProductList";
import Cart from "../components/Cart/Cart";
import Layout from "../components/Layout/Layout";
import ProductCategory from "../components/Products/ProductCategory";
import NotFound from "../components/Utils/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/iphone" element={<ProductCategory />} />
        <Route path="/android" element={<ProductCategory />} />
        <Route path="/accessories" element={<ProductCategory />} />
        <Route path="*" element={<NotFound/>}/>
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
