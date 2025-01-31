import { Trash2 } from "lucide-react";
import { CartItem } from "../../_types/CartItem";

interface CheckoutProcutExibitionProps {
  cartItem: CartItem;
  removeProductFromCart: (productName: string) => void;
  changeQuantity: (operationType: string, productName: string) => void;
}

export function CheckoutProductExibition({
  cartItem,
  removeProductFromCart,
  changeQuantity,
}: CheckoutProcutExibitionProps) {
  return (
    <div className="flex items-start justify-between border-b border-button py-6">
      <div className="flex items-center gap-5">
        <img
          src={cartItem.product.image}
          alt={`${cartItem.product.name} Ilustration`}
          className="h-[64px] w-[64px]"
        />
        <div>
          <h3 className="mb-2 text-subtitle">{cartItem.product.name}</h3>
          <div className="flex gap-2">
            <div className="flex max-w-[72px] items-center justify-between rounded-md bg-button">
              <button
                type="button"
                className="rounded-bl-md rounded-tl-md px-2 py-1 text-sm font-extrabold text-purple hover:bg-purple hover:text-button"
                onClick={() => changeQuantity("sub", cartItem.product.name)}
              >
                -
              </button>
              <p className="appearance-none bg-transparent px-2 py-1 text-sm">
                {cartItem.quantity}
              </p>
              <button
                type="button"
                className="rounded-br-md rounded-tr-md px-2 py-1 text-sm font-extrabold text-purple hover:bg-purple hover:text-button"
                onClick={() => changeQuantity("add", cartItem.product.name)}
              >
                +
              </button>
            </div>
            <button
              type="button"
              onClick={() => removeProductFromCart(cartItem.product.name)}
              className="group flex items-center justify-between gap-1 rounded-md bg-button px-2 py-1 text-xs uppercase text-text hover:bg-purple hover:text-white"
            >
              <Trash2
                className="text-purple group-hover:text-white"
                size={16}
              />
              Remover
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-md font-bold text-text">
        R$ {cartItem.product.price.toFixed(2)}
      </h2>
    </div>
  );
}
