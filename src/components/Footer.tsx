import { CalendarIcon, EmailIcon } from "../assets/svg/Svg";

export default function Footer() {
  return (
    <footer className="px-3 md:px-6 py-16 lg:py-28">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col lg:flex-row gap-10">
          <div className="lg:w-2/4">
            <h2 className="text-2xl md:text-[30px] text-center sm:text-left font-saira-bold">
              Thanks for your time
            </h2>
            <div className="flex justify-between md:justify-start items-center md:gap-24 my-4 md:my-6">
              <p>Email</p>
              <p>Twitter</p>
              <p>Phone number</p>
              <p>Read CV</p>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-8">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-app-green text-app-black text-sm md:text-xl font-saira-medium rounded-[30px] py-3 sm:py-4 px-8">
                <EmailIcon /> <span>Get in touch</span>
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent text-white text-sm md:text-xl font-saira-medium border border-white rounded-[30px] py-3 sm:py-4 px-8">
                <CalendarIcon /> <span>Schedule a call</span>
              </button>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <div className="relative w-fit h-fit mx-auto sm:mx-0">
              <img
                src="/src/assets/images/David.svg"
                alt="David"
                width={221}
                height={221}
                className="w-24 lg:w-[221px] h-24 lg:h-[221px] rounded-full relative z-[2]"
              />
              <div className="absolute bottom-[-5px] lg:bottom-[-10px] right-[-5px] lg:right-[-10px] w-full h-full bg-app-green rounded-full"></div>
            </div>
            <h2
              className="text-app-black text-[30px] font-saira-bold opacity-50 mt-5 lg:mt-8 mb-2"
              style={{ WebkitTextStroke: "0.5px rgb(186, 219, 77)" }}
            >
              David Udemezue
            </h2>
            <p className="opacity-50">Product designer</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
