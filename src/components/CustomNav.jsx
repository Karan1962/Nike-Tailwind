import { hamburger, close } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CustomNav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className="padding-x py-6 fixed z-30 w-full bg-white shadow-md">
      <nav className="flex justify-between max-container items-center relative">
        {/* Logo */}
        <Link className="lg:block flex-initial" to="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </Link>

        {/* Desktop Nav */}
        <ul className="flex flex-1 justify-center items-center gap-10 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="hover:text-red-500 font-montserrat text-lg text-slate-gray transition-all"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button onClick={() => setMobileNav(true)} className="lg:hidden block">
          <img src={hamburger} alt="menu" width={25} height={25} />
        </button>
      </nav>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileNav && (
          <motion.nav
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }} // Smooth exit animation
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-screen w-[70%] max-w-sm bg-white shadow-lg p-6 flex flex-col gap-6 text-2xl font-semibold z-50"
          >
            {/* Close Button */}
            <button
              onClick={() => setMobileNav(false)}
              className="absolute right-4 top-4 border-2 border-gray-300 hover:border-red-500 rounded p-1"
            >
              <img src={close} alt="close" width={18} height={18} />
            </button>

            {/* Logo */}
            <div className="py-4">
              <img src={headerLogo} alt="logo" width={120} height={30} />
            </div>

            {/* Mobile Nav Links */}
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="hover:bg-coral-red rounded-md p-3 cursor-pointer transition-all"
              >
                <Link to={item.href} onClick={() => setMobileNav(false)}>
                  {item.label}
                </Link>
              </div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default CustomNav;
