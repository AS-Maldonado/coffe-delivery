import { useState } from "react";
import { CircleDollarSign, CreditCard, Receipt } from "lucide-react";
import { CheckoutPaymentButton } from "./CheckoutInput";
import { useFormContext } from "react-hook-form";

export function CheckoutPaymentSelection() {
  const [paymentValue, setPaymentValue] = useState<string>("");

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input type="hidden" value={paymentValue} {...register("payment")} />
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
      {errors["payment"] && <p>{errors["payment"]?.message as string}</p>}
    </>
  );
}
