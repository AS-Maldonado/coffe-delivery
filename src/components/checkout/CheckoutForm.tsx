import { DollarSign, MapPin } from "lucide-react";
import { CheckoutCard } from "./CheckoutCard";
import { DUMMY_ADDRESS_INPUTS } from "../../api/DummyInputs";
import { CheckoutProductCard } from "./CheckoutProductCard";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import { Delivery } from "../../_types/Delivery";
import { useNavigate } from "react-router-dom";

const cartItenmSchema = z.object({
  product: z.object({
    image: z.string(),
    category: z.string().optional(),
    name: z.string(),
    description: z.string().optional(),
    price: z.number(),
  }),
  quantity: z.number(),
});

const checkoutFormSchema = z.object({
  cep: z.string().min(8).max(8).nonempty("O CEP precisa ser preenchido."),
  rua: z.string().nonempty("A rua precisa ser preenchida."),
  numero: z.string().nonempty("O numero precisa ser preenchido."),
  complemento: z.string().optional(),
  bairro: z.string().nonempty("O bairro precisa ser preenchido."),
  cidade: z.string().nonempty("A cidade precisa ser preenchida."),
  uf: z.string().min(2).max(2).nonempty("O código UF precisa ser preenchido."),
  pagamento: z.string().nonempty("Escolha uma forma de pagamento."),
  precoItens: z
    .number()
    .min(1, "É necessário ter pelo menos um item no carrinho."),
  precoTotal: z
    .number()
    .min(1, "É necessário ter pelo menos um item no carrinho."),
  itens: z
    .array(cartItenmSchema)
    .nonempty("Deve haver pelo menos um item no carrinho."),
});

export function CheckoutForm() {
  const navigate = useNavigate();

  type CheckoutFormData = z.infer<typeof checkoutFormSchema>;

  const methods = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
  });

  const errors = methods.formState.errors;
  const { addDelivery } = useContext(CheckoutContext);

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      toast.error(
        "Houve um erro ao efetuar o pedido... Por favor, verifique se não faltou algo.",
      );
    }
  }, [errors]);

  const submit = (data: CheckoutFormData) => {
    const delivery: Delivery = {
      cep: data.cep,
      rua: data.rua,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf,
      pagamento: data.pagamento,
      precoItens: data.precoItens,
      precoTotal: data.precoTotal,
      itens: data.itens,
    };

    addDelivery(delivery);
    toast.success("Pedido realizado com sucesso!");
    navigate("/confirmed");
  };

  return (
    <FormProvider {...methods}>
      <form
        className="mt-10 flex flex-wrap justify-center gap-8 xl:flex-nowrap"
        onSubmit={methods.handleSubmit(submit)}
      >
        <div className="w-full xl:w-[60%]">
          <h2 className="font-baloo text-xl font-extrabold text-subtitle">
            Complete seu pedido
          </h2>
          <CheckoutCard
            title="Endereço de Entrega"
            description="Informe o endereço onde deseja receber seu pedido"
            inputs={DUMMY_ADDRESS_INPUTS}
          >
            <MapPin size={30} className="mr-2 text-yellow_dark" />
          </CheckoutCard>
          <CheckoutCard
            title="Pagamento"
            description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            payment
          >
            <DollarSign size={30} className="text-purple" />
          </CheckoutCard>
        </div>
        <div className="w-full xl:w-[40%]">
          <h2 className="font-baloo text-xl font-extrabold text-subtitle">
            Complete seu pedido
          </h2>
          <CheckoutProductCard />
        </div>
      </form>
    </FormProvider>
  );
}
