import DavidIcon from "./../assets/images/David.svg";
import { CloseIconOutline, MenuIcon } from "../assets/svg/Svg";
import { Link, useLocation } from "react-router-dom";
import React from "react";

export default function Navbar() {
  const location = useLocation().pathname;
  const mobileRef = React.useRef<HTMLDivElement>(null!);
  function DrawerMobileNav() {
    if (mobileRef.current.style.width === "100%") {
      mobileRef.current.style.width = "0";
    } else {
      mobileRef.current.style.width = "100%";
    }
  }

  // React.useEffect(() => {
  //   if (!mobileRef.current) throw Error("divRef is not assigned");
  //   console.log(mobileRef.current.innerHTML);
  // }, []);

  return (
    <nav className="absolute top-0 left-0 right-0 bg-transparent text-white px-3 md:px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-1 md:gap-2">
          <div className="relative">
            <img src={DavidIcon} alt="David" />
            <div className="absolute bottom-0 end-0 grid place-items-center bg-app-black w-6 h-6 rounded-full">
              <div className="bg-app-green w-4 h-4 rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="text-lg md:text-2xl font-saira-bold">
              David Udemezue
            </div>
            <p className="text-xs md:text-sm">Available to work</p>
          </div>
        </div>
        <div className="hidden md:flex flex-col md:flex-row gap-6 md:gap-16">
          <Link
            to="/"
            className={`${location === "/" ? "text-app-green" : "text-white"}`}
          >
            Home
          </Link>
          <Link
            to="my-work"
            className={`${
              location === "/my-work" || location === "/my-work/:myworkId"
                ? "text-app-green"
                : "text-white"
            }`}
          >
            WORK
          </Link>
          <Link
            to=""
            className={`${location === "" ? "text-app-green" : "text-white"}`}
          >
            Contact
          </Link>
          <Link
            to=""
            className={`${location === "" ? "text-app-green" : "text-white"}`}
          >
            Read CV
          </Link>
        </div>
        <button
          onClick={DrawerMobileNav}
          className="md:hidden block text-white bg-greeen-400"
        >
          <MenuIcon />
        </button>

        {/* start mobile nav */}
        <div
          ref={mobileRef}
          className="fixed top-0 left-0 bottom-0 w-0 max-w-[400px] bg-app-black overflow-hidden z-10 duration-500"
        >
          <div className="flex flex-col  gap-6 px-4 py-6">
            <Link
              to="/"
              className={`${
                location === "/" ? "text-app-green" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="my-work"
              className={`${
                location === "/my-work" || location === "/my-work/:myworkId"
                  ? "text-app-green"
                  : "text-white"
              }`}
            >
              WORK
            </Link>
            <Link
              to=""
              className={`${location === "" ? "text-app-green" : "text-white"}`}
            >
              Contact
            </Link>
            <Link
              to=""
              className={`${location === "" ? "text-app-green" : "text-white"}`}
            >
              Read CV
            </Link>
          </div>
          <div className="absolute top-5 right-4">
            <button onClick={DrawerMobileNav}>
              <CloseIconOutline />
            </button>
          </div>
        </div>
        {/* end mobile nav */}
      </div>
    </nav>
  );
}
