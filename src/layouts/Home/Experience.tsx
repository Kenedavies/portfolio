const experienceList = [
  {
    company: "Revva",
    title: "Product Designer",
    time: "Feb 23 - Present",
    content:
      "The goal of this project was to create a platform that would allow creators to share exclusive content with their fans and earn money from their subscriptions.",
  },
  {
    company: "Iqube Labs",
    title: "Product Designer",
    time: "June 2021 - Jan 2023",
    content:
      "Researched, designed and documented several projects for a variety of clients. wireframes, prototypes, and mockups to test and iterate on the design.",
  },
  {
    company: "Syncteams",
    title: "Product Designer",
    time: "Feb 2018 - May 2021",
    content:
      "I was responsible for the conception, design, and conducting extensive user research to understand the needs of businesses and the challenges they faced when collaborating on projects. I also analyzed existing collaboration tools to identify their strengths and weaknesses.",
  },
];

export default function Experience() {
  return (
    <div className="py-12 md:py-24">
      <p className="text-lg md:text-2xl text-white font-saira-bold">
        Experience
      </p>
      <section>
        {experienceList.map((experience, i) => (
          <div
            key={i}
            className="flex justify-between flex-col md:flex-row gap-y-5 border-b border-[rgba(255,255,255,0.40)] pt-10 pb-5"
          >
            <div>
              <p className="text-4xl md:text-[70px] font-saira-bold">
                {experience.company}
              </p>
            </div>
            <div className="max-w-[400px]">
              <h2 className="text-xl md:text-[30px] font-saira-bold mb-[10px]">
                {experience.title}
              </h2>
              <p className="md:text-lg mb-3">{experience.time}</p>
              <p className="text-[rgba(255,255,255,0.60)] text-sm md:text-md">
                {experience.content}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
