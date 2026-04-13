import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { FloatingChatButtons } from "../../components/ui/floating-chat-buttons";
import { AboutOverviewSection } from "./sections/AboutOverviewSection";
import { AboutStorySection } from "./sections/AboutStorySection";
import { ApproachHeadingSection } from "./sections/ApproachHeadingSection";
import { ApproachHighlightsSection } from "./sections/ApproachHighlightsSection";
import { CareerCallToActionSection } from "./sections/CareerCallToActionSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { MissionVisionSection } from "./sections/MissionVisionSection";
import { TestimonialCarouselSection } from "./sections/TestimonialCarouselSection";
import { TestimonialHeadingSection } from "./sections/TestimonialHeadingSection";

// Navigation items data
const navItems = [
  {
    label: "Home",
    icon: "https://c.animaapp.com/mnwxwol3SDKgi5/img/frame-3.svg",
    active: false,
    href: "/",
  },
  {
    label: "Courses",
    icon: "https://c.animaapp.com/mnwxwol3SDKgi5/img/frame-1.svg",
    active: false,
    href: "/courses",
  },
  {
    label: "About",
    icon: "https://c.animaapp.com/mnwxwol3SDKgi5/img/frame-2.svg",
    active: true,
    href: "/about",
  },
  {
    label: "Contact",
    icon: "https://c.animaapp.com/mnwxwol3SDKgi5/img/frame-4.svg",
    active: false,
    href: "/contact",
  },
];

export const About = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col w-full bg-white">
      {/* Navigation Bar */}
      <nav className="w-full h-[81px] bg-white flex items-center justify-between px-4 md:px-6 z-10 shadow-sm">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            className="w-[56px] h-[68px] md:w-[69px] md:h-[84px] object-contain cursor-pointer"
            alt="Ics png"
            src="https://c.animaapp.com/mnwxwol3SDKgi5/img/ics-png-2.png"
            onClick={() => navigate("/")}
          />
        </div>
        {/* Nav Links - centered */}
        <div className="hidden md:flex items-center h-[50px]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.href)}
              className={`inline-flex h-12 items-center justify-center gap-2.5 px-3 lg:px-5 py-4 rounded-lg cursor-pointer transition-colors hover:bg-[#e8f6ff] ${
                item.active ? "bg-[#e9f6ff]" : ""
              }`}
            >
              <img className="w-6 h-6" alt="Frame" src={item.icon} />
              <span
                className={`hidden lg:inline [font-family:'Open_Sans',Helvetica] font-semibold text-base tracking-[0] leading-6 whitespace-nowrap ${
                  item.active ? "text-[#0072de]" : "text-[#1a365d]"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4 h-[50px]">
          <Button
            variant="ghost"
            className="h-12 px-5 py-4 bg-white rounded-lg [font-family:'Open_Sans',Helvetica] font-semibold text-accent-buttons-links text-base tracking-[0] leading-6 whitespace-nowrap h-auto"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            className="h-12 px-5 py-4 bg-accent-buttons-links rounded-lg border border-solid border-[#0072de] shadow-[0px_3px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-base tracking-[0] leading-6 whitespace-nowrap h-auto"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] flex-shrink-0"
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-[#1a365d]" />
          <span className="block w-6 h-0.5 bg-[#1a365d]" />
          <span className="block w-6 h-0.5 bg-[#1a365d]" />
        </button>
      </nav>

      {/* Hero Banner Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Base background image — same as Courses page */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/screan-01.png"
        />
        {/* Gradient overlay — same as Courses page */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Overlay"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/screan-2.svg"
        />
        <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 xl:px-[264px] py-8 md:py-16">
          <HeroBannerSection />
        </div>
      </section>

      {/* About Overview Section */}
      <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-[264px]">
        <AboutOverviewSection />
      </div>

      {/* About Story + Mission Vision Sections side by side */}
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16 px-4 md:px-8 lg:px-16 xl:px-[264px] py-8 md:py-16">
        <div className="flex-1">
          <AboutStorySection />
        </div>
        <div className="flex-1">
          <MissionVisionSection />
        </div>
      </div>

      {/* Approach area with light background */}
      <div className="w-full bg-[#f0f8ff] px-4 md:px-8 lg:px-16 xl:px-[264px] py-12 md:py-16">
        <ApproachHeadingSection />
        <div className="mt-10">
          <ApproachHighlightsSection />
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-[264px] py-12 md:py-16">
        <TestimonialHeadingSection />
        <div className="mt-10">
          <TestimonialCarouselSection />
        </div>
      </div>

      {/* Career Call To Action Section */}
      <div className="w-full">
        <CareerCallToActionSection />
      </div>

      {/* Floating Chat Widget */}
      <FloatingChatButtons />
    </div>
  );
};
