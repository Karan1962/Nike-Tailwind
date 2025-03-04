import { hamburger, close } from "../assets/icons";
import { headerLogo, white } from "../assets/images";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Theme from "./Theme";
import { useTheme } from "@/context/ThemeProvider";

const CustomNav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const { theme } = useTheme();

  return (
    <header className="padding-x py-6 fixed z-30 w-full bg-white shadow-md dark_bg_text transition-colors duration-300">
      <nav className="flex justify-between max-container items-center relative">
        {/* Logo */}
        <Link className="lg:block flex-initial" to="/">
          <img
            src={theme === "dark" ? white : headerLogo}
            alt="logo"
            width={130}
            height={29}
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="flex flex-1 justify-center items-center gap-10 max-lg:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="hover:text-coral-red dark:hover:text-coral-red font-montserrat text-lg text-slate-gray transition-all dark:text-white"
            >
              {item.label}
            </Link>
          ))}
        </ul>
        <Theme />

        {/* Mobile Menu Toggle Button */}
        <button onClick={() => setMobileNav(true)} className="lg:hidden block">
          <img
            src={hamburger}
            alt="menu"
            width={25}
            height={25}
            className="dark:invert dark:brightness-[300%]"
          />
        </button>
      </nav>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileNav && (
          <motion.nav
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed top-0 left-0 h-screen w-[70%] max-w-sm p-6 flex flex-col gap-6 text-2xl font-semibold z-50
              ${
                theme === "dark"
                  ? "bg-black text-white shadow-gray-800"
                  : "bg-white text-black shadow-lg"
              }
            `}
          >
            {/* Close Button */}
            <button
              onClick={() => setMobileNav(false)}
              className="absolute right-4 top-4 border-2 border-gray-300 hover:border-red-500 rounded p-1"
            >
              <img
                src={close}
                alt="close"
                width={18}
                height={18}
                className="dark:invert"
              />
            </button>

            {/* Logo */}
            <div className="py-4">
              <img src={headerLogo} alt="logo" width={120} height={30} />
            </div>

            {/* Mobile Nav Links */}
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="hover:bg-coral-red rounded-md p-3 cursor-pointer transition-all "
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
