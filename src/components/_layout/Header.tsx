import { MapPin, ShoppingCart } from "lucide-react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { cart } = useContext(CartContext);

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
            className="relative cursor-pointer rounded-md bg-yellow_light p-2 text-yellow_dark hover:bg-yellow_dark hover:text-yellow_light"
          >
            <ShoppingCart />
            <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-yellow_dark text-center text-white">
              {cart.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
