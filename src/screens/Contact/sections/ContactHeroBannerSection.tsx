export const ContactHeroBannerSection = (): JSX.Element => {
  return (
    <div className="w-full px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px]">
      <div
        className="flex flex-col items-start gap-4 sm:gap-5"
        style={{ maxWidth: "clamp(280px, 55vw, 580px)" }}
      >
        {/* Support badge */}
        <div className="bg-[#c8c8c81a] border-[0.5px] border-solid border-white inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-lg">
          <span
            className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#f7fafc] tracking-[0] leading-7 whitespace-nowrap"
            style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}
          >
            24/7 Support Available
          </span>
        </div>

        {/* Heading */}
        <h1
          className="[text-shadow:0px_3px_6px_#00000060] [font-family:'Open_Sans',Helvetica] font-semibold text-white tracking-[0] leading-[1.2]"
          style={{ fontSize: "clamp(22px, 3.6vw, 44px)" }}
        >
          Let&#39;s Transform Your Career Together
        </h1>

        {/* Description */}
        <p
          className="[font-family:'Open_Sans',Helvetica] font-normal text-white tracking-[0] leading-[1.6]"
          style={{ fontSize: "clamp(14px, 1.5vw, 18px)" }}
        >
          Get personalized guidance from industry experts. Ask about
          courses, admissions, placements, or schedule a free demo class.
        </p>
      </div>
    </div>
  );
};
