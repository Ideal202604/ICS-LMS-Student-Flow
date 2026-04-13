import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { EnrollmentCheckoutModal } from "../../../components/ui/enrollment-checkout-modal";

const courseStats = [
  {
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-1321317172.svg",
    value: "324+",
    label: "Enrolled",
  },
  {
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-1321317168.svg",
    value: "3 Months",
    label: "Duration",
  },
  {
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-1321317170.svg",
    value: "4.8/5",
    label: "Rating",
  },
];

interface CourseHeroBannerSectionProps {
  title: string;
  category: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
}

export const CourseHeroBannerSection = ({
  title,
  category,
  description,
  originalPrice,
  discountedPrice,
  discount,
}: CourseHeroBannerSectionProps): JSX.Element => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full max-w-[696px] items-start gap-4 md:gap-6">
        <div className="flex flex-col items-start gap-5 md:gap-8 w-full">
          <div className="flex flex-col items-start gap-4 md:gap-6 w-full">
            <nav className="flex items-center gap-2 h-5">
              <span className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                Courses
              </span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                /
              </span>
              <span className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                {title}
              </span>
            </nav>
            <div className="bg-[#c8c8c81a] border-[0.5px] border-solid border-white inline-flex h-10 md:h-12 items-center justify-center gap-2.5 px-4 md:px-5 py-3 md:py-4 rounded-lg">
              <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#f7fafc] text-sm md:text-base tracking-[0] leading-7 whitespace-nowrap">
                {category}
              </span>
            </div>
            <div className="flex flex-col items-start gap-3 md:gap-4 w-full">
              <h1 className="w-full [text-shadow:0px_3px_4px_#00000040] font-semibold text-2xl sm:text-3xl md:text-[44px] leading-tight md:leading-[54px] [font-family:'Open_Sans',Helvetica] text-white tracking-[0]">
                {title}
              </h1>
              <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg tracking-[0] leading-6 md:leading-7 hidden sm:block">
                {description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-11">
            {courseStats.map((stat, index) => (
              <div key={index} className="inline-flex items-center gap-3 md:gap-4">
                <img
                  className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"
                  alt={stat.label}
                  src={stat.icon}
                />
                <div className="flex flex-col items-start">
                  <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-base md:text-xl tracking-[0] leading-7 whitespace-nowrap">
                    {stat.value}
                  </span>
                  <span className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-sm md:text-lg tracking-[0] leading-6 md:leading-7">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            <div className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-lg md:text-2xl tracking-[0] leading-7 whitespace-nowrap">
              <span className="line-through">{originalPrice}</span>
              <span className="font-semibold text-xl md:text-[32px]"> {discountedPrice} inc. tax</span>
            </div>
            <div className="inline-flex items-center gap-3 md:gap-4">
              <div className="inline-flex items-center justify-center gap-2 px-2.5 py-1 bg-success-correct-answers rounded-lg">
                <img
                  className="w-4 h-4 md:w-5 md:h-5"
                  alt="Online"
                  src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-2.svg"
                />
                <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-sm md:text-lg tracking-[0] leading-7 whitespace-nowrap">
                  Online
                </span>
              </div>
              <div className="inline-flex items-center justify-center gap-2 px-2.5 py-1 bg-[#ff8d28] rounded-lg">
                <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-sm md:text-lg tracking-[0] leading-7 whitespace-nowrap">
                  {discount}
                </span>
              </div>
            </div>
          </div>
          <Button
            onClick={() => setIsEnrollOpen(true)}
            className="w-full sm:w-[335px] h-auto flex items-center justify-center gap-2.5 px-[26px] py-3 bg-[#0072de] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] hover:bg-[#005bb5]"
          >
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-lg tracking-[0] leading-6 whitespace-nowrap">
              Enroll Now
            </span>
          </Button>
        </div>
      </div>

      <EnrollmentCheckoutModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        title={title}
        coursePrice={discountedPrice + " inc. tax"}
        originalPrice={originalPrice}
      />
    </>
  );
};
