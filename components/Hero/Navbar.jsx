import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./links";

const Navbar = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);
  return (
    <header className="p-5 lg:pt-1">
      {/* Desktop menu */}
      <div className="flex justify-between items-center p-4">
        <ul className="hidden lg:flex items-center text-xl gap-16 font-medium text-qiskit-white 2xl:text-4xl 2xl:gap-24">
          {NavLinks.map((navLink, idx) => (
            <Link key={idx} href={navLink.redirect}>
              <li className="cursor-pointer hover:text-qiskit-yellow transition-all duration-500 relative">
                {navLink.content == "Home" && (
                  <div className="absolute left-0 -bottom-[4px] h-[5px] w-4/6 bg-qiskit-white"></div>
                )}
                <p>{navLink.content}</p>
              </li>
            </Link>
          ))}
        </ul>
        <div
          onClick={() => setIsNavToggled(!isNavToggled)}
          className="flex flex-col cursor-pointer gap-2 lg:hidden"
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </div>

      {/* Mobile menu */}
      {isNavToggled && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-center text-xl gap-6 font-medium text-qiskit-white">
            {NavLinks.map((navLink, idx) => (
              <Link key={idx} href={navLink.redirect}>
                <li className="cursor-pointer relative transition-all duration-500 hover:text-qiskit-yellow">
                  {navLink.content == "Home" && (
                    <div className="absolute left-2 -bottom-[4px] h-[5px] w-4/6 bg-qiskit-white"></div>
                  )}
                  <p>{navLink.content}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
