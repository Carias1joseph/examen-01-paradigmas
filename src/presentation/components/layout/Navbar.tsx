import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export const Navbar= () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(!isMenuOpen);
  };

  return (
    <nav className="bg-red-600 text-white px-6 py-3">
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg">GameStore</span>

        {/*links */}
        <div className="hidden md:flex gap-6">

          <Link to="/" className="hover:text-red-200">
            Inicio
          </Link>

          <Link to="/catalog" className="hover:text-red-200">
            Catálogo
          </Link>
        </div>

        {/* Boton menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <Menu/>
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-2 mt-2">

          <Link to="/" className="hover:text-red-200" onClick={toggleMenu}>
            Inicio
          </Link>

          <Link to="/catalog" className="hover:text-red-200"
            onClick={toggleMenu}>
            Catálogo
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;