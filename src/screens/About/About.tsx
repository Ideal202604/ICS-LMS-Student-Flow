import { useState, useEffect } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="relative flex flex-col w-full bg-white">
      {/* Navigation Bar */}
      <header className="w-full h-[81px] bg-white flex items-center justify-between px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] z-50 shadow-sm relative animate-fade-in-down">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            className="w-[56px] h-[68px] md:w-[69px] md:h-[84px] object-contain cursor-pointer"
            alt="Ics png"
            src="https://c.animaapp.com/mnwxwol3SDKgi5/img/ics-png-2.png"
            onClick={() => navigate("/")}
          />
        </div>
        {/* Nav Links - visible on md+ with labels always shown */}
        <nav className="hidden md:flex items-center h-[50px]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.href)}
              className={`inline-flex h-12 items-center justify-center gap-2.5 px-5 py-4 rounded-lg cursor-pointer transition-colors hover:bg-[#e8f6ff] ${
                item.active ? "bg-[#e9f6ff]" : ""
              }`}
            >
              <img className="w-6 h-6" alt="Frame" src={item.icon} />
              <span
                className={`[font-family:'Open_Sans',Helvetica] font-semibold text-base tracking-[0] leading-6 whitespace-nowrap ${
                  item.active ? "text-[#0072de]" : "text-[#1a365d]"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>
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
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-[#1a365d] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a365d] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a365d] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(0,0,0,0.3)" }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Slide-Down Menu */}
      <div
        className={`fixed top-[81px] left-0 right-0 z-40 md:hidden bg-white transition-all duration-300 shadow-lg ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <nav className="flex flex-col px-4 pt-2 pb-4 gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => { navigate(item.href); setMenuOpen(false); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left transition-colors ${item.active ? "bg-[#e9f6ff]" : "hover:bg-gray-50"}`}
            >
              <img className="w-6 h-6 flex-shrink-0" alt="Frame" src={item.icon} />
              <span className={`[font-family:'Open_Sans',Helvetica] font-semibold text-base ${item.active ? "text-[#0072de]" : "text-[#1a365d]"}`}>
                {item.label}
              </span>
            </button>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t border-gray-100 mt-2">
            <Button
              variant="outline"
              className="flex-1 h-11 bg-white rounded-lg border border-solid border-[#0072de] [font-family:'Open_Sans',Helvetica] font-semibold text-accent-buttons-links text-base"
              onClick={() => { navigate("/login"); setMenuOpen(false); }}
            >
              Login
            </Button>
            <Button
              className="flex-1 h-11 bg-accent-buttons-links rounded-lg border border-solid border-[#0072de] shadow-[0px_3px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-base"
              onClick={() => { navigate("/register"); setMenuOpen(false); }}
            >
              Register
            </Button>
          </div>
        </nav>
      </div>

      {/* Hero Banner Section */}
      <section className="relative w-full min-h-[320px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[620px] flex items-center overflow-hidden">
        {/* Base background image — same as Courses page */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/screan-01.png"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Gradient overlay — same as Courses page */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Overlay"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/screan-2.svg"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="relative z-10 w-full px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] py-6 sm:py-8 md:py-16">
          <HeroBannerSection />
        </div>
      </section>

      {/* About Overview Section */}
      <div className="w-full bg-white px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] animate-slide-in-up">
        <AboutOverviewSection />
      </div>

      {/* About Story + Mission Vision Sections side by side */}
      <div className="w-full flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-16 px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] py-6 sm:py-8 md:py-16">
        <div className="flex-1 animate-slide-in-left">
          <AboutStorySection />
        </div>
        <div className="flex-1 animate-slide-in-right animation-delay-200">
          <MissionVisionSection />
        </div>
      </div>

      {/* Approach area with light background */}
      <div className="w-full bg-[#f0f8ff] px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] py-8 sm:py-12 md:py-16">
        <div className="animate-slide-in-up">
          <ApproachHeadingSection />
        </div>
        <div className="mt-10 animate-scale-in animation-delay-300">
          <ApproachHighlightsSection />
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="w-full bg-white px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] py-8 sm:py-12 md:py-16">
        <div className="animate-slide-in-up">
          <TestimonialHeadingSection />
        </div>
        <div className="mt-10 animate-slide-in-up animation-delay-200">
          <TestimonialCarouselSection />
        </div>
      </div>

      {/* Career Call To Action Section */}
      <div className="w-full animate-slide-in-up">
        <CareerCallToActionSection />
      </div>

      {/* Floating Chat Widget */}
      <FloatingChatButtons />
    </div>
  );
};
