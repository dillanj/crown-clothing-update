import { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton, {
  BUTTON_TYPE_CLASSES,
} from "../custom-button/custom-button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      resetForm();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Incorrect Password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          alert("error creating your account");
      }
      console.error("Error signing user in with email and password.", err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleGoogleSignIn = async () => {
    await signInWithGooglePopup();
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
