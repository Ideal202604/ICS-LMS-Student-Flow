export const ContactHeroBannerSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full max-w-[696px] items-start gap-6 px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px]">
      <div className="flex flex-col items-start gap-8 w-full">
        <div className="flex flex-col items-start gap-6 w-full">
          {/* Support badge */}
          <div className="bg-[#c8c8c81a] border-[0.5px] border-solid border-white inline-flex h-12 items-center justify-center gap-2.5 px-5 py-4 rounded-lg">
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#f7fafc] text-base tracking-[0] leading-7 whitespace-nowrap">
              24/7 Support Available
            </span>
          </div>
          {/* Heading and description */}
          <div className="flex flex-col items-start gap-4 w-full">
            <h1 className="w-full mt-[-1.00px] [text-shadow:0px_3px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-white text-3xl sm:text-4xl md:text-[44px] tracking-[0] leading-[1.25]">
              Let&#39;s Transform Your Career Together
            </h1>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-base sm:text-lg tracking-[0] leading-7">
              Get personalized guidance from industry experts. Ask about
              courses, admissions, placements, or schedule a free demo class.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
