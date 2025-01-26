import { DollarSign, MapPin } from "lucide-react";
import { CheckoutCard } from "./CheckoutCard";
import { DUMMY_ADDRESS_INPUTS } from "../../api/DummyInputs";
import { CheckoutProductCard } from "./CheckoutProductCard";

export function CheckoutForm() {
  return (
    <form className="mt-10 flex gap-8">
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
  );
}
