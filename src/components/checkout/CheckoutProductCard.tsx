import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CheckoutProductExibition } from "./CheckoutProductExibition";
import { useFormContext } from "react-hook-form";

export function CheckoutProductCard() {
  const { cart, changeQuantity, removeProductFromCart } =
    useContext(CartContext);
  const { setValue } = useFormContext();
  const [allProductsPrice, setAllProductsPrice] = useState<number>(0);

  const totalPrice = allProductsPrice ? allProductsPrice + 3.5 : 0.0;

  useEffect(() => {
    const cartItensPrice = cart.map(
      (item) => item.quantity * item.product.price,
    );

    const priceOfAllItens = cartItensPrice.reduce(
      (acumulador, price) => acumulador + price,
      0,
    );

    setValue("itens", cart);
    setAllProductsPrice(priceOfAllItens);
    setValue("precoItens", priceOfAllItens);
  }, [cart, setValue]);

  useEffect(() => {
    setValue("precoTotal", totalPrice);
  }, [totalPrice, setValue]);

  return (
    <div className="my-3 rounded-bl-[36px] rounded-tr-[36px] bg-card p-10">
      <div className="max-h-60 overflow-y-scroll pr-2">
        {cart.map((item) => (
          <CheckoutProductExibition
            key={item.product.name}
            cartItem={item}
            removeProductFromCart={removeProductFromCart}
            changeQuantity={changeQuantity}
          />
        ))}
      </div>
      <div className="my-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-text">Total de itens: </p>
          <p className="text-base text-text">
            R$ {allProductsPrice.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-text">Entrega: </p>
          <p className="text-sm text-text">R$ 3,50</p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-subtitle">Total:</h3>
          <p className="text-lg font-bold text-subtitle">
            R$ {totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-yellow p-3 text-center text-sm uppercase text-white hover:bg-yellow_dark"
      >
        Confirmar pedido
      </button>
    </div>
  );
}
