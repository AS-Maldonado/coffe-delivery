import { MapPin, ShoppingCart } from "lucide-react";
import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header className="py-8">
      <nav className="flex justify-between">
        <img src={Logo} alt="Coffe Delivery Logo" />
        <div className="flex gap-1 sm:gap-3">
          <div className="flex items-center rounded-md bg-purple_light p-2">
            <MapPin className="mr-0.5 text-purple" />
            <h3 className="text-sm text-purple_dark sm:text-base">
              Porto Alegre, RS
            </h3>
          </div>
          <button className="rounded-md bg-yellow_light p-2 text-yellow_dark hover:bg-yellow_dark hover:text-yellow_light">
            <ShoppingCart />
          </button>
        </div>
      </nav>
    </header>
  );
}
