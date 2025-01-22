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
    <section className="my-6 flex flex-col items-center xl:items-start">
      <h2 className="mb-14 font-baloo text-3xl font-extrabold text-subtitle">
        {sectionTitle}
      </h2>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-12 xl:justify-start">
        {productList.map((item, i) => (
          <ProductCard product={item} key={i} />
        ))}
      </div>
    </section>
  );
}
