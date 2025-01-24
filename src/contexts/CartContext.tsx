import { createContext, ReactNode, useState } from "react";
import { CartItem } from "../_types/CartItem";

interface CartContext {
  cart: CartItem[];
  addToCart: (cartItem: CartItem) => void;
}

interface CartContextProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContext);

export function CartContextProvider({ children }: CartContextProps) {
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
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
