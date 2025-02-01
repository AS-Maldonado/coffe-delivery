import { useEffect, useState } from "react";
import { CircleDollarSign, CreditCard, Receipt } from "lucide-react";
import { CheckoutPaymentButton } from "./CheckoutInput";
import { useFormContext } from "react-hook-form";

export function CheckoutPaymentSelection() {
  const [paymentValue, setPaymentValue] = useState<string>("");
  const [buttonActive, setButtonActive] = useState<string>("");

  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  function handleOnClick(buttonName: string) {
    setButtonActive(buttonName);
    setPaymentValue(buttonName);
  }

  useEffect(() => {
    setValue("pagamento", paymentValue);
  }, [paymentValue, setValue]);

  return (
    <>
      <CheckoutPaymentButton
        name="Cartão de Crédito"
        active={buttonActive === "Cartão de Débito"}
        handleOnClick={() => handleOnClick("Cartão de Débito")}
      >
        <CreditCard size={20} />
      </CheckoutPaymentButton>
      <CheckoutPaymentButton
        name="Cartão de Débito"
        active={buttonActive === "Cartão de Crédito"}
        handleOnClick={() => handleOnClick("Cartão de Crédito")}
      >
        <Receipt size={20} />
      </CheckoutPaymentButton>
      <CheckoutPaymentButton
        name="Dinheiro"
        active={buttonActive === "Dinheiro"}
        handleOnClick={() => handleOnClick("Dinheiro")}
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
