import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { FloatingChatButtons } from "../../components/ui/floating-chat-buttons";
import { CareerCallToActionSection } from "./sections/CareerCallToActionSection";
import { FeaturedCoursesSection } from "./sections/FeaturedCoursesSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { LatestArticlesSection } from "./sections/LatestArticlesSection";
import { StudentTestimonialsSection } from "./sections/StudentTestimonialsSection";

const navItems = [
  { label: "Home", icon: "https://c.animaapp.com/mnwpw3l9jXfMum/img/frame-10.svg", active: true, href: "/" },
  { label: "Courses", icon: "https://c.animaapp.com/mnwpw3l9jXfMum/img/frame-22.svg", active: false, href: "/courses" },
  { label: "About", icon: "https://c.animaapp.com/mnwpw3l9jXfMum/img/frame-4.svg", active: false, href: "/about" },
  { label: "Contact", icon: "https://c.animaapp.com/mnwpw3l9jXfMum/img/frame-7.svg", active: false, href: "/contact" },
];

const whyChooseUsCards = [
  {
    icon: "https://c.animaapp.com/mnwpw3l9jXfMum/img/vector-1.svg",
    iconWidth: "w-[65px]",
    iconHeight: "h-[54px]",
    title: "Flexible Learning",
    description: "Lorem ipsum dolor sit amet consectetur. Ultrices ultrices.",
  },
  {
    icon: "https://c.animaapp.com/mnwpw3l9jXfMum/img/vector.svg",
    iconWidth: "w-14",
    iconHeight: "h-[54px]",
    title: "Career Support",
    description: "Lorem ipsum dolor sit amet consectetur. Ultrices ultrices.",
  },
  {
    icon: "https://c.animaapp.com/mnwpw3l9jXfMum/img/group.png",
    iconWidth: "w-[45.84px]",
    iconHeight: "h-[54px]",
    title: "Hands-on Projects",
    description: "Lorem ipsum dolor sit amet consectetur. Ultrices ultrices.",
  },
  {
    icon: "https://c.animaapp.com/mnwpw3l9jXfMum/img/group-1.png",
    iconWidth: "w-[44.92px]",
    iconHeight: "h-[55px]",
    title: "Expert Mentors",
    description: "Lorem ipsum dolor sit amet consectetur. Ultrices ultrices.",
  },
];

export const HomePage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full bg-white overflow-x-hidden flex flex-col">
      {/* ── Navigation Bar ── */}
      <header className="w-full h-[81px] bg-white flex items-center justify-between relative z-10 shadow-sm px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] animate-fade-in-down">
        <div className="flex items-center">
          <img
            className="w-[69px] h-[84px] object-contain"
            alt="Ics png"
            src="https://c.animaapp.com/mnwpw3l9jXfMum/img/ics-png-2.png"
          />
        </div>
        <nav className="hidden md:flex items-center h-[50px]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.href)}
              className={`inline-flex h-12 items-center justify-center gap-2.5 px-5 py-4 relative rounded-lg cursor-pointer transition-colors hover:bg-[#e8f6ff] ${item.active ? "bg-[#e8f6ff]" : ""}`}
            >
              <img className="relative w-6 h-6" alt="Frame" src={item.icon} />
              <span
                className={`[font-family:'Open_Sans',Helvetica] font-semibold text-base tracking-[0] leading-6 whitespace-nowrap ${item.active ? "text-accent-buttons-links" : "text-primary-headings-navigation"}`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="outline"
            className="h-auto bg-white inline-flex items-center justify-center gap-2.5 px-5 py-4 rounded-lg border-0 shadow-none"
            onClick={() => navigate("/login")}
          >
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-accent-buttons-links text-base tracking-[0] leading-6 whitespace-nowrap">
              Login
            </span>
          </Button>
          <Button
            className="h-auto inline-flex items-center justify-center gap-2.5 px-5 py-4 bg-accent-buttons-links rounded-lg border border-solid border-[#0072de] shadow-[0px_3px_4px_#00000040]"
            onClick={() => navigate("/register")}
          >
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-base tracking-[0] leading-6 whitespace-nowrap">
              Register
            </span>
          </Button>
        </div>
      </header>

      {/* ── Hero Banner Section ── */}
      <section className="relative w-full min-h-[260px] sm:min-h-[380px] md:min-h-[500px] lg:min-h-[655px] flex items-center overflow-hidden">
        {/* Base background image */}
        <img
          className="absolute inset-0 w-full h-full object-cover object-top"
          alt="Background"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/uploaded-asset-1776140688440-0.png"
        />
        {/* Dark blue gradient overlay — same as Courses/About/Contact */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Overlay"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/screan-2.svg"
        />
        <div className="relative z-10 w-full px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] py-6 sm:py-8 md:py-16">
          <HeroBannerSection />
        </div>
      </section>

      {/* ── Featured Courses Section ── */}
      <section className="w-full relative bg-white">
        <div className="flex flex-col items-center gap-3 sm:gap-4 pt-8 sm:pt-12 pb-6 sm:pb-8 px-3 sm:px-6 section-animate">
          <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-[28px] sm:text-[36px] md:text-[44px] text-center tracking-[-0.88px] leading-[36px] sm:leading-[44px] md:leading-[52px] w-full max-w-[883px]">
            Feature Courses
          </h2>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base sm:text-lg text-center tracking-[0] leading-6 sm:leading-7 w-full max-w-[883px]">
            Upgrade your skills with industry-ready courses designed to boost your career.
          </p>
        </div>
        <div className="relative w-full px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] pb-4">
          <FeaturedCoursesSection />
        </div>
        <div className="flex items-center justify-center py-6 sm:py-8">
          <button
            onClick={() => navigate("/courses")}
            className="btn-animate inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 bg-white rounded-xl border border-solid border-[#8ab5dd] cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-lg tracking-[0] leading-6 whitespace-nowrap">
              View All Courses
            </span>
            <img
              className="w-6 h-6"
              alt="Frame"
              src="https://c.animaapp.com/mnwpw3l9jXfMum/img/frame-2.svg"
            />
          </button>
        </div>
      </section>

      {/* ── Why Choose Us Section ── */}
      <section className="w-full relative bg-[#0152a0]">
        <div className="flex flex-col items-center gap-3 sm:gap-4 pt-8 sm:pt-12 pb-6 sm:pb-8 px-3 sm:px-6 section-animate">
          <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-[28px] sm:text-[36px] md:text-[44px] text-center tracking-[-0.88px] leading-[36px] sm:leading-[44px] md:leading-[52px] w-full max-w-[883px]">
            Why Choose Us ?
          </h2>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-base sm:text-lg text-center tracking-[0] leading-6 sm:leading-7 w-full max-w-[883px]">
            Upgrade your skills with industry-ready courses designed to boost your career.
          </p>
        </div>
        {/* Cards + Center Image */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 sm:gap-8 pb-8 sm:pb-12 px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px]">
          {/* Left cards */}
          <div className="flex flex-col gap-6 flex-1">
            {[whyChooseUsCards[0], whyChooseUsCards[2]].map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-start gap-2.5 p-2.5 rounded-[20px] border border-solid border-[#b7dbff]"
              >
                <div className="flex flex-col items-start gap-2.5 p-6 w-full bg-white rounded-2xl">
                  <div className="flex flex-col items-center gap-6 w-full">
                    <img className={`${card.iconWidth} ${card.iconHeight}`} alt={card.title} src={card.icon} />
                    <div className="flex flex-col items-center gap-4 w-full">
                      <div className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl text-center tracking-[-0.48px] leading-8 whitespace-nowrap">
                        {card.title}
                      </div>
                      <div className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-7">
                        {card.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Center image */}
          <div className="flex-shrink-0 w-full max-w-[435px] flex items-center justify-center">
            <img
              className="w-full max-w-[435px] h-auto max-h-[504px] object-cover"
              alt="Rectangle"
              src="https://c.animaapp.com/mnwpw3l9jXfMum/img/rectangle-39407.png"
            />
          </div>
          {/* Right cards */}
          <div className="flex flex-col gap-6 flex-1">
            {[whyChooseUsCards[1], whyChooseUsCards[3]].map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-start gap-2.5 p-2.5 rounded-[20px] border border-solid border-[#b7dbff]"
              >
                <div className="flex flex-col items-start gap-2.5 p-6 w-full bg-white rounded-2xl">
                  <div className="flex flex-col items-center gap-6 w-full">
                    <img className={`${card.iconWidth} ${card.iconHeight}`} alt={card.title} src={card.icon} />
                    <div className="flex flex-col items-center gap-4 w-full">
                      <div className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl text-center tracking-[-0.48px] leading-8 whitespace-nowrap">
                        {card.title}
                      </div>
                      <div className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-7">
                        {card.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Student Testimonials Section ── */}
      <section className="w-full relative bg-[#f0f7ff]">
        <div className="flex flex-col items-center gap-3 sm:gap-4 pt-8 sm:pt-12 pb-6 sm:pb-8 px-3 sm:px-6 section-animate">
          <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-[28px] sm:text-[36px] md:text-[44px] text-center tracking-[-0.88px] leading-[36px] sm:leading-[44px] md:leading-[52px] w-full max-w-[883px]">
            Student feedbacks
          </h2>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base sm:text-lg text-center tracking-[0] leading-6 sm:leading-7 w-full max-w-[883px]">
            What Students Say About Academy LMS
          </p>
        </div>
        <div className="relative flex items-center justify-center px-3 sm:px-6 md:px-12 lg:px-[100px] xl:px-[220px] pb-8 sm:pb-12">
          <div className="flex-shrink-0 mr-4">
            <img
              className="w-11 h-11 cursor-pointer"
              alt="Layer"
              src="https://c.animaapp.com/mnwpw3l9jXfMum/img/layer-3.png"
            />
          </div>
          <div className="flex-1">
            <StudentTestimonialsSection />
          </div>
          <div className="flex-shrink-0 ml-4">
            <img
              className="w-11 h-11 cursor-pointer"
              alt="Layer"
              src="https://c.animaapp.com/mnwpw3l9jXfMum/img/layer-2.png"
            />
          </div>
        </div>
      </section>

      {/* ── Latest Articles Section ── */}
      <section className="w-full relative bg-white">
        <div className="flex flex-col items-center gap-3 sm:gap-4 pt-8 sm:pt-12 pb-6 sm:pb-8 px-3 sm:px-6 section-animate">
          <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-[28px] sm:text-[36px] md:text-[44px] text-center tracking-[-0.88px] leading-[36px] sm:leading-[44px] md:leading-[52px] w-full max-w-[883px]">
            Latest articles
          </h2>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base sm:text-lg text-center tracking-[0] leading-6 sm:leading-7 w-full max-w-[883px]">
            Explore our Free Articles
          </p>
        </div>
        <div className="w-full pb-8 sm:pb-12 px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px]">
          <LatestArticlesSection />
        </div>
      </section>

      {/* ── Career Call To Action + Footer ── */}
      <section className="w-full relative">
        <CareerCallToActionSection />
      </section>

      {/* Floating Chat Widget */}
      <FloatingChatButtons />
    </div>
  );
};
