import DavidIcon from "./../assets/images/David.svg";
import { MenuIcon } from "../assets/svg/Svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  function DrawerMobileNav(x: string) {
    // document.getSelection("mobileDrawer").style.width = x;
    console.log("--x", x);
  }
  return (
    <nav className="absolute top-0 left-0 right-0 bg-transparent px-3 md:px-6 py-4">
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
          <Link to="/">Home</Link>
          <Link to="my-work">WORK</Link>
          <Link to="">Contact</Link>
          <Link to="">Read CV</Link>
        </div>
        <button
          onClick={function () {
            DrawerMobileNav("100%");
          }}
          className="md:hidden block text-white bg-greeen-400"
        >
          <MenuIcon />
        </button>
        <div id="mobileDrawer" className="hidden"></div>
      </div>
    </nav>
  );
}
