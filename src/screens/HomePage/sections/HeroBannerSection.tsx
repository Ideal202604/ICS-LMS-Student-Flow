import { Button } from "../../../components/ui/button";

export const HeroBannerSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full max-w-[883px] items-start gap-6">
      {/* Top content: badge, heading, description, buttons */}
      <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
        {/* Badge + Heading + Description */}
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
          {/* Accredited Programs badge */}
          <div className="bg-[#c8c8c81a] border-[0.5px] border-solid border-white inline-flex h-12 items-center justify-center gap-2.5 px-5 py-4 rounded-lg">
            <span className="text-[#f7fafc] text-base whitespace-nowrap [font-family:'Open_Sans',Helvetica] font-semibold tracking-[0] leading-7">
              Accredited Programs
            </span>
          </div>
          {/* Heading and description */}
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
            <h1 className="w-full [text-shadow:0px_3px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl tracking-[0] leading-[34px] sm:leading-[48px] md:leading-[56px] lg:leading-[84px] animate-slide-in-left">
              Master In-Demand Skills
              <br />
              With Expert-Led Courses
            </h1>
            <p className="self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-white text-lg tracking-[0] leading-7">
              Explore top-tier, up-to-date online courses designed by industry
              professionals to accelerate your career in technology and creative
              fields.
            </p>
          </div>
        </div>
        {/* CTA Buttons */}
          <div className="inline-flex items-center gap-3 sm:gap-4 flex-wrap">
          <Button className="btn-animate h-auto inline-flex items-center justify-center gap-2.5 px-5 sm:px-[26px] py-2.5 sm:py-3 bg-[#0072de] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] hover:bg-[#005bb5] [font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-base sm:text-lg tracking-[0] leading-6 whitespace-nowrap animate-bounce-in animation-delay-400">
            Explore Courses
          </Button>
          <Button
            variant="outline"
            className="btn-animate h-auto inline-flex items-center justify-center gap-2.5 px-5 sm:px-[26px] py-2.5 sm:py-3 bg-white rounded-xl border border-solid border-[#8ab5dd] hover:bg-gray-50 [font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-base sm:text-lg tracking-[0] leading-6 whitespace-nowrap animate-bounce-in animation-delay-500"
          >
            Contact
          </Button>
          </div>
      </div>
      {/* Rating and Certifications */}
      <div className="flex flex-col w-full max-w-[459px] items-start gap-4">
        {/* Star rating row */}
        <div className="flex items-start gap-2.5 self-stretch w-full">
          <img
            className="flex-shrink-0"
            alt="Frame"
            src="https://c.animaapp.com/mnwpw3l9jXfMum/img/frame-1321317793.svg"
          />
          <span className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
            (4.9/5) Rated by 10,000+ Students.
          </span>
        </div>
        {/* Accredited Certifications */}
        <p className="self-stretch text-white text-lg [font-family:'Open_Sans',Helvetica] font-semibold tracking-[0] leading-7">
          Accredited Certifications.
        </p>
      </div>
    </div>
  );
};
