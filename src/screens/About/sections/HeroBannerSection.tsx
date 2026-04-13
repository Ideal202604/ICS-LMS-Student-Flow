export const HeroBannerSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-6">
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
          {/* Pill badge */}
          <div className="bg-[#c8c8c81a] border-[0.5px] border-solid border-white inline-flex h-12 items-center justify-center gap-2.5 px-5 py-4 rounded-lg">
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#f7fafc] text-base tracking-[0] leading-7 whitespace-nowrap">
              Lorem ipsum
            </span>
          </div>
          {/* Heading and description */}
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
            <h1 className="w-full mt-[-1.00px] [text-shadow:0px_3px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-white text-3xl sm:text-5xl lg:text-7xl tracking-[0] leading-[40px] sm:leading-[56px] lg:leading-[84px]">
              Master In Demand Tech Skills
            </h1>
            <p className="self-stretch text-white text-lg leading-7 [font-family:'Open_Sans',Helvetica] font-normal tracking-[0]">
              Lorem ipsum dolor sit amet consectetur. Commodo cursus quis at
              felis feugiat donec amet eget. Ac porttitor orci pellentesque diam
              tortor eu consectetur accumsan eget. Suspendisse eget cum ut cras
              vel luctus nibh. Sed sed vulputate nec justo blandit purus. Orci
              est dictumst.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
