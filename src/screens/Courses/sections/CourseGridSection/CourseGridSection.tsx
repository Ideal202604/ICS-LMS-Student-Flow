import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { EnrollmentCheckoutModal } from "../../../../components/ui/enrollment-checkout-modal";

const coursesData = [
  {
    id: 1,
    slug: "digital-marketing-using-ai",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-5.png",
    rating: "4.5",
    title: "Digital Marketing Using AI",
    description: "Enhance research writing skills using the latest AI-powered tools and strategies.",
    badges: [
      { icon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-3.svg", label: "47 Lesson" },
      { icon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-9.svg", label: "Online" },
      { icon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-7.svg", label: "3 Months" },
    ],
    originalPrice: "₹1,500",
    currentPrice: "₹499",
    discount: "67% OFF",
    ratingIcon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-12.svg",
    discountIcon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame.svg",
    detailsIcon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-1.svg",
    startIcon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-2.svg",
  },
  {
    id: 2,
    slug: "research-writing-ai",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-4.png",
    rating: "4.5",
    title: "Research Writing & AI",
    description: "Enhance research writing skills using the latest AI-powered tools and strategies.",
    badges: [
      { icon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-3.svg", label: "47 Lesson" },
      { icon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-9.svg", label: "Online" },
      { icon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-7.svg", label: "3 Months" },
    ],
    originalPrice: "₹1,500",
    currentPrice: "₹499",
    discount: "67% OFF",
    ratingIcon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-12.svg",
    discountIcon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame.svg",
    detailsIcon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-1.svg",
    startIcon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-2.svg",
  },
  {
    id: 3,
    slug: "digital-marketing-using-ai-2",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-5.png",
    rating: "4.5",
    title: "Digital Marketing Using AI",
    description: "Enhance research writing skills using the latest AI-powered tools and strategies.",
    badges: [
      { icon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-3.svg", label: "47 Lesson" },
      { icon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-9.svg", label: "Online" },
      { icon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-7.svg", label: "3 Months" },
    ],
    originalPrice: "₹1,500",
    currentPrice: "₹499",
    discount: "67% OFF",
    ratingIcon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-12.svg",
    discountIcon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame.svg",
    detailsIcon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-1.svg",
    startIcon: "https://c.animaapp.com/mnx2ynhlJmDJf4/img/frame-2.svg",
  },
];

export const CourseGridSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [enrollModal, setEnrollModal] = useState<{ open: boolean; title: string; price: string; originalPrice: string }>({
    open: false,
    title: "",
    price: "",
    originalPrice: "",
  });

  return (
    <div className="grid-desktop-3 w-full px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] pt-8 sm:pt-12 pb-8 sm:pb-12">
      {coursesData.map((course) => (
        <Card
          key={course.id}
          className="card-animate flex w-full min-h-[500px] sm:min-h-[559px] items-start gap-2.5 p-3 sm:p-6 md:p-8 bg-white rounded-2xl border border-solid border-[#d9edff] shadow-[0px_4px_4px_#9cd2ff40] animate-slide-in-up transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0px_8px_16px_#9cd2ff60]"
        >
          <CardContent className="p-0 flex flex-col w-full items-center gap-6">

            {/* Thumbnail + rating badge */}
            <div className="relative w-full">
              <img
                className="w-full h-[200px] sm:h-[220px] rounded-2xl object-cover object-center"
                alt={course.title}
                src={course.image}
              />
              <div className="flex w-[70px] h-8 items-center gap-2 px-[5px] py-0 absolute bottom-[11px] right-[11px] bg-white rounded-lg">
                <img
                  className="w-4 h-4"
                  alt="Rating star"
                  src={course.ratingIcon}
                />
                <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#1a365d] text-lg tracking-[0] leading-7 whitespace-nowrap">
                  {course.rating}
                </span>
              </div>
            </div>

            {/* Title + description */}
            <div className="flex flex-col items-start gap-2 self-stretch w-full">
              <h3 className="self-stretch [font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8">
                {course.title}
              </h3>
              <p className="self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
                {course.description}
              </p>
            </div>

            {/* Badges */}
            <div className="flex items-center justify-between w-full gap-2">
              {course.badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex flex-1 items-center justify-center gap-2 px-2.5 py-2 bg-[#e7effa] rounded-lg min-w-0"
                >
                  <img className="w-[18px] h-[18px] shrink-0" alt={badge.label} src={badge.icon} />
                  <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#1a365d] text-xs sm:text-sm tracking-[-0.28px] leading-4 whitespace-nowrap overflow-hidden text-ellipsis">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Price + discount */}
            <div className="flex w-full items-center justify-between">
              <div className="inline-flex items-center gap-2.5">
                <span className="[font-family:'Open_Sans',Helvetica] font-normal text-[#55596a] text-xl text-center leading-8 line-through tracking-[0] whitespace-nowrap">
                  {course.originalPrice}
                </span>
                <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-[26px] leading-[44px] tracking-[0] whitespace-nowrap">
                  {course.currentPrice}
                </span>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-2 bg-[#fee9cd] rounded-[20px]">
                <img className="w-6 h-6" alt="Discount" src={course.discountIcon} />
                <span className="[font-family:'Open_Sans',Helvetica] font-bold text-[#f97b08] text-base text-center tracking-[-0.32px] leading-4 whitespace-nowrap">
                  {course.discount}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row gap-2 sm:gap-3 w-full">
              <button
                type="button"
                onClick={() => navigate(`/courses/${course.slug}`)}
                className="flex-1 min-w-0 flex items-center justify-center gap-2 sm:gap-2.5 px-3 sm:px-6 py-2.5 sm:py-3 bg-white rounded-xl border border-solid border-[#8ab5dd] hover:bg-[#e9f6ff] transition-colors cursor-pointer"
              >
                <img className="w-5 sm:w-6 h-5 sm:h-6 shrink-0" alt="Details" src={course.detailsIcon} />
                <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-sm sm:text-base tracking-[0] leading-6 whitespace-nowrap">
                  Details
                </span>
              </button>
              <button
                type="button"
                onClick={() => setEnrollModal({ open: true, title: course.title, price: course.currentPrice + " inc. tax", originalPrice: course.originalPrice })}
                className="flex-1 min-w-0 flex items-center justify-center gap-2 sm:gap-2.5 px-3 sm:px-6 py-2.5 sm:py-3 bg-[#0072de] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] hover:bg-[#005bb5] transition-colors cursor-pointer"
              >
                <img className="w-5 sm:w-6 h-5 sm:h-6 shrink-0" alt="Start Learning" src={course.startIcon} />
                <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-sm sm:text-base tracking-[0] leading-6 whitespace-nowrap">
                  Start Learning
                </span>
              </button>
            </div>

          </CardContent>
        </Card>
      ))}

      <EnrollmentCheckoutModal
        isOpen={enrollModal.open}
        onClose={() => setEnrollModal((prev) => ({ ...prev, open: false }))}
        title={enrollModal.title}
        coursePrice={enrollModal.price}
        originalPrice={enrollModal.originalPrice}
      />
    </div>
  );
};
