export default function MyWorkCarousel() {
  return (
    <div>
      <div className="flex justify-between items-center flex-wrap gap-10 mb-6">
        <h4 className="text-2xl text-white font-saira-bold">My works</h4>
        <div className="flex items-center gap-1">
          <button className="w-[112px] h-2 bg-app-green rounded-[10px]"></button>
          <button className="w-5 h-2 bg-[rgba(186,219,77,0.10)] rounded-[10px]"></button>
          <button className="w-5 h-2 bg-[rgba(186,219,77,0.10)] rounded-[10px]"></button>
          <button className="w-5 h-2 bg-[rgba(186,219,77,0.10)] rounded-[10px]"></button>
        </div>
      </div>

      <section className="flex bg-white text-app-black rounded-[10px] p-4 md:p-10">
        <div className="w-full lg:w-1/2">
          <div className="text-[60px] font-saira-bold">Cloudsania</div>
          <p>cloud as a service</p>
          <p>
            Cloudsania is a cloud deployment service that allows business
            consult and set up cloud infrastructural service.
          </p>
        </div>
        <div className="w-full lg:w-1/2"></div>
      </section>
    </div>
  );
}
