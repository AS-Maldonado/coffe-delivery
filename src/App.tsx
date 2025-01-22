import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/_layout/Header";
import { Hero } from "./components/home/Hero";
import { ProductSection } from "./components/home/ProductSection";
import { ToastContainer } from "react-toastify";
import { DUMMY_PRODUCTS } from "./api/DummyProducts";

function App() {
  return (
    <div className="mx-auto max-w-[1100px] px-4">
      <ToastContainer />
      <Header />
      <Hero />
      <ProductSection
        sectionTitle="Nossos cafés"
        productList={DUMMY_PRODUCTS}
      />
    </div>
  );
}

export default App;
