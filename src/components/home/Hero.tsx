import { Clock, Coffee, Dices, ShoppingCart } from "lucide-react";
import MainImage from "../../assets/main_image.svg";

export function Hero() {
  return (
    <div className="flex items-center py-20">
      <div className="w-3/5">
        <div className="mb-16">
          <h1 className="text-title font-baloo mb-4 text-5xl font-extrabold leading-[60px]">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-subtitle pr-10 text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <ul className="flex flex-wrap gap-7">
          <li className="flex items-center gap-2">
            <div className="bg-yellow_dark rounded-full p-2.5 text-white">
              <ShoppingCart size={16} />
            </div>
            <p className="text-text">Compra simples e segura</p>
          </li>
          <li className="flex items-center gap-2">
            <div className="bg-text rounded-full p-2.5 text-white">
              <Dices size={16} />
            </div>
            <p className="text-text">Embalagem mantém o café intacto</p>
          </li>
          <li className="flex items-center gap-2">
            <div className="bg-yellow rounded-full p-2.5 text-white">
              <Clock size={16} />
            </div>
            <p className="text-text">Entrega rápida e rastreada</p>
          </li>
          <li className="flex items-center gap-2">
            <div className="bg-purple rounded-full p-2.5 text-white">
              <Coffee size={16} />
            </div>
            <p className="text-text">O café chega fresquinho até você</p>
          </li>
        </ul>
      </div>
      <div>
        <img src={MainImage} alt="Main Image Banner" />
      </div>
    </div>
  );
}
