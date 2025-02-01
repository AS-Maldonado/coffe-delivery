import { ReactNode, useState } from "react";
import { CheckoutContext } from "./CheckoutContext";
import { Delivery } from "../_types/Delivery";

interface CheckoutProviderProps {
  children: ReactNode;
}

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  const [delivery, setDelivery] = useState<Delivery | null>(null);

  function addDelivery(delivery: Delivery) {
    setDelivery(delivery);
  }

  return (
    <CheckoutContext.Provider value={{ delivery, addDelivery }}>
      {children}
    </CheckoutContext.Provider>
  );
}
