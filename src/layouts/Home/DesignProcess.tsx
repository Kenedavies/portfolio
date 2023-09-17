const designLists = [
  {
    title: "Research",
    content:
      "I have 20 years of experience and design high-quality digital products that your clients will love and let your business thrive",
  },
  {
    title: "Quick Communication",
    content:
      "I have 20 years of experience and design high-quality digital products that your clients will love and let your business thrive",
  },
  {
    title: "Quick Communication",
    content:
      "I have 20 years of experience and design high-quality digital products that your clients will love and let your business thrive",
  },
  {
    title: "Quick Communication",
    content:
      "I have 20 years of experience and design high-quality digital products that your clients will love and let your business thrive",
  },
  {
    title: "Quick Communication",
    content:
      "I have 20 years of experience and design high-quality digital products that your clients will love and let your business thrive",
  },
  {
    title: "Quick Communication",
    content:
      "I have 20 years of experience and design high-quality digital products that your clients will love and let your business thrive",
  },
];

export default function DesignProcess() {
  return (
    <div className="bg-[#F2F2F2] pt-8 md:pt-11 pb-10 md:pb-14 px-3 md:px-[50px]">
      <h2 className="text-app-black text-xl md:text-[30px] font-saira-bold mb-3">
        This section will explain design process
      </h2>
      <p className="text-app-black font-saira-medium mb-5">
        I design user centered products
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-10">
        {designLists.map((design, index) => (
          <div
            key={index}
            className="bg-white pl-5 md:pl-6 pt-7 pb-3 pr-3 md:pr-4"
          >
            <div className="flex itens-center md: gap-3 md:gap-5">
              <div className="w-[123px] h-[142px] relative bg-app-green">
                <div className="w-full h-full absolute top-[-8px] left-[-8px] bg-[#EB5757]"></div>
              </div>
              <div className="flex-1">
                <h5 className="text-app-black text-lg md:text-xl font-saira-bold mb-[10px]">
                  {design.title}
                </h5>
                <p className="text-app-black text-xs md:text-sm">
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
