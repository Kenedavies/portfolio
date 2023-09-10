import React from "react";
import { CalendarIcon } from "../assets/Svg";
import MyWorkCarousel from "../components/MyWorkCarousel";

export default function Home() {
  return (
    <main className="px-3 md:px-6">
      <section>
        <div className="container mx-auto">
          <div className="max-w-[750px]">
            <div className="text-[40px] md:text-[50px] lg:text-[70px] leading-[60px] md:leading-[112px]">
              <span className="font-saira-bold">David Udemezue</span>
              <br /> <span>SaaS Product designer</span>
            </div>
            <p className="max-w-[700px] text-lg md:text-2xl text-app-gray pt-8 mb-12">
              I have 5 years of experience and design high-quality digital
              products that your clients will love and let your business thrive.
            </p>
            <div className="flex flex-wrap gap-6 md:gap-8">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-app-green text-app-black text-sm md:text-xl rounded-[30px] py-3 sm:py-4 px-8">
                <CalendarIcon /> <span>Send a message</span>
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent text-white text-sm md:text-xl border border-white rounded-[30px] py-3 sm:py-4 px-8">
                <CalendarIcon /> <span>Schedule a call</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <MyWorkCarousel />
        </div>
      </section>
    </main>
  );
}
