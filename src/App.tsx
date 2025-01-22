import "react-toastify/dist/ReactToastify.css";
import { Product } from "./_types/Product";
import { Header } from "./components/_layouts/Header";
import { Hero } from "./components/home/Hero";
import { ProductSection } from "./components/home/ProductSection";
import { ToastContainer } from "react-toastify";

const DUMMY_PRODUCTS: Product[] = [
  {
    image: "coffes/tradicional.png",
    category: "Tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
];

function App() {
  return (
    <div className="mx-auto max-w-[1100px]">
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
