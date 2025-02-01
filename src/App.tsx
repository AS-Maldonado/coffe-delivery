import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Router } from "./Router";
import { CartContextProvider } from "./contexts/CartProvider";
import { CheckoutProvider } from "./contexts/CheckoutProvider";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />;
      <CartContextProvider>
        <CheckoutProvider>
          <Router />
        </CheckoutProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
