import { useState } from "react";
import { CircleDollarSign, CreditCard, Receipt } from "lucide-react";
import { CheckoutPaymentButton } from "./CheckoutInput";

export function CheckoutPaymentSelection() {
  const [paymentValue, setPaymentValue] = useState<string>("");
  return (
    <>
      <input type="hidden" name="payment" value={paymentValue} />
      <CheckoutPaymentButton
        name="Cartão de Crédito"
        handleOnClick={() => setPaymentValue("credito")}
      >
        <CreditCard size={20} />
      </CheckoutPaymentButton>
      <CheckoutPaymentButton
        name="Cartão de Débito"
        handleOnClick={() => setPaymentValue("debito")}
      >
        <Receipt size={20} />
      </CheckoutPaymentButton>
      <CheckoutPaymentButton
        name="Dinheiro"
        handleOnClick={() => setPaymentValue("dinheiro")}
      >
        <CircleDollarSign size={20} />
      </CheckoutPaymentButton>
    </>
  );
}
