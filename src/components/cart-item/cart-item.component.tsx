import { FC, memo } from "react";
import {
  CartItemContainer,
  CartItemDetails,
  CartItemName,
  CartItemImage,
} from "./cart-item.styles.jsx";

import { CartItem as TCartItem } from "../../store/cart/cart.types.js";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
