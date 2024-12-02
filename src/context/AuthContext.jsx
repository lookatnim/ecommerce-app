import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { SuccessToast, WarningToast } from '../components/Tost/Popup';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email) => {
    setUser({ email })
    localStorage.setItem('email', email);
    localStorage.setItem('isAuth', true);
    SuccessToast('Login successful!')
    navigate('/');
  };
  const register = (email) => {
    setUser({ email })
    localStorage.setItem('email', email);
    localStorage.setItem('isAuth', true);
    SuccessToast('Registration successful!');
    navigate('/');
  };
  const logout = () => {
    setUser(null)
    localStorage.setItem('email', null);
    localStorage.setItem('isAuth', false);
    window.location.reload();
  };

  const getUser = () => {
    return localStorage.getItem('email')
  };

  const isAuth = () =>{
    return localStorage.getItem('isAuth');
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, getUser ,isAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
