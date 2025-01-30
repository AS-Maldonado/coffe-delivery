import { InputHTMLAttributes, ReactNode } from "react";
import { useFormContext } from "react-hook-form";

export interface CheckoutInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  divClassName?: string;
}

interface CheckoutPaymentButtonProps {
  children: ReactNode;
  name: string;
  active: boolean;
  handleOnClick: () => void;
}

export function CheckoutInput({
  type,
  name,
  placeholder,
  divClassName,
}: CheckoutInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  if (!name) {
    throw new Error("O atributo 'name' é obrigatório em CheckoutInput.");
  }

  return (
    <div className={divClassName ?? "col-span-3"}>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="w-full rounded-md border border-button bg-input p-3 text-label"
      />
      {errors[name] && (
        <p className="pt-2 text-xs text-red-600">
          * {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
}

export function CheckoutPaymentButton({
  children,
  name,
  active,
  handleOnClick,
}: CheckoutPaymentButtonProps) {
  return (
    <button
      type="button"
      onClick={handleOnClick}
      className={`group flex items-center gap-2 whitespace-nowrap rounded-md p-4 text-xs uppercase hover:bg-purple hover:text-white ${active ? "bg-purple text-white" : "bg-button text-text"}`}
    >
      <span
        className={`group-hover:text-white ${active ? "text-white" : "text-purple"}`}
      >
        {children}
      </span>
      {name}
    </button>
  );
}
