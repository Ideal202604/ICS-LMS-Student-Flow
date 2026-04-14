export const CoursesOverviewSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-center gap-6 py-8 md:py-6 px-4">
      <div className="flex flex-col items-center gap-4 w-full max-w-[883px]">
        <h2 className="w-full mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-semibold text-[#1a365d] text-3xl md:text-[44px] text-center tracking-[-0.88px] leading-tight md:leading-[52px]">
          Explore Our All Courses
        </h2>
        <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-[#55596a] text-base md:text-lg text-center tracking-[0] leading-7">
          Upgrade your skills with industry-ready courses designed to boost your career.
        </p>
      </div>
    </div>
  );
};
