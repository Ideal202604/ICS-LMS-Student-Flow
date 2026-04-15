export const CoursesOverviewSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-center gap-6 pt-10 pb-4 px-4">
      <div className="flex flex-col items-center gap-4 w-full max-w-[883px]">
        <h2 className="w-full [font-family:'Open_Sans',Helvetica] font-semibold text-black text-[28px] sm:text-[36px] md:text-[44px] text-center tracking-[-0.88px] leading-[36px] sm:leading-[44px] md:leading-[52px]">
          Explore Our All Courses
        </h2>
        <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-black text-base sm:text-lg text-center tracking-[0] leading-6 sm:leading-7">
          Upgrade your skills with industry-ready courses designed to boost your career.
        </p>
      </div>
    </div>
  );
};
