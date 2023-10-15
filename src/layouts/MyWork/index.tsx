import { useNavigate } from "react-router-dom";
import { myWorkData } from "../../util/myWorkData";

export default function MyWork() {
  const navigate = useNavigate();

  // const workLists = [
  //   {
  //     title: "Wordshop",
  //     content:
  //       "I have 20 years of experience and design high-quality digital products that",
  //     links: "",
  //   },
  //   {
  //     title: "Treepz",
  //     content:
  //       "I have 20 years of experience and design high-quality digital products that",
  //     links: "",
  //   },
  //   {
  //     title: "Cloudsania",
  //     content:
  //       "I have 20 years of experience and design high-quality digital products that I have 20 years of experience and design high-quality digital products that I have 20 years of experience and design high-quality digital products that I have 20 years of experience and design high-quality digital products that",
  //     links: "",
  //   },
  //   {
  //     title: "Syncteams",
  //     content:
  //       "I have 20 years of experience and design high-quality digital products that",
  //     links: "",
  //   },
  // ];
  return (
    <div>
      <section className="px-3 md:px-6 pt-28">
        <div className="container mx-auto py-12 md:py-20">
          <h1 className="text-5xl md:text-[70px] font-saira-bold mb-4 md:mb-6">
            My works
          </h1>
          <p className="max-w-[700px] text-app-gray text-lg md:text-2xl mb-14">
            I have 5 years of experience in designing high-quality digital
            products for B2B and B2C digital products.
          </p>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {myWorkData.map((_card, index) => (
              <article key={index} className="flex flex-col rounded-lg">
                <div className="w-full bg-white flex justify-center rounded-t-lg py-3">
                  <img
                    src="../src/assets/images/iPhone-11-Pro.svg"
                    alt="Iphone"
                  />
                </div>
                <div
                  className="h-full flex flex-col rounded-lg rounded-b-lg px-4 md:px-5 py-8"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.10) -2.76%, rgba(255, 255, 255, 0.10) 103.97%)",
                  }}
                >
                  <h4 className="text-2xl font-saira-semibold">
                    {_card.project}
                  </h4>
                  <p className="text-sm my-4">{_card.experience}</p>
                  <button
                    className="w-full bg-app-green text-app-black rounded-[30px] font-saira-medium py-3 mt-auto"
                    onClick={() => navigate(`/my-work/${_card.project}`)}
                  >
                    View more
                  </button>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-16 lg:mt-28">
            <div className="flex flex-col lg:flex-row gap-y-5">
              <div className="w-full lg:w-2/5 grid grid-cols-2">
                <div>
                  <h4 className="text-[rgba(255,255,255,0.50)] text-lg md:text-2xl font-saira-bold mb-1">
                    SKILLS
                  </h4>
                  <ul>
                    {[
                      "Service design",
                      "Interface design",
                      "Design thinking",
                      "User research",
                      "User testing",
                      "Wireframing",
                      "Prototyping",
                      "Design systems",
                      "Interface design",
                    ].map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[rgba(255,255,255,0.50)] text-lg md:text-2xl font-saira-bold mb-1">
                    TOOLS
                  </h4>
                  <ul>
                    {[
                      "Sketch",
                      "Figma",
                      "Adobe XD",
                      "Webflow",
                      "Framer",
                      "Interface design",
                      "Spline",
                      "Rotato",
                      "Maze (User testing)",
                    ].map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-3/5">
                <div className="min-h-[200px] h-full bg-[#D9D9D9]"></div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
