export const CourseHeroBannerSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-2.5 pl-[30px] pr-[100px] py-6 bg-[#f3f9ff]">
      <div className="flex items-start gap-[19px] relative self-stretch w-full flex-[0_0_auto]">
        {/* Course number */}
        <div className="text-black text-2xl leading-8 relative w-fit mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-semibold tracking-[0] whitespace-nowrap">
          01
        </div>
        {/* Course title and lesson count */}
        <div className="flex flex-col flex-1 items-start gap-[3px] relative">
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8">
            Introduction to Research Writing &amp; AI: Beginner to Advanced
          </h2>
          <p className="self-stretch text-black text-base leading-6 relative [font-family:'Open_Sans',Helvetica] font-normal tracking-[0]">
            9 Lessons
          </p>
        </div>
      </div>
    </div>
  );
};
