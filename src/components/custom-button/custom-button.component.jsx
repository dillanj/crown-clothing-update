import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./custom-button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const CustomButton = ({ children, buttonType, ...otherProps }) => {
  const Button = getButton(buttonType);
  return <Button {...otherProps}>{children}</Button>;
};

export default CustomButton;
