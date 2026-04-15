import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { EnrollmentCheckoutModal } from "../../../components/ui/enrollment-checkout-modal";

const exploreCourses = [
  {
    id: 1,
    slug: "digital-marketing-using-ai",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-5.png",
    rating: "4.5",
    title: "Digital Marketing Using AI",
    description: "Enhance research writing skills us...",
    lessons: "47 Lesson",
    mode: "Online",
    duration: "3 Months",
    originalPrice: "₹1,500",
    currentPrice: "₹499",
    discount: "67% OFF",
  },
  {
    id: 2,
    slug: "research-writing-ai",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-4.png",
    rating: "4.5",
    title: "Research Writing & AI",
    description: "Enhance research writing skills us...",
    lessons: "47 Lesson",
    mode: "Online",
    duration: "3 Months",
    originalPrice: "₹1,500",
    currentPrice: "₹499",
    discount: "67% OFF",
  },
  {
    id: 3,
    slug: "digital-marketing-using-ai-2",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-5.png",
    rating: "4.5",
    title: "Digital Marketing Using AI",
    description: "Enhance research writing skills us...",
    lessons: "47 Lesson",
    mode: "Online",
    duration: "3 Months",
    originalPrice: "₹1,500",
    currentPrice: "₹499",
    discount: "67% OFF",
  },
  {
    id: 4,
    slug: "digital-marketing-using-ai-3",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-5.png",
    rating: "4.5",
    title: "Digital Marketing Using AI",
    description: "Enhance research writing skills us...",
    lessons: "47 Lesson",
    mode: "Online",
    duration: "3 Months",
    originalPrice: "₹1,500",
    currentPrice: "₹499",
    discount: "67% OFF",
  },
  {
    id: 5,
    slug: "research-writing-ai-2",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-4.png",
    rating: "4.5",
    title: "Research Writing & AI",
    description: "Enhance research writing skills us...",
    lessons: "47 Lesson",
    mode: "Online",
    duration: "3 Months",
    originalPrice: "₹1,500",
    currentPrice: "₹499",
    discount: "67% OFF",
  },
  {
    id: 6,
    slug: "digital-marketing-using-ai-4",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-5.png",
    rating: "4.5",
    title: "Digital Marketing Using AI",
    description: "Enhance research writing skills us...",
    lessons: "47 Lesson",
    mode: "Online",
    duration: "3 Months",
    originalPrice: "₹1,500",
    currentPrice: "₹499",
    discount: "67% OFF",
  },
];

const metaIcons = {
  lessons: "https://c.animaapp.com/mnyh1m5aMKY8e5/img/frame-3.svg",
  mode: "https://c.animaapp.com/mnyh1m5aMKY8e5/img/frame.svg",
  duration: "https://c.animaapp.com/mnyh1m5aMKY8e5/img/frame-1.svg",
};

export const ExploreCoursesSectionHP = (): JSX.Element => {
  const navigate = useNavigate();
  const [enrollModal, setEnrollModal] = useState<{ open: boolean; title: string; price: string; originalPrice: string }>({
    open: false, title: "", price: "", originalPrice: "",
  });

  return (
    <>
      <div className="grid-desktop-3 w-full">
        {exploreCourses.map((course) => (
          <Card
            key={course.id}
            className="card-animate flex w-full items-start gap-2.5 p-5 sm:p-8 bg-white rounded-2xl border border-solid border-[#d9edff] shadow-[0px_4px_4px_#9cd2ff40] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0px_8px_16px_#9cd2ff60]"
          >
            <CardContent className="p-0 flex flex-col w-full items-center gap-5 sm:gap-6">

              {/* Thumbnail + rating badge */}
              <div className="relative w-full h-[180px] sm:h-[205px]">
                <img
                  className="w-full h-[180px] sm:h-[205px] rounded-2xl object-cover"
                  alt={course.title}
                  src={course.image}
                />
                <div className="flex w-[70px] h-8 items-center gap-2 px-[5px] py-0 absolute bottom-[11px] right-[11px] bg-white rounded-lg">
                  <img
                    className="w-4 h-4"
                    alt="Rating star"
                    src="https://c.animaapp.com/mnyh1m5aMKY8e5/img/frame-5.svg"
                  />
                  <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#1a365d] text-lg tracking-[0] leading-7 whitespace-nowrap">
                    {course.rating}
                  </span>
                </div>
              </div>

              {/* Title + description */}
              <div className="flex flex-col items-start gap-2 self-stretch w-full">
                <h3 className="self-stretch [font-family:'Open_Sans',Helvetica] font-semibold text-black text-xl sm:text-2xl tracking-[0] leading-7 sm:leading-8">
                  {course.title}
                </h3>
                <p className="self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-black text-base sm:text-lg tracking-[0] leading-6 sm:leading-7">
                  {course.description}
                </p>
              </div>

              {/* Meta badges — full width, equal columns */}
              <div className="flex items-center justify-between w-full gap-2">
                <div className="flex flex-1 items-center justify-center gap-2 px-2.5 py-2 bg-[#e7effa] rounded-lg min-w-0">
                  <img className="w-[18px] h-[18px] shrink-0" alt="Lessons" src={metaIcons.lessons} />
                  <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#1a365d] text-xs sm:text-sm tracking-[-0.28px] leading-4 whitespace-nowrap overflow-hidden text-ellipsis">
                    {course.lessons}
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-center gap-2 px-2.5 py-2 bg-[#e7effa] rounded-lg min-w-0">
                  <img className="w-[18px] h-[18px] shrink-0" alt="Mode" src={metaIcons.mode} />
                  <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#1a365d] text-xs sm:text-sm tracking-[-0.28px] leading-4 whitespace-nowrap overflow-hidden text-ellipsis">
                    {course.mode}
                  </span>
                </div>
                <div className="flex flex-1 items-center justify-center gap-2 px-2.5 py-2 bg-[#e7effa] rounded-lg min-w-0">
                  <img className="w-[18px] h-[18px] shrink-0" alt="Duration" src={metaIcons.duration} />
                  <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#1a365d] text-xs sm:text-sm tracking-[-0.28px] leading-4 whitespace-nowrap overflow-hidden text-ellipsis">
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Price + discount */}
              <div className="flex w-full items-center justify-between">
                <div className="inline-flex items-center gap-2.5">
                  <span className="[font-family:'Open_Sans',Helvetica] font-normal text-[#55596a] text-lg sm:text-xl text-center leading-8 line-through tracking-[0] whitespace-nowrap">
                    {course.originalPrice}
                  </span>
                  <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-[22px] sm:text-[26px] leading-[36px] sm:leading-[44px] tracking-[0] whitespace-nowrap">
                    {course.currentPrice}
                  </span>
                </div>
                <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 sm:px-2.5 py-1.5 sm:py-2 bg-[#fee9cd] rounded-[20px]">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    alt="Discount"
                    src="https://c.animaapp.com/mnyh1m5aMKY8e5/img/frame-7.svg"
                  />
                  <span className="[font-family:'Open_Sans',Helvetica] font-bold text-[#f97b08] text-sm sm:text-base text-center tracking-[-0.32px] leading-4 whitespace-nowrap">
                    {course.discount}
                  </span>
                </div>
              </div>

              {/* Action buttons — full width, equal halves */}
              <div className="flex items-center gap-2 sm:gap-3 w-full">
                <Button
                  variant="outline"
                  onClick={() => navigate(`/courses/${course.slug}`)}
                  className="btn-animate flex-1 h-auto flex items-center justify-center gap-2 sm:gap-2.5 px-3 sm:px-6 py-2.5 sm:py-3 bg-white rounded-xl border border-solid border-[#8ab5dd] transition-colors hover:bg-[#e9f6ff]"
                >
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                    alt="Details"
                    src="https://c.animaapp.com/mnyh1m5aMKY8e5/img/frame-17.svg"
                  />
                  <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-sm sm:text-lg tracking-[0] leading-5 sm:leading-6 whitespace-nowrap">
                    Details
                  </span>
                </Button>
                <Button
                  onClick={() => setEnrollModal({ open: true, title: course.title, price: course.currentPrice + " inc. tax", originalPrice: course.originalPrice })}
                  className="btn-animate flex-1 h-auto flex items-center justify-center gap-2 sm:gap-2.5 px-3 sm:px-6 py-2.5 sm:py-3 bg-[#0072de] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] transition-colors hover:bg-[#005bb5]"
                >
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                    alt="Start Learning"
                    src="https://c.animaapp.com/mnyh1m5aMKY8e5/img/frame-6.svg"
                  />
                  <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-sm sm:text-lg tracking-[0] leading-5 sm:leading-6 whitespace-nowrap">
                    Start Learning
                  </span>
                </Button>
              </div>

            </CardContent>
          </Card>
        ))}
      </div>

      <EnrollmentCheckoutModal
        isOpen={enrollModal.open}
        onClose={() => setEnrollModal((prev) => ({ ...prev, open: false }))}
        title={enrollModal.title}
        coursePrice={enrollModal.price}
        originalPrice={enrollModal.originalPrice}
      />
    </>
  );
};
