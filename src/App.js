import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

// import {
//   createUserDocumentFromAuth,
//   getCurrentUser,
//   onAuthStateChangedListener,
// } from "./utils/firebase/firebase.utils";

import { checkUserSession } from "./store/user/user.action";

import Home from "./routes/home/home.component";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  });

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((userAuth) => {
  //     if (userAuth) {
  //       createUserDocumentFromAuth(userAuth);
  //     }
  //     // dispatch({ type: "SET_CURRENT_USER", payload: userAuth });
  //     dispatch(setCurrentUser(userAuth));
  //   });

  //   return unsubscribe;
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
