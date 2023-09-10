import React from "react";
import DavidIcon from "./../assets/images/David.svg";

export default function Navbar() {
  return (
    <nav className="bg-red text-red px-3 md:px-6 py-4">
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
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          <a href="#">Home</a>
          <a href="">WORK</a>
          <a href="">Contact</a>
          <a href="">Read CV</a>
        </div>
      </div>
    </nav>
  );
}
