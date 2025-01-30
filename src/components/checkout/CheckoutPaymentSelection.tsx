import { useState } from "react";
import { CircleDollarSign, CreditCard, Receipt } from "lucide-react";
import { CheckoutPaymentButton } from "./CheckoutInput";
import { useFormContext } from "react-hook-form";

export function CheckoutPaymentSelection() {
  const [paymentValue, setPaymentValue] = useState<string>("");
  const [buttonActive, setButtonActive] = useState<string>("");

  const {
    register,
    formState: { errors },
  } = useFormContext();

  function handleOnClick(buttonName: string) {
    setButtonActive(buttonName);
    setPaymentValue(buttonName);
  }

  console.log(errors);
  console.log(paymentValue);
  return (
    <>
      <input type="hidden" value={paymentValue} {...register("pagamento")} />
      <CheckoutPaymentButton
        name="Cartão de Crédito"
        active={buttonActive === "credito"}
        handleOnClick={() => handleOnClick("credito")}
      >
        <CreditCard size={20} />
      </CheckoutPaymentButton>
      <CheckoutPaymentButton
        name="Cartão de Débito"
        active={buttonActive === "debito"}
        handleOnClick={() => handleOnClick("debito")}
      >
        <Receipt size={20} />
      </CheckoutPaymentButton>
      <CheckoutPaymentButton
        name="Dinheiro"
        active={buttonActive === "dinheiro"}
        handleOnClick={() => handleOnClick("dinheiro")}
      >
        <CircleDollarSign size={20} />
      </CheckoutPaymentButton>
      {errors["pagamento"] && (
        <p className="col-span-3 pt-2 text-xs text-red-600">
          * {errors["pagamento"]?.message as string}
        </p>
      )}
    </>
  );
}
