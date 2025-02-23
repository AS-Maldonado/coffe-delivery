import { createContext } from "react";
import { CartItem } from "../_types/CartItem";

interface CartContext {
  cart: CartItem[];
  addToCart: (cartItem: CartItem) => void;
  changeQuantity: (operationType: string, productName: string) => void;
  removeProductFromCart: (productName: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContext);
