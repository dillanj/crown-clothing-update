import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  let contains = cartItems.find((item) => item.id === productToAdd.id);
  if (contains) {
    contains.quantity += 1;
  } else {
    cartItems = [...cartItems, productToAdd];
  }
  return cartItems;
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
