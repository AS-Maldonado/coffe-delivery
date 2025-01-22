import { MapPin, ShoppingCart } from "lucide-react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="py-8">
      <nav className="flex justify-between">
        <Link to="/">
          <img src={Logo} alt="Coffe Delivery Logo" />
        </Link>

        <div className="flex gap-1 sm:gap-3">
          <div className="flex items-center rounded-md bg-purple_light p-2">
            <MapPin className="mr-0.5 text-purple" />
            <h3 className="text-sm text-purple_dark sm:text-base">
              Porto Alegre, RS
            </h3>
          </div>
          <Link
            to="/checkout"
            className="cursor-pointer rounded-md bg-yellow_light p-2 text-yellow_dark hover:bg-yellow_dark hover:text-yellow_light"
          >
            <ShoppingCart />
          </Link>
        </div>
      </nav>
    </header>
  );
}
