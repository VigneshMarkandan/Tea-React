import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "./Router";
import "./assets/style.css";
import Header from "./components/Common/Header"
import Footer from "./components/Common/Footer";

import { fetchUserFromLocalStorage } from "./reducks/users/operations";
import { getSubtotal } from "./reducks/carts/selectors";

let pageUrl = window.location.toString();

function App() {
  const [showFooter, setShowFooter] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  
  const subtotal = getSubtotal(selector);

  useEffect(() => {
    if (
      pageUrl.includes("Shipping") ||
      pageUrl.includes("order-confirmation")
    ) {
      setShowFooter(false);
    }
    dispatch(fetchUserFromLocalStorage());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Router />
      {showFooter && <Footer price={subtotal} />}
    </>
  );
}

export default App;
