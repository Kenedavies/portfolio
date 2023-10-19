import { CalendarIcon, EmailIcon } from "../../assets/svg/Svg";
import MyWorkCarousel from "./MyWorkCarousel";
import Experience from "./Experience";
import DesignProcess from "./DesignProcess";

export default function Home() {
  return (
    <main>
      <section className="relative bg-[url('/src/assets/images/Hero-lines.png')] bg-no-repeat bg-cover px-3 md:px-6 pt-28 pb-10 md:pb-20 overflow-hidden">
        {/* horizontal animation start */}

        <div className="horizontal-hero-line absolute top-40 left-0 bg-app-green w-[64px] h-[1px]"></div>
        <div className="horizontal-hero-line-2 absolute bottom-10 md:bottom-[88px] right-0 bg-app-green w-[64px] h-[1px]"></div>
        <div className="vertical-hero-line absolute top-0 left-[20%] bg-app-green w-[1px] h-[64px]"></div>
        <div className="vertical-hero-line-2 absolute bottom-0 right-[20%] bg-app-green w-[1px] h-[64px]"></div>

        {/* horizontal animation end */}
        <div className="container mx-auto py-12 md:py-20">
          <div className="max-w-[750px] mx-auto flex flex-col items-center text-center">
            <div className="text-[40px] md:text-[50px] lg:text-[70px] leading-[60px] md:leading-[112px] font-saira-bold">
              David Udemezue
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-[40px] mt-3">
              SaaS Product designer
            </h3>
            <p className="max-w-[700px] md:text-lg md:text-2xl text-app-gray pt-5 lg:pt-8 mb-12">
              I have 5+ years of experience designing Web or SaaS applications
              in complex or technical spacesand design high-quality digital
              products that your clients will love and let your business thrive.
            </p>
            <div className="flex flex-wrap gap-6 md:gap-8">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-app-green text-app-black text-sm md:text-xl font-saira-medium rounded-[30px] py-3 sm:py-4 px-8">
                <EmailIcon /> <span>Get in touch</span>
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent text-white text-sm md:text-xl font-saira-medium border border-white rounded-[30px] py-3 sm:py-4 px-8">
                <CalendarIcon /> <span>Schedule a call</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 md:px-6 py-10">
        <div className="container mx-auto">
          <MyWorkCarousel />
        </div>
      </section>

      <section className="px-3 md:px-6">
        <div className="container mx-auto">
          <Experience />
        </div>
      </section>

      <section className="bg-[#121212] px-3 md:px-6  py-14 md:py-20">
        <div className="container mx-auto">
          <DesignProcess />
        </div>
      </section>
    </main>
  );
}
