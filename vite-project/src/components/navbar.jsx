import React, { useState } from "react";
import logo from "../assets/site_logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="flex justify-between items-center text-center text-black py-3.5 px-8 md:px-20 bg-white drop-shadow-md">
        <a href="/home" className="flex gap-10 items-center">
          <button>
            <img
              alt="logo"
              src={logo}
              className="w-16 h-16 hover:scale-110 transition-all"
            />
          </button>
          <p>Υπηρεσία Φροντίδας Βρεφών και Νηπίων</p>
        </a>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <Link
            to="/g_login"
            className="p-3 hover:bg-red-600 hover:text-white outline outline-1 outline-black rounded-md transition-all cursor-pointer"
          >
            ΓΟΝΕΑΣ
          </Link>
          <Link
            to="/e_login"
            className="p-3 hover:bg-red-600 hover:text-white outline outline-1 outline-black rounded-md transition-all cursor-pointer"
          >
            ΕΠΑΓΓΕΛΜΑΤΙΑΣ
          </Link>
        </ul>

        {/* Mobile Menu Icon */}
        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute xl:hidden top-24 left-0 w-full bg-slate-200 flex-col items-center gap-6 font-semibold text-lg transform transition-all ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{ transition: "opacity 0.3s ease, transform 0.3s ease" }}
        >
          <a href="/g_login">
            <li className="list-none w-full text-center p-4 hover:bg-red-600 hover:text-white transition-all cursor-pointer">
              ΓΟΝΕΑΣ
            </li>
          </a>
          <a href="/e_login">
            <li className="list-none w-full text-center p-4 hover:bg-red-600 hover:text-white transition-all cursor-pointer">
              ΕΠΑΓΓΕΛΜΑΤΙΑΣ
            </li>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
