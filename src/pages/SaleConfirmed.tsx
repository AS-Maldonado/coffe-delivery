import { Clock, DollarSign, MapPin } from "lucide-react";
import Illustration from "../assets/delivery-illustration.png";
import { useContext, useEffect, useRef } from "react";
import { CheckoutContext } from "../contexts/CheckoutContext";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

export function SaleConfirmed() {
  const { delivery } = useContext(CheckoutContext);
  const { clearCart } = useContext(CartContext);
  const hasClearedCart = useRef(false);

  useEffect(() => {
    if (delivery && !hasClearedCart.current) {
      clearCart();
      hasClearedCart.current = true;
    }
  }, [delivery, clearCart]);

  const endereco = `${delivery?.rua}, ${delivery?.numero} ${delivery?.bairro} - ${delivery?.cidade}, ${delivery?.uf}`;

  return delivery ? (
    <div className="mt-20 flex flex-wrap items-center justify-between gap-8 md:flex-nowrap md:gap-0">
      <div>
        <div className="mb-10">
          <h2 className="font-baloo text-3xl font-extrabold text-yellow_dark">
            Uhu! Pedido confirmado
          </h2>
          <p className="text-xl text-subtitle">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>
        <div className="rounded-bl-3xl rounded-tr-3xl border border-b-purple border-l-yellow border-r-purple border-t-yellow p-10">
          <ul className="flex flex-col gap-8">
            <li className="flex flex-col items-center gap-2 sm:flex-row">
              <div className="rounded-full bg-purple p-2.5 text-white">
                <MapPin size={16} />
              </div>
              <p className="text-text">
                Entrega em <span className="font-bold">{endereco}</span>
              </p>
            </li>
            <li className="flex flex-col items-center gap-2 sm:flex-row">
              <div className="rounded-full bg-yellow p-2.5 text-white">
                <Clock size={16} />
              </div>
              <p className="text-text">Previsão de entrega</p>
              <p className="font-bold text-text">20min - 30min</p>
            </li>
            <li className="flex flex-col items-center gap-2 sm:flex-row">
              <div className="rounded-full bg-yellow_dark p-2.5 text-white">
                <DollarSign size={16} />
              </div>
              <p className="text-text">Pagamento na entrega</p>
              <p className="font-bold text-text">{delivery?.pagamento}</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src={Illustration} alt="Delivery Illustration" />
      </div>
    </div>
  ) : (
    <div className="mt-20 flex flex-col items-center justify-center gap-10 text-center">
      <div>
        <img src={Illustration} alt="Delivery Illustration" />
      </div>
      <div>
        <h2 className="font-baloo text-3xl font-extrabold text-yellow_dark">
          Página Indisponível!
        </h2>
        <p className="text-xl text-subtitle">
          <Link to="/" className="underline">
            Faça seu pedido
          </Link>{" "}
          antes de acessar essa página...
        </p>
      </div>
    </div>
  );
}
