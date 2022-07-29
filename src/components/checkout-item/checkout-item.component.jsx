import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./checkout-item.styles.scss";

const CheckoutItem = memo(({ cartItem }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;

  const handleClearItem = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const handleAddItemToCart = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const handleRemoveItemFromCart = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItemFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItemToCart}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={handleClearItem}>
        &#10005;
      </span>
    </div>
  );
});

export default CheckoutItem;
