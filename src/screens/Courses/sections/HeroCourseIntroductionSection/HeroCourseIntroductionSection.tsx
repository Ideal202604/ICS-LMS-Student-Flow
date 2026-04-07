export const HeroCourseIntroductionSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full max-w-[883px] items-start gap-8 md:gap-10 lg:gap-12">
      <div className="flex flex-col items-start gap-8 md:gap-10 relative self-stretch w-full">
        <div className="flex flex-col items-start gap-6 md:gap-8 relative self-stretch w-full">
          {/* Badge */}
          <div className="bg-white bg-opacity-[12%] border-[0.5px] border-solid border-white border-opacity-40 inline-flex h-11 md:h-12 items-center justify-center gap-2.5 px-5 md:px-6 py-3 md:py-3.5 rounded-xl">
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-sm md:text-base tracking-[-0.28px] leading-6 whitespace-nowrap">
              Comprehensive Learning
            </span>
          </div>

          {/* Heading + Description */}
          <div className="flex flex-col items-start gap-5 md:gap-7 relative self-stretch w-full">
            <h1 className="w-full [text-shadow:0px_4px_8px_rgba(0,0,0,0.3)] [font-family:'Open_Sans',Helvetica] font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight lg:leading-[1.1]">
              Expert-Led Online Courses for Career Growth
            </h1>

            <p className="self-stretch text-white text-base sm:text-lg md:text-lg leading-7 md:leading-8 [font-family:'Open_Sans',Helvetica] font-normal tracking-[-0.14px]">
              Master in-demand skills with 120+ comprehensive courses designed by industry experts. Learn at your own pace and advance your career with personalized learning paths.
            </p>
          </div>
        </div>
      </div>

      {/* Students row */}
      <div className="inline-flex items-center gap-4 md:gap-5">
        <img
          className="w-32 h-8 md:w-40 md:h-10"
          alt="Student avatars"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/group-33554.png"
        />
        <p className="max-w-[200px] md:max-w-[250px] [font-family:'Open_Sans',Helvetica] font-semibold text-white text-sm md:text-base tracking-[-0.14px] leading-6 md:leading-6">
          120+ students already joined
        </p>
      </div>
    </div>
  );
};
