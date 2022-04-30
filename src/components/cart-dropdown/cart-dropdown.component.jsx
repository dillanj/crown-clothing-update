import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {[].map((item) => (
          <CartItem cartItem={item} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
