import { InputHTMLAttributes, ReactNode } from "react";

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
  required,
  inputClassName,
}: CheckoutInputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className={`bg-input rounded-md border border-button p-3 text-label ${inputClassName}`}
    />
  );
}

export function CheckoutPaymentButton({
  children,
  name,
  handleOnClick,
}: CheckoutPaymentButtonProps) {
  return (
    <button
      onClick={handleOnClick}
      className="group flex items-center gap-2 whitespace-nowrap rounded-md bg-button p-4 text-xs uppercase text-text hover:bg-purple hover:text-white"
    >
      <span className="text-purple group-hover:text-white">{children}</span>
      {name}
    </button>
  );
}
