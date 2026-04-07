export const CoursesOverviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 md:gap-10 py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-[900px]">
        <div className="flex flex-col items-center gap-5 md:gap-6 w-full">
          <h2 className="w-full [font-family:'Open_Sans',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-5xl text-center tracking-tight leading-tight md:leading-[1.2]">
            Explore Our Curated Courses
          </h2>
          <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-[#55596a] text-base md:text-lg text-center tracking-[-0.14px] leading-7 md:leading-8">
            Advance your skills with industry-expert instructors. Choose from 100+ carefully designed courses that match your career goals.
          </p>
        </div>
      </div>
    </section>
  );
};
