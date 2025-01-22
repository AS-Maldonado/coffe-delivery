import { DUMMY_PRODUCTS } from "../api/DummyProducts";
import { Hero } from "../components/home/Hero";
import { ProductSection } from "../components/home/ProductSection";

export function HomePage() {
  return (
    <>
      <Hero />
      <ProductSection
        sectionTitle="Nossos cafés"
        productList={DUMMY_PRODUCTS}
      />
    </>
  );
}
