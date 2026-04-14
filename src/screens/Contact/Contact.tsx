import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { FloatingChatButtons } from "../../components/ui/floating-chat-buttons";
import { ContactHeroBannerSection } from "./sections/ContactHeroBannerSection";
import { ContactIntroSection } from "./sections/ContactIntroSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { ContactDetailsSection } from "./sections/ContactDetailsSection";
import { ContactFooterSection } from "./sections/ContactFooterSection";

const navItems = [
  {
    label: "Home",
    icon: "https://c.animaapp.com/mnwxk5sdBr2leB/img/frame.svg",
    active: false,
    textColor: "text-[#1a365d]",
    bg: "",
    href: "/",
  },
  {
    label: "Courses",
    icon: "https://c.animaapp.com/mnwxk5sdBr2leB/img/frame-3.svg",
    active: false,
    textColor: "text-[#1a365d]",
    bg: "",
    href: "/courses",
  },
  {
    label: "About",
    icon: "https://c.animaapp.com/mnwxk5sdBr2leB/img/frame-8.svg",
    active: false,
    textColor: "text-primary-headings-navigation",
    bg: "",
    href: "/about",
  },
  {
    label: "Contact",
    icon: "https://c.animaapp.com/mnwxk5sdBr2leB/img/frame-6.svg",
    active: true,
    textColor: "text-[#0072de]",
    bg: "bg-[#e9f6ff]",
    href: "/contact",
  },
];

export const Contact = (): JSX.Element => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="relative w-full bg-white flex flex-col">
      {/* Navigation Bar */}
      <header className="w-full h-[81px] bg-white flex items-center justify-between px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] relative z-50 shadow-sm animate-fade-in-down">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            className="w-[56px] h-[68px] md:w-[69px] md:h-[84px] object-contain cursor-pointer"
            alt="Ics png"
            src="https://c.animaapp.com/mnwxk5sdBr2leB/img/ics-png-2.png"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center h-[50px]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.href)}
              className={`inline-flex h-12 items-center justify-center gap-2.5 px-5 py-4 rounded-lg cursor-pointer transition-colors hover:bg-[#e8f6ff] ${item.active ? item.bg : ""}`}
            >
              <img className="w-6 h-6" alt="Frame" src={item.icon} />
              <span
                className={`[font-family:'Open_Sans',Helvetica] font-semibold text-base tracking-[0] leading-6 whitespace-nowrap ${item.textColor}`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4 h-[50px]">
          <Button
            variant="ghost"
            className="h-12 px-5 py-4 bg-white rounded-lg [font-family:'Open_Sans',Helvetica] font-semibold text-accent-buttons-links text-base tracking-[0] leading-6 whitespace-nowrap"
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
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => { navigate(item.href); setMenuOpen(false); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left transition-colors ${item.active ? item.bg : "hover:bg-gray-50"}`}
            >
              <img className="w-6 h-6 flex-shrink-0" alt="Frame" src={item.icon} />
              <span className={`[font-family:'Open_Sans',Helvetica] font-semibold text-base ${item.textColor}`}>
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

      {/* Hero Banner with background images */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "clamp(200px, 40vw, 444px)" }}>
        {/* Base background image */}
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt="Hero background"
          src="https://c.animaapp.com/mnwxk5sdBr2leB/img/screan-01.png"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Dark overlay image */}
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt=""
          src="https://c.animaapp.com/mnwxk5sdBr2leB/img/screan-2.svg"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Left-to-right gradient for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(10,30,70,0.82) 0%, rgba(10,30,70,0.60) 45%, rgba(10,30,70,0.10) 100%)",
          }}
        />
        {/* Spacer so section has height */}
        <div className="w-full" style={{ paddingTop: "clamp(200px, 40vw, 444px)" }} />
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center">
          <ContactHeroBannerSection />
        </div>
      </section>

      {/* Contact Intro Section */}
      <section className="w-full">
        <ContactIntroSection />
      </section>

      {/* Contact Form and Details side by side */}
      <section className="w-full px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] pb-8 sm:pb-12 md:pb-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full max-w-[1392px] mx-auto">
          <div className="flex-1 min-w-0">
            <ContactFormSection />
          </div>
          <div className="flex-1 min-w-0 lg:max-w-[480px]">
            <ContactDetailsSection />
          </div>
        </div>
      </section>

      {/* Career CTA + Footer Section */}
      <section className="w-full">
        <ContactFooterSection />
      </section>

      {/* Floating Chat Widget */}
      <FloatingChatButtons />
    </div>
  );
};
