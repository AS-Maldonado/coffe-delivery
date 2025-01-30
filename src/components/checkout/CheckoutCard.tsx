import { ReactNode } from "react";
import { CheckoutInput, CheckoutInputProps } from "./CheckoutInput";
import { CheckoutPaymentSelection } from "./CheckoutPaymentSelection";

interface CheckoutCardProps {
  title: string;
  description: string;
  inputs?: CheckoutInputProps[];
  children: ReactNode;
  payment?: boolean;
}

export function CheckoutCard({
  title,
  description,
  inputs,
  children,
  payment,
}: CheckoutCardProps) {
  return (
    <div className="my-3 rounded-md bg-card p-10">
      <div className="mb-8 flex items-start">
        {children}
        <div>
          <h3 className="text-subtitle">{title}</h3>
          <p className="text-sm text-text">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {payment ? (
          <CheckoutPaymentSelection />
        ) : (
          inputs &&
          inputs.map((input) => (
            <CheckoutInput
              key={input.name}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              divClassName={input.divClassName}
            />
          ))
        )}
      </div>
    </div>
  );
}
