const designLists = [
  {
    title: "Research",
    content: (
      <>
        I try to gain an empathic understanding of the problem stakeholders are
        trying to solve, Identify and understand identify user needs, pain
        points, opportunities for improvement, how they think, and how they
        behave. <br /> In addition to competitor research i seek to understand
        the market and existing products..
      </>
    ),
    url: "/src/assets/images/research-illustration.svg",
  },
  {
    title: "Wireframes & prototypes",
    content: (
      <>
        An experimental stage aimed at identifying the best possible solution
        for each of the problems identified during the first three stages.
        <br />
        The solutions are implemented within the prototypes and, one by one,
        they are investigated and then accepted, improved or rejected based on
        the users’ experiences.
      </>
    ),
    url: "/src/assets/images/saas-wireframe-illustration.svg",
  },
  {
    title: "Analyze",
    content: (
      <>
        l’ll analyze my observations to define the core problems identified to
        create a user centric problem statement.
        <br /> Collect ideas to establish features, functions and other elements
        to solve the problem at hand. With this knowledge, i can start to look
        at the problem from different perspectives and ideate innovative
        solutions to the problem statement.
      </>
    ),
    url: "/src/assets/images/data-analysis-illustration.svg",
  },
  {
    title: "User testing",
    content:
      "At the testing stage of the design thinking process is to test hypothesis and validation, validade the key reasoning that underlines the design. This is the moment to double check that you have formulated the right problem, and that your solution actually contributes to the user.",
    url: "/src/assets/images/cuate-illustration.svg",
  },
  {
    title: "User personas & user flows",
    content:
      "Armed with meaningful insights from the research and analysis phase, I then get to work on crafting user personas. To humanize different target user groups to build empathy with the user and to prioritize key features and design decisions based on real user data.",
    url: "/src/assets/images/user-info-animation-concept-illustration.svg",
  },
  {
    title: "Design",
    content:
      "This is visually appealing interface that represent a collation of all the process that addresses and users needs and pain points designing each screen or page with which a user interacts and ensuring that the UI visually communicates the path that a UX designer has laid out.",
    url: "/src/assets/images/mobile-app-illustration.svg",
  },
];

export default function DesignProcess() {
  return (
    <div className="bg-[#121212] pt-8 md:pt-11 pb-10 md:pb-14 px-3 md:px-[50px]">
      <h2 className="text-white text-xl md:text-[30px] font-saira-bold mb-3">
        From conception to production
      </h2>
      <p className="text-white font-saira-medium mb-5">
        This section will explain my design process
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-14">
        {designLists.map((design, index) => (
          <div
            key={index}
            className="bg-[#161616] pl-5 md:pl-6 pt-7 pb-3 pr-3 md:pr-4"
          >
            <div className="flex itens-center md: gap-3 md:gap-5">
              <div className="w-[123px] h-[142px] relative bg-app-green">
                <div className="w-full h-full absolute top-[-8px] left-[-8px] bg-[#EB5757] grid place-content-center">
                  <img src={design.url} alt={design.title} />
                </div>
              </div>
              <div className="flex-1">
                <h5 className="text-white text-lg md:text-xl font-saira-bold mb-[10px]">
                  {design.title}
                </h5>
                <p className="text-white text-xs md:text-sm">
                  {design.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
