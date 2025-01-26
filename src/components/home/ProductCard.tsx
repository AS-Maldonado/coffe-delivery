import { useContext, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../../contexts/CartContext";
import { CartItem } from "../../_types/CartItem";
import { toast } from "react-toastify";

interface ProductCardProps {
  cartItem: CartItem;
}

export function ProductCard({ cartItem }: ProductCardProps) {
  const { addToCart, changeQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState<number>(1);
  const { product } = cartItem;

  function handleChangeQuantity(operationType: string, productName: string) {
    if (operationType === "add") {
      setQuantity((prev) => prev + 1);
      changeQuantity(operationType, productName);
    } else if (operationType === "sub") {
      if (quantity === 1) {
        toast.error("Não é possível comprar menos de 01 Café!");
        return;
      }

      setQuantity((prev) => prev - 1);
      changeQuantity(operationType, productName);
    }
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
              onClick={() => handleChangeQuantity("sub", cartItem.product.name)}
            >
              -
            </button>
            <p className="max-w-9 appearance-none bg-transparent px-3 text-sm font-extrabold">
              {quantity}
            </p>
            <button
              className="rounded-br-md rounded-tr-md p-2 text-sm font-extrabold text-purple hover:bg-purple hover:text-button"
              onClick={() => handleChangeQuantity("add", cartItem.product.name)}
            >
              +
            </button>
          </div>
          <button
            className="rounded-md bg-purple_dark p-2 text-white hover:bg-purple"
            onClick={() => addToCart({ product, quantity })}
          >
            <ShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
