export const AboutOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 w-full py-8">
      <img
        className="w-full md:w-1/2 lg:w-[662px] h-[220px] sm:h-[260px] md:h-[302px] rounded-2xl object-cover flex-shrink-0"
        alt="Rectangle"
        src="https://c.animaapp.com/mnwxwol3SDKgi5/img/rectangle-39426.png"
      />
      <div className="flex flex-col flex-1 items-start gap-4 md:gap-6">
        <h2 className="self-stretch mt-[-1.00px] text-black text-3xl sm:text-4xl lg:text-[44px] leading-[1.25] lg:leading-[54px] [font-family:'Open_Sans',Helvetica] font-semibold tracking-[0]">
          About Us
        </h2>
        <p className="self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-black text-base sm:text-lg tracking-[0] leading-7">
          Lorem ipsum dolor sit amet consectetur. Commodo cursus quis at felis
          feugiat donec amet eget. Ac porttitor orci pellentesque diam tortor eu
          consectetur accumsan eget. Suspendisse eget cum ut cras vel luctus
          nibh. Sed sed vulputate nec justo blandit purus. Orci est dictumst.
          Lorem ipsum dolor sit amet consectetur. Commodo cursus quis at felis
          feugiat donec amet eget. Ac porttitor orci pellentesque diam tortor eu
          consectetur accumsan eget. Suspendisse eget cum ut cras vel luctus
          nibh. Sed sed vulputate nec justo blandit purus. Orci est
          dictumst.Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </section>
  );
};
