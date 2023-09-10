import React from "react";
import { CalendarIcon } from "../assets/Svg";

export default function Home() {
  return (
    <main className="px-3 md:px-6">
      <section>
        <div className="container mx-auto">
          <div className="text-[40px] md:text-[70px]">
            <span className="font-saira-bold">David Udemezue</span> SaaS Product
            designer
          </div>
          <p className="text-lg md:text-2xl text-app-gray">
            I have 5 years of experience and design high-quality digital
            products that your clients will love and let your business thrive.
          </p>
          <div className="flex">
            <button className="flex items-center gap-3 bg-app-green text-xl rounded-[30px] py-4 px-8">
              <CalendarIcon /> <span>Send a message</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
