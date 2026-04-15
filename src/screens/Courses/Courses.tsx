import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { FloatingChatButtons } from "../../components/ui/floating-chat-buttons";
import { CareerCTASection } from "./sections/CareerCTASection/CareerCTASection";
import { CourseGridSection } from "./sections/CourseGridSection/CourseGridSection";
import { CoursesOverviewSection } from "./sections/CoursesOverviewSection";
import { GlobalFooterSection } from "./sections/GlobalFooterSection";
import { HeroCourseIntroductionSection } from "./sections/HeroCourseIntroductionSection";

const navItems = [
  {
    label: "Home",
    href: "#hero",
    icon: "https://c.animaapp.com/mnmyaijxgewU4q/img/frame-4.svg",
    active: false,
    activeColor: "text-[#1a365d]",
    bg: "bg-white",
  },
  {
    label: "Courses",
    href: "#courses",
    icon: "https://c.animaapp.com/mnmyaijxgewU4q/img/frame-9.svg",
    active: true,
    activeColor: "text-[#0072de]",
    bg: "bg-[#e9f6ff]",
  },
  {
    label: "About",
    href: "/about",
    icon: "https://c.animaapp.com/mnmyaijxgewU4q/img/frame-46.svg",
    active: false,
    activeColor: "text-primary-headings-navigation",
    bg: "",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: "https://c.animaapp.com/mnmyaijxgewU4q/img/frame-11.svg",
    active: false,
    activeColor: "text-primary-headings-navigation",
    bg: "",
  },
];

export const Courses = (): JSX.Element => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Courses");

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

  const handleNavClick = (label: string, href: string) => {
    setActiveNav(label);
    setMenuOpen(false);
    if (label === "Home") {
      navigate("/");
    } else if (label === "Contact") {
      navigate("/contact");
    } else if (label === "About") {
      navigate("/about");
    } else if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#eff7ff] w-full relative flex flex-col" data-model-id="312:2247">

      {/* Navigation Bar */}
      <header className="w-full h-[81px] bg-white flex items-center justify-between px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] relative z-50 shadow-sm animate-fade-in-down">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            className="w-[56px] h-[68px] md:w-[69px] md:h-[84px] object-contain"
            alt="Ics png"
            src="https://c.animaapp.com/mnmyaijxgewU4q/img/ics-png-2.png"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center h-[50px]">
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.label, item.href)}
                className={`inline-flex h-12 items-center justify-center gap-2.5 px-5 py-4 relative flex-[0_0_auto] rounded-lg cursor-pointer transition-colors ${isActive ? item.bg : "hover:bg-gray-50"}`}
              >
                <img className="relative w-6 h-6" alt="Frame" src={item.icon} />
                <span className={`[font-family:'Open_Sans',Helvetica] font-semibold text-base tracking-[0] leading-6 whitespace-nowrap ${isActive ? item.activeColor : "text-[#1a365d]"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4 h-[50px]">
          <Button
            variant="outline"
            className="h-12 px-5 py-4 bg-white rounded-lg border-0 shadow-none [font-family:'Open_Sans',Helvetica] font-semibold text-accent-buttons-links text-base tracking-[0] leading-6 whitespace-nowrap"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            className="h-12 px-5 py-4 bg-accent-buttons-links rounded-lg border border-solid border-[#0072de] shadow-[0px_3px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-base tracking-[0] leading-6 whitespace-nowrap"
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
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.label, item.href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left transition-colors ${isActive ? item.bg : "hover:bg-gray-50"}`}
              >
                <img className="w-6 h-6 flex-shrink-0" alt="Frame" src={item.icon} />
                <span className={`[font-family:'Open_Sans',Helvetica] font-semibold text-base ${isActive ? item.activeColor : "text-[#1a365d]"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
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

      {/* Hero Section */}
      <div id="hero" className="relative w-full min-h-[320px] sm:min-h-[420px] md:min-h-[540px] lg:min-h-[655px] flex items-center overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Screan"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/screan-01.png"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Screan"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/screan-2.svg"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="relative z-10 w-full px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] py-10 sm:py-14 md:py-16">
          <HeroCourseIntroductionSection />
        </div>
      </div>

      {/* Main content sections */}
      <main id="courses" className="flex flex-col w-full">
        <section className="w-full flex flex-col bg-[#eff7ff] py-10 sm:py-14">
          <CoursesOverviewSection />
          <CourseGridSection />
        </section>
        <CareerCTASection />
      </main>

      {/* Footer */}
      <div id="contact">
        <GlobalFooterSection />
      </div>

      {/* Floating Chat Widget */}
      <FloatingChatButtons />
    </div>
  );
};
