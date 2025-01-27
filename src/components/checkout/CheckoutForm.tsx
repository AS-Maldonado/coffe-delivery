import { DollarSign, MapPin } from "lucide-react";
import { CheckoutCard } from "./CheckoutCard";
import { DUMMY_ADDRESS_INPUTS } from "../../api/DummyInputs";
import { CheckoutProductCard } from "./CheckoutProductCard";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function CheckoutForm() {
  const cartItenmSchema = z.object({
    produto: z.object({
      image: z.string(),
      category: z.string().optional(),
      name: z.string(),
      description: z.string().optional(),
      price: z.number(),
    }),
    quantidade: z.number(),
  });

  const checkoutFormSchema = z.object({
    cep: z.string().min(8).max(8),
    rua: z.string(),
    numero: z.string(),
    complemento: z.string().optional(),
    bairro: z.string(),
    cidade: z.string(),
    uf: z.string().min(2).max(2),
    pagamento: z.string(),
    precoItens: z.number(),
    precoTotal: z.number(),
    itens: z.array(cartItenmSchema),
  });

  type CheckoutFormData = z.infer<typeof checkoutFormSchema>;

  const methods = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
  });

  const submit = (data: CheckoutFormData) => {
    console.log("Dados enviados: ", data);
  };

  console.log("Erros do formulário: ", methods.formState.errors);

  return (
    <FormProvider {...methods}>
      <form
        className="mt-10 flex gap-8"
        onSubmit={methods.handleSubmit(submit)}
      >
        <div className="w-[60%]">
          <h2 className="font-baloo text-xl font-extrabold text-subtitle">
            Complete seu pedido
          </h2>
          <CheckoutCard
            title="Endereço de Entrega"
            description="Informe o endereço onde deseja receber seu pedido"
            inputs={DUMMY_ADDRESS_INPUTS}
          >
            <MapPin className="mr-2 text-yellow_dark" />
          </CheckoutCard>
          <CheckoutCard
            title="Pagamento"
            description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            payment
          >
            <DollarSign className="text-purple" />
          </CheckoutCard>
        </div>
        <div className="w-[40%]">
          <h2 className="font-baloo text-xl font-extrabold text-subtitle">
            Complete seu pedido
          </h2>
          <CheckoutProductCard />
        </div>
      </form>
    </FormProvider>
  );
}
