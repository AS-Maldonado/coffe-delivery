import { useContext, useState } from "react";
import { Product } from "../../_types/Product";
import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";
import { CartContext } from "../../contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  function changeQuantity(operationType: string) {
    if (operationType === "add") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      if (quantity === 1) {
        toast.error("Não é possível comprar menos de 01 Café!");
        return;
      }

      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }

  function handleAddToCart() {
    addToCart({ product, quantity });
    setQuantity(1);
  }

  return (
    <div className="flex w-[256px] flex-col items-center rounded-bl-[36px] rounded-tr-[36px] bg-card text-center">
      <img
        src={product.image}
        alt={`${product.name} Ilustration`}
        className="relative bottom-[25px]"
      />
      <span className="rounded-full bg-yellow_light px-2 py-1 text-[0.7rem] font-bold uppercase text-yellow_dark">
        {product.category}
      </span>
      <h3 className="mb-1 mt-4 font-baloo text-xl font-extrabold text-subtitle">
        {product.name}
      </h3>
      <p className="px-2 text-sm text-label">{product.description}</p>
      <div className="mb-3 mt-6 flex">
        <p className="mr-3 text-sm font-bold text-text">
          R${" "}
          <span className="text-2xl font-extrabold">
            {product.price.toFixed(2)}
          </span>
        </p>
        <div className="flex items-center gap-2">
          <div className="flex min-w-16 items-center justify-between rounded-md bg-button">
            <button
              className="rounded-bl-md rounded-tl-md p-2 text-sm font-extrabold text-purple hover:bg-purple hover:text-button"
              onClick={() => changeQuantity("sub")}
            >
              -
            </button>
            <p className="max-w-9 appearance-none bg-transparent px-3 text-sm font-extrabold">
              {quantity}
            </p>
            <button
              className="rounded-br-md rounded-tr-md p-2 text-sm font-extrabold text-purple hover:bg-purple hover:text-button"
              onClick={() => changeQuantity("add")}
            >
              +
            </button>
          </div>
          <button
            className="rounded-md bg-purple_dark p-2 text-white hover:bg-purple"
            onClick={handleAddToCart}
          >
            <ShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
