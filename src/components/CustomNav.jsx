import { headerLogo } from "../assets/images";
import { hamburger, close } from "../assets/icons";
import { navLinks } from "../constants";
import React ,{ useState } from "react";

const CustomNav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <header
      className={
        click
          ? "padding-x py-8 fixed z-30 w-full lg:bg-white lg:shadow-md"
          : "padding-x py-8 fixed z-30 w-full bg-white shadow-md"
      }
    >
      <nav className="flex justify-between max-container items-center">
        <a className={click ? "hidden lg:block" : "flex-initial"} href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-red-500 font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          onClick={handleClick}
          className={click ? "hidden" : "lg:hidden block"}
        >
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>

      {/* toggle sidenavbar code starts here*/}

      <ul
        className={
          click
            ? "flex flex-1 justify-center items-start flex-col gap-16 w-[70%] h-[100vh] absolute top-0 right-0 pl-12 z-10  bg-violet-100 lg:hidden max-sm:w-full"
            : "hidden"
        }
      >
        <div className="pl-12 mt-10 max-sm:pl-0">
          <img src={headerLogo} alt="logo" width={125} height={25} />
        </div>
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="font-montserrat leading-normal text-2xl text-black pl-12 max-sm:pl-0 hover:text-gray-400"
            >
              {item.label}
            </a>
          </li>
        ))}
        <div onClick={handleClick}>
          <img
            className="absolute top-0 left-0"
            src={close}
            alt="close"
            width={25}
            height={25}
          />
        </div>
      </ul>
      {/* toggle sidenav code end here */}
    </header>
  );
};

export default CustomNav;
