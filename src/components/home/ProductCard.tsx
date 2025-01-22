import { useState } from "react";
import { Product } from "../../_types/Product";
import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  function changeQuantity(operationType: string) {
    if (operationType === "add") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      if (quantity === 1) {
        toast.error("Quantidade não pode ser menor do que 1!");
        return;
      }

      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }

  return (
    <div className="bg-card flex w-[256px] flex-col items-center rounded-bl-[36px] rounded-tr-[36px] text-center">
      <img
        src={product.image}
        alt={`${product.name} Ilustration`}
        className="relative bottom-[25px]"
      />
      <span className="bg-yellow_light text-yellow_dark rounded-full px-2 py-1 text-[0.7rem] font-bold uppercase">
        {product.category}
      </span>
      <h3 className="font-baloo text-subtitle mb-1 mt-4 text-xl font-extrabold">
        {product.name}
      </h3>
      <p className="text-label px-2 text-sm">{product.description}</p>
      <div className="mb-3 mt-6 flex">
        <p className="text-text mr-3 text-sm font-bold">
          R${" "}
          <span className="text-2xl font-extrabold">
            {product.price.toFixed(2)}
          </span>
        </p>
        <div className="flex items-center gap-2">
          <div className="bg-button flex min-w-16 items-center justify-between rounded-md">
            <button
              className="text-purple hover:bg-purple hover:text-button rounded-bl-md rounded-tl-md p-2 text-sm font-extrabold"
              onClick={() => changeQuantity("sub")}
            >
              -
            </button>
            <p className="max-w-9 appearance-none bg-transparent px-3 text-sm font-extrabold">
              {quantity}
            </p>
            <button
              className="text-purple hover:bg-purple hover:text-button rounded-br-md rounded-tr-md p-2 text-sm font-extrabold"
              onClick={() => changeQuantity("add")}
            >
              +
            </button>
          </div>
          <button className="bg-purple_dark hover:bg-purple rounded-md p-2 text-white">
            <ShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
