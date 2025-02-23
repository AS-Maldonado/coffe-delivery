import { ReactNode, useState } from "react";
import { toast } from "react-toastify";
import { CartItem } from "../_types/CartItem";
import { CartContext } from "./CartContext";

interface CartProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart({ product, quantity }: CartItem) {
    const dummyCart = cart;

    const hasProductInCart = dummyCart.find(
      (item) => item.product.name === product.name,
    );

    if (hasProductInCart) {
      hasProductInCart.quantity += quantity;
      setCart(dummyCart);
    } else {
      setCart((prev) => [...prev, { product, quantity }]);
    }

    toast.success("Produto adicionado ao carrinho!", { autoClose: 1500 });
  }

  function changeQuantity(operationType: string, productName: string) {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.product.name === productName) {
          if (operationType === "add") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (operationType === "sub") {
            if (item.quantity === 1) {
              toast.error("Não é possível comprar menos de 01 Café!");
              return item;
            }
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      }),
    );
  }

  function removeProductFromCart(productName: string) {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.product.name !== productName);
    });
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        changeQuantity,
        removeProductFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
