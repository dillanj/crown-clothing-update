import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const handleGoogleSignIn = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log("response", userDocRef);
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={handleGoogleSignIn}>GOOGLE</button>
    </div>
  )
}

export default SignIn;