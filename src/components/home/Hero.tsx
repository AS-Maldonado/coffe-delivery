import { Clock, Coffee, Dices, ShoppingCart } from "lucide-react";
import MainImage from "../../assets/main_image.svg";

export function Hero() {
  return (
    <div className="flex flex-col-reverse items-center justify-center pb-10 text-center sm:flex-col sm:py-20 lg:flex-row lg:text-left">
      <div className="lg:w-3/5">
        <div className="mb-16">
          <h1 className="mb-4 font-baloo text-4xl font-extrabold text-title lg:text-5xl">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-xl text-subtitle lg:pr-10">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <ul className="flex flex-wrap justify-center gap-7 lg:justify-start">
          <li className="flex flex-col items-center gap-2 sm:flex-row">
            <div className="rounded-full bg-yellow_dark p-2.5 text-white">
              <ShoppingCart size={16} />
            </div>
            <p className="text-text">Compra simples e segura</p>
          </li>
          <li className="flex flex-col items-center gap-2 sm:flex-row">
            <div className="rounded-full bg-text p-2.5 text-white">
              <Dices size={16} />
            </div>
            <p className="text-text">Embalagem mantém o café intacto</p>
          </li>
          <li className="flex flex-col items-center gap-2 sm:flex-row">
            <div className="rounded-full bg-yellow p-2.5 text-white">
              <Clock size={16} />
            </div>
            <p className="text-text">Entrega rápida e rastreada</p>
          </li>
          <li className="flex flex-col items-center gap-2 sm:flex-row">
            <div className="rounded-full bg-purple p-2.5 text-white">
              <Coffee size={16} />
            </div>
            <p className="text-text">O café chega fresquinho até você</p>
          </li>
        </ul>
      </div>
      <div>
        <img
          src={MainImage}
          alt="Main Image Banner"
          className="my-10 lg:my-0"
        />
      </div>
    </div>
  );
}
