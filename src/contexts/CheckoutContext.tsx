import { createContext } from "react";
import { Delivery } from "../_types/Delivery";

interface CheckoutContext {
  delivery: Delivery | null;
  addDelivery: (delivery: Delivery) => void;
}

export const CheckoutContext = createContext({} as CheckoutContext);
