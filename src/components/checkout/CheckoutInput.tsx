import { InputHTMLAttributes, ReactNode } from "react";
import { useFormContext } from "react-hook-form";

export interface CheckoutInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
}

interface CheckoutPaymentButtonProps {
  children: ReactNode;
  name: string;
  handleOnClick: () => void;
}

export function CheckoutInput({
  type,
  name,
  placeholder,
  inputClassName,
}: CheckoutInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  if (!name) {
    throw new Error("O atributo 'name' é obrigatório em CheckoutInput.");
  }

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`rounded-md border border-button bg-input p-3 text-label ${inputClassName}`}
      />
      {errors[name] && (
        <p className="text-xs text-red-600">
          * {errors[name]?.message as string}
        </p>
      )}
    </>
  );
}

export function CheckoutPaymentButton({
  children,
  name,
  handleOnClick,
}: CheckoutPaymentButtonProps) {
  return (
    <button
      type="button"
      onClick={handleOnClick}
      className="group flex items-center gap-2 whitespace-nowrap rounded-md bg-button p-4 text-xs uppercase text-text hover:bg-purple hover:text-white"
    >
      <span className="text-purple group-hover:text-white">{children}</span>
      {name}
    </button>
  );
}
