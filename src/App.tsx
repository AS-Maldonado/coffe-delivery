import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Router } from "./Router";

function App() {
  return (
    <>
      <ToastContainer />;
      <Router />
    </>
  );
}

export default App;
