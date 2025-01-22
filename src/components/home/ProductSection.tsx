import { Product } from "../../_types/Product";
import { ProductCard } from "./ProductCard";

interface ProductSectionProps {
  sectionTitle: string;
  productList: Product[];
}

export function ProductSection({
  sectionTitle,
  productList,
}: ProductSectionProps) {
  return (
    <section className="my-6">
      <h2 className="text-subtitle font-baloo mb-14 text-3xl font-extrabold">
        {sectionTitle}
      </h2>
      <div>
        {productList.map((item, i) => (
          <ProductCard product={item} key={i} />
        ))}
      </div>
    </section>
  );
}
