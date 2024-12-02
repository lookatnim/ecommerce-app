import { createSlice } from '@reduxjs/toolkit';
import { SuccessToast } from '../components/Tost/Popup';

// Load cart state from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cart');
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (error) {
    console.error("Could not load cart from localStorage", error);
    return [];
  }
};

// Save cart state to localStorage
const saveCartToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
  } catch (error) {
    console.error("Could not save cart to localStorage", error);
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromLocalStorage(), // Initialize cart from localStorage
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        SuccessToast(`One more ${existingItem.name} added to cart.`);
      } else {
        state.push({ ...action.payload, quantity: 1 });
        SuccessToast(`${action.payload.name} added to cart.`);
      }
      saveCartToLocalStorage(state); // Save updated cart to localStorage
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter(item => item.id !== action.payload);
      saveCartToLocalStorage(updatedCart); // Save updated cart to localStorage
      return updatedCart;
    },
    updateQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      saveCartToLocalStorage(state); // Save updated cart to localStorage
    },
    clearCart: (state) => {
      state = [];
      saveCartToLocalStorage(state); // Clear cart in localStorage
      return state;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
