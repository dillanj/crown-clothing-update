import "./product-card.styles.scss";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

import CustomButton, {
  BUTTON_TYPE_CLASSES,
} from "../custom-button/custom-button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={handleAddToCart}
      >
        Add To Cart
      </CustomButton>
    </div>
  );
};

export default ProductCard;
