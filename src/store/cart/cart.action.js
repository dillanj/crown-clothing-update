import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (isOpen) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isOpen);

const addItemToCart = (productToAdd) => {
  setCartItems(addCartItem(cartItems, productToAdd));
};

const removeItemFromCart = (cartItemToRemove) => {
  setCartItems(removeCartItem(cartItems, cartItemToRemove));
};

const clearItemFromCart = (cartItemToRemove) => {
  setCartItems(clearCartItem(cartItems, cartItemToRemove));
};

const addCartItem = (cartItems, productToAdd) => {
  let existingCartItem = cartItems.find((item) => item.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: (cartItem.quantity += 1) }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: (cartItemToRemove.quantity -= 1) }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};
