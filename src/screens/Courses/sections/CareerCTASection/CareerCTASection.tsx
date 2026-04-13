import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { EnrollmentCheckoutModal } from "../../../../components/ui/enrollment-checkout-modal";

const coursesData = [
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
    discountedPrice: "₹499",
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
    discountedPrice: "₹499",
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
    discountedPrice: "₹499",
    discount: "67% OFF",
  },
];

const metaBadgeIcons = [
  { src: "https://c.animaapp.com/mnmyaijxgewU4q/img/frame-10.svg", key: "lessons" },
  { src: "https://c.animaapp.com/mnmyaijxgewU4q/img/frame-5.svg", key: "mode" },
  { src: "https://c.animaapp.com/mnmyaijxgewU4q/img/frame-7.svg", key: "duration" },
];

type FeedbackMap = { [id: number]: "enrolled" | "details" | null };

export const CareerCTASection = (): JSX.Element => {
  const [feedback, setFeedback] = useState<FeedbackMap>({});
  const [enrollModal, setEnrollModal] = useState<{ open: boolean; title: string; price: string; originalPrice: string }>({ open: false, title: "", price: "", originalPrice: "" });
  const navigate = useNavigate();

  const handleEnroll = (course: typeof coursesData[0]) => {
    setEnrollModal({
      open: true,
      title: course.title,
      price: course.discountedPrice + " inc. tax",
      originalPrice: course.originalPrice,
    });
  };

  const handleDetails = (slug: string) => {
    navigate(`/courses/${slug}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full px-4 md:px-8 lg:px-16 pb-16">
      {coursesData.map((course) => (
        <Card
          key={course.id}
          className="flex w-full items-start gap-2.5 p-6 md:p-8 bg-white rounded-2xl border border-solid border-[#d9edff] shadow-[0px_4px_4px_#9cd2ff40] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0px_8px_16px_#9cd2ff60]"
        >
          <CardContent className="flex flex-col w-full items-center gap-6 p-0">
            {/* Course thumbnail with rating badge */}
            <div className="relative w-full h-[205px]">
              <img
                className="w-full h-[205px] rounded-2xl object-cover"
                alt={course.title}
                src={course.image}
              />
              <div className="flex w-[70px] h-8 items-center gap-2 px-[5px] py-0 absolute bottom-[5px] right-[5px] bg-white rounded-lg">
                <img className="w-4 h-4" alt="Rating star" src="https://c.animaapp.com/mnmyaijxgewU4q/img/frame-1.svg" />
                <span className="font-semibold text-[#1a365d] text-lg leading-7 [font-family:'Open_Sans',Helvetica] tracking-[0] whitespace-nowrap">
                  {course.rating}
                </span>
              </div>
            </div>

            {/* Course title and description */}
            <div className="flex flex-col items-start gap-2 self-stretch w-full">
              <div className="flex flex-col items-start gap-4 self-stretch w-full">
                <h3 className="self-stretch [font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8">
                  {course.title}
                </h3>
              </div>
              <p className="self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
                {course.description}
              </p>
            </div>

            {/* Meta badges */}
            <div className="gap-4 md:gap-10 inline-flex items-center flex-wrap justify-center">
              <div className="inline-flex items-center justify-center gap-2 px-2.5 py-2 bg-[#e7effa] rounded-lg">
                <img className="w-[18px] h-[18px]" alt="Lessons" src={metaBadgeIcons[0].src} />
                <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#1a365d] text-sm tracking-[-0.28px] leading-4 whitespace-nowrap">
                  {course.lessons}
                </span>
              </div>
              <div className="inline-flex items-center justify-center gap-2 px-2.5 py-2 bg-[#e7effa] rounded-lg">
                <img className="w-[18px] h-[18px]" alt="Mode" src={metaBadgeIcons[1].src} />
                <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#1a365d] text-sm tracking-[-0.28px] leading-4 whitespace-nowrap">
                  {course.mode}
                </span>
              </div>
              <div className="inline-flex items-center justify-center gap-2 px-2.5 py-2 bg-[#e7effa] rounded-lg">
                <img className="w-[18px] h-[18px]" alt="Duration" src={metaBadgeIcons[2].src} />
                <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#1a365d] text-sm tracking-[-0.28px] leading-4 whitespace-nowrap">
                  {course.duration}
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex w-full items-center justify-between">
              <div className="inline-flex items-center gap-2.5">
                <span className="font-normal text-[#55596a] text-xl text-center leading-8 line-through [font-family:'Open_Sans',Helvetica] tracking-[0] whitespace-nowrap">
                  {course.originalPrice}
                </span>
                <span className="font-semibold text-black text-[26px] leading-[44px] [font-family:'Open_Sans',Helvetica] tracking-[0] whitespace-nowrap">
                  {course.discountedPrice}
                </span>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-2 bg-[#fee9cd] rounded-[20px]">
                <img className="w-6 h-6" alt="Discount" src="https://c.animaapp.com/mnmyaijxgewU4q/img/frame-6.svg" />
                <span className="[font-family:'Open_Sans',Helvetica] font-bold text-[#f97b08] text-base text-center tracking-[-0.32px] leading-4 whitespace-nowrap">
                  {course.discount}
                </span>
              </div>
            </div>

            {/* Feedback toast */}
            {feedback[course.id] && (
              <div className="w-full text-center text-sm font-semibold py-2 px-4 rounded-lg bg-[#e9f6ff] text-[#0072de] [font-family:'Open_Sans',Helvetica]">
                {feedback[course.id] === "enrolled" ? "🎉 You&#39;ve been enrolled!" : "📋 Details coming soon!"}
              </div>
            )}

            {/* Action buttons */}
            <div className="gap-3 inline-flex items-center w-full justify-center flex-wrap">
              <Button
                variant="outline"
                onClick={() => handleDetails(course.slug)}
                className="h-auto justify-center gap-2.5 px-6 md:px-8 py-3 bg-white rounded-xl border border-solid border-[#8ab5dd] inline-flex items-center transition-colors hover:bg-[#e9f6ff]"
              >
                <img className="w-6 h-6" alt="Details icon" src="https://c.animaapp.com/mnmyaijxgewU4q/img/frame-8.svg" />
                <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-lg tracking-[0] leading-6 whitespace-nowrap">
                  Details
                </span>
              </Button>
              <Button
                onClick={() => handleEnroll(course)}
                className="h-auto inline-flex items-center justify-center gap-2.5 px-6 md:px-8 py-3 bg-[#0072de] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] transition-colors hover:bg-[#005bbf]"
              >
                <img className="w-6 h-6" alt="Start learning icon" src="https://c.animaapp.com/mnmyaijxgewU4q/img/frame.svg" />
                <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-lg tracking-[0] leading-6 whitespace-nowrap">
                  Start Learning
                </span>
              </Button>
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
