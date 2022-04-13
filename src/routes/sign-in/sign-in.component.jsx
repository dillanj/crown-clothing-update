import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const handleGoogleSignIn = async () => {
    const response = await signInWithGooglePopup();
    console.log("response", response)
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={handleGoogleSignIn}>GOOGLE</button>
    </div>
  )
}

export default SignIn;