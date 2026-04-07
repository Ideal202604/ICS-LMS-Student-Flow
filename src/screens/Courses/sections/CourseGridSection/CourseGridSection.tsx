import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const coursesData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
];

const metaIcons = {
  lessons: "https://c.animaapp.com/mnmyaijxgewU4q/img/frame-10.svg",
  mode: "https://c.animaapp.com/mnmyaijxgewU4q/img/frame-5.svg",
  duration: "https://c.animaapp.com/mnmyaijxgewU4q/img/frame-7.svg",
};

type FeedbackMap = { [id: number]: "enrolled" | "details" | null };

export const CourseGridSection = (): JSX.Element => {
  const [feedback, setFeedback] = useState<FeedbackMap>({});

  const handleEnroll = (id: number) => {
    setFeedback((prev) => ({ ...prev, [id]: "enrolled" }));
    setTimeout(() => setFeedback((prev) => ({ ...prev, [id]: null })), 2500);
  };

  const handleDetails = (id: number) => {
    setFeedback((prev) => ({ ...prev, [id]: "details" }));
    setTimeout(() => setFeedback((prev) => ({ ...prev, [id]: null })), 2500);
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 pt-4 md:pt-8 pb-16 md:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1440px] mx-auto">
        {coursesData.map((course) => (
          <Card
            key={course.id}
            className="flex w-full flex-col items-start gap-0 p-0 bg-white rounded-2xl border border-[#e0ebf7] shadow-[0px_2px_8px_rgba(0,72,222,0.08)] hover:shadow-[0px_8px_24px_rgba(0,72,222,0.12)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <CardContent className="flex flex-col w-full items-stretch gap-0 p-0">
              {/* Course thumbnail with rating badge */}
              <div className="relative w-full h-[200px] md:h-[220px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt={course.title}
                  src={course.image}
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col items-start gap-5 p-6 md:p-7 self-stretch w-full">
                {/* Title, rating and description */}
                <div className="flex flex-col items-start gap-3 self-stretch w-full">
                  <div className="flex items-center justify-between w-full gap-3">
                    <h3 className="flex-1 [font-family:'Open_Sans',Helvetica] font-bold text-[#1a365d] text-lg md:text-xl tracking-[-0.28px] leading-7">
                      {course.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-[0px_4px_12px_rgba(0,0,0,0.08)]">
                      <img className="w-4 h-4" alt="Star rating icon" src="https://c.animaapp.com/mnmyaijxgewU4q/img/frame-1.svg" />
                      <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#1a365d] text-sm tracking-[-0.14px] leading-5">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                  <p className="self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-[#55596a] text-sm md:text-base tracking-[-0.14px] leading-6">
                    {course.description}
                  </p>
                </div>

                {/* Meta badges */}
                <div className="gap-3 md:gap-4 inline-flex items-center flex-wrap w-full">
                  <div className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#e9f6ff] rounded-lg border border-[#b8d9f1]">
                    <img className="w-4 h-4" alt="Lessons" src={metaIcons.lessons} />
                    <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-xs md:text-sm tracking-[-0.14px] leading-5 whitespace-nowrap">
                      {course.lessons}
                    </span>
                  </div>
                  <div className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#e9f6ff] rounded-lg border border-[#b8d9f1]">
                    <img className="w-4 h-4" alt="Mode" src={metaIcons.mode} />
                    <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-xs md:text-sm tracking-[-0.14px] leading-5 whitespace-nowrap">
                      {course.mode}
                    </span>
                  </div>
                  <div className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-[#e9f6ff] rounded-lg border border-[#b8d9f1]">
                    <img className="w-4 h-4" alt="Duration" src={metaIcons.duration} />
                    <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-xs md:text-sm tracking-[-0.14px] leading-5 whitespace-nowrap">
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex w-full items-center justify-between gap-4 pt-2">
                  <div className="inline-flex items-center gap-3">
                    <span className="font-normal text-[#9ca3af] text-sm md:text-base text-start leading-6 line-through [font-family:'Open_Sans',Helvetica] tracking-[-0.14px]">
                      {course.originalPrice}
                    </span>
                    <span className="font-bold text-[#1a365d] text-lg md:text-xl leading-7 [font-family:'Open_Sans',Helvetica] tracking-[-0.28px]">
                      {course.discountedPrice}
                    </span>
                  </div>
                  <div className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#fef3e2] rounded-full border border-[#fcc97c]">
                    <img className="w-5 h-5" alt="Discount" src="https://c.animaapp.com/mnmyaijxgewU4q/img/frame-6.svg" />
                    <span className="[font-family:'Open_Sans',Helvetica] font-bold text-[#f97b08] text-xs md:text-sm tracking-[-0.14px] leading-5 whitespace-nowrap">
                      {course.discount}
                    </span>
                  </div>
                </div>

                {/* Feedback toast */}
                {feedback[course.id] && (
                  <div className="w-full text-center text-xs md:text-sm font-semibold py-2.5 px-4 rounded-lg bg-[#d1f4ee] text-[#10b981] [font-family:'Open_Sans',Helvetica] animate-pulse">
                    {feedback[course.id] === "enrolled" ? "🎉 Enrolled successfully!" : "📋 Opening details..."}
                  </div>
                )}

                {/* Action buttons */}
                <div className="gap-3 inline-flex items-center w-full justify-center flex-wrap pt-2">
                  <Button
                    variant="outline"
                    onClick={() => handleDetails(course.id)}
                    className="h-11 md:h-12 gap-2 px-5 py-2.5 bg-white rounded-lg border border-[#0072de] text-[#0072de] inline-flex items-center transition-all hover:bg-[#e9f6ff] active:scale-95"
                  >
                    <img className="w-5 h-5" alt="Details" src="https://c.animaapp.com/mnmyaijxgewU4q/img/frame-8.svg" />
                    <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-sm md:text-base tracking-[-0.14px] leading-6 whitespace-nowrap">
                      View Details
                    </span>
                  </Button>
                  <Button
                    onClick={() => handleEnroll(course.id)}
                    className="h-11 md:h-12 gap-2 px-5 py-2.5 bg-[#0072de] rounded-lg border border-[#0072de] shadow-[0px_4px_12px_rgba(0,72,222,0.25)] text-white inline-flex items-center justify-center transition-all hover:bg-[#005bbf] active:scale-95"
                  >
                    <img className="w-5 h-5" alt="Start Learning" src="https://c.animaapp.com/mnmyaijxgewU4q/img/frame.svg" />
                    <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-sm md:text-base tracking-[-0.14px] leading-6 whitespace-nowrap">
                      Start Learning
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
