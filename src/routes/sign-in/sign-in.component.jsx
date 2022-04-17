import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (!response) return;
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log("response", userDocRef);
  }, []);

  const handleGoogleSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log("response", userDocRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button
        style={{ backgroundColor: "yellow" }}
        onClick={handleGoogleSignIn}
      >
        GOOGLE POPUP
      </button>
      <button
        style={{ backgroundColor: "lightBlue" }}
        onClick={signInWithGoogleRedirect}
      >
        GOOGLE REDIRECT
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
