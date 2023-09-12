const experienceList = [
  {
    company: "Syncteams",
    title: "Product Designer, Nitro",
    time: "07/'23 - Present",
    content:
      "I championed the redesign of the bank's internal corporate cards portal, and designed a patented wealth management network visualizer.",
  },
  {
    company: "Iqube Labs",
    title: "Product Designer, Nitro",
    time: "07/'23 - Present",
    content:
      "I championed the redesign of the bank's internal corporate cards portal, and designed a patented wealth management network visualizer.",
  },
  {
    company: "Myrevva",
    title: "Product Designer, Nitro",
    time: "07/'23 - Present",
    content:
      "I championed the redesign of the bank's internal corporate cards portal, and designed a patented wealth management network visualizer.",
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
