export const HeroCourseIntroductionSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full max-w-[883px] items-start gap-4 md:gap-6">
      <div className="flex flex-col items-start gap-5 md:gap-8 relative self-stretch w-full">
        <div className="flex flex-col items-start gap-4 md:gap-6 relative self-stretch w-full">
          {/* Badge */}
          <div className="bg-[#c8c8c81a] border-[0.5px] border-solid border-white inline-flex h-10 md:h-12 items-center justify-center gap-2.5 px-4 md:px-5 py-3 md:py-4 rounded-lg">
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#f7fafc] text-sm md:text-base tracking-[0] leading-7 whitespace-nowrap">
              Comprehensive Learning
            </span>
          </div>

          {/* Heading + Description */}
          <div className="flex flex-col items-start gap-3 md:gap-4 relative self-stretch w-full">
            <h1 className="w-full [text-shadow:0px_3px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-[0] leading-tight lg:leading-[84px]">
              Lorem ipsum dolor sit amet consectetur In.
            </h1>

            <p className="self-stretch text-white text-sm sm:text-base md:text-lg leading-6 md:leading-7 [font-family:'Open_Sans',Helvetica] font-normal tracking-[0] line-clamp-4 md:line-clamp-none">
              Lorem ipsum dolor sit amet consectetur. Commodo cursus quis at
              felis feugiat donec amet eget. Ac porttitor orci pellentesque diam
              tortor eu consectetur accumsan eget. Suspendisse eget cum ut cras
              vel luctus nibh. Sed sed vulputate nec justo blandit purus. Orci
              est dictumst.
            </p>
          </div>
        </div>
      </div>

      {/* Students row */}
      <div className="inline-flex items-center gap-[13px]">
        <img
          className="w-24 h-6 md:w-32 md:h-8"
          alt="Group"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/group-33554.png"
        />
        <p className="w-[140px] md:w-[169px] [font-family:'Montserrat',Helvetica] font-semibold text-app-background text-sm md:text-lg tracking-[0] leading-6 md:leading-7">
          120+ Students are join our courses
        </p>
      </div>
    </div>
  );
};
