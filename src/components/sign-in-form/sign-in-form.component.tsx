import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import CustomButton, {
  BUTTON_TYPE_CLASSES,
} from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      // await signInUserWithEmailAndPassword(email, password);
      resetForm();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert("Incorrect Password for email");
          break;
        case AuthErrorCodes.USER_DELETED:
          alert("No user associated with this email");
          break;
        default:
          alert("error creating your account");
      }
      console.error("Error signing user in with email and password.", error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleGoogleSignIn = async () => {
    dispatch(googleSignInStart());
    // await signInWithGooglePopup();
  };

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className="sign-up-container">
      <h2>Already Have An Account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={handleGoogleSignIn}
          >
            Google Sign In
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
