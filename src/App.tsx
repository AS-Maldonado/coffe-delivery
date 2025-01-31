import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Router } from "./Router";
import { CartContextProvider } from "./contexts/CartProvider";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />;
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </>
  );
}

export default App;
