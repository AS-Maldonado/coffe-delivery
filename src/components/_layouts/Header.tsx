import { MapPin, ShoppingCart } from "lucide-react";
import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header className="py-8">
      <nav className="flex justify-between">
        <img src={Logo} alt="Coffe Delivery Logo" />
        <div className="flex gap-3">
          <div className="bg-purple_light flex items-center rounded-md p-2">
            <MapPin className="text-purple mr-0.5" />
            <h3 className="text-purple_dark">Porto Alegre, RS</h3>
          </div>
          <button className="bg-yellow_light text-yellow_dark hover:bg-yellow_dark hover:text-yellow_light rounded-md p-2">
            <ShoppingCart />
          </button>
        </div>
      </nav>
    </header>
  );
}
