import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { FloatingChatButtons } from "../../components/ui/floating-chat-buttons";
import { Separator } from "../../components/ui/separator";
import { CreateAccountFormSection } from "./sections/CreateAccountFormSection";
import { FooterInfoSection } from "./sections/FooterInfoSection";

/** Navigation menu items */
const navItems = [
  {
    label: "Home",
    icon: "https://c.animaapp.com/mnwvehj5NMc2G7/img/frame-7.svg",
    active: true,
    href: "/",
  },
  {
    label: "Courses",
    icon: "https://c.animaapp.com/mnwvehj5NMc2G7/img/frame-8.svg",
    active: false,
    href: "/courses",
  },
  {
    label: "About",
    icon: "https://c.animaapp.com/mnwvehj5NMc2G7/img/frame-3.svg",
    active: false,
    href: "/about",
  },
  {
    label: "Contact",
    icon: "https://c.animaapp.com/mnwvehj5NMc2G7/img/frame-4.svg",
    active: false,
    href: "/",
  },
];

export const Register = (): JSX.Element => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#eff7ff]">
      {/* Navigation Bar */}
      <header className="w-full h-[81px] bg-white flex items-center justify-between px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] flex-shrink-0 z-10 relative shadow-sm animate-fade-in-down">
        {/* Logo */}
        <img
          className="w-[50px] md:w-[69px] h-auto object-contain cursor-pointer"
          alt="ICS Logo"
          src="https://c.animaapp.com/mnwvehj5NMc2G7/img/ics-png-2.png"
          onClick={() => navigate("/")}
        />

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center h-[50px]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.href)}
              className={`inline-flex h-12 items-center justify-center gap-2.5 px-5 py-4 rounded-lg cursor-pointer transition-colors hover:bg-[#e8f6ff] ${item.active ? "bg-[#e8f6ff]" : ""}`}
            >
              <img className="w-6 h-6" alt="Frame" src={item.icon} />
              <span
                className={`[font-family:'Open_Sans',Helvetica] font-semibold text-base tracking-[0] leading-6 whitespace-nowrap ${item.active ? "text-accent-buttons-links" : "text-primary-headings-navigation"}`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2 md:gap-4 h-[50px]">
          <Button
            variant="ghost"
            className="h-auto bg-white inline-flex items-center justify-center gap-2.5 px-3 md:px-5 py-3 md:py-4 rounded-lg"
            onClick={() => navigate("/login")}
          >
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-accent-buttons-links text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap">
              Login
            </span>
          </Button>
          <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-3 md:px-5 py-3 md:py-4 bg-accent-buttons-links rounded-lg border border-solid border-[#0072de] shadow-[0px_3px_4px_#00000040]">
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap">
              Register
            </span>
          </Button>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#1a365d] transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#1a365d] transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#1a365d] transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <nav className="absolute top-[81px] left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 gap-2 md:hidden z-50">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => { navigate(item.href); setMobileMenuOpen(false); }}
                className={`inline-flex h-12 items-center justify-center gap-2.5 px-5 py-4 rounded-lg cursor-pointer transition-colors hover:bg-[#e8f6ff] w-[90%] ${item.active ? "bg-[#e8f6ff]" : ""}`}
              >
                <img className="w-6 h-6" alt="Frame" src={item.icon} />
                <span className={`[font-family:'Open_Sans',Helvetica] font-semibold text-base tracking-[0] leading-6 whitespace-nowrap ${item.active ? "text-accent-buttons-links" : "text-primary-headings-navigation"}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full bg-[#eff7ff] relative">
        {/* Decorative shape overlay */}
        <img
          className="absolute top-0 left-0 w-[150px] sm:w-[200px] lg:w-[253px] h-auto pointer-events-none z-[1]"
          alt="Shape"
          src="https://c.animaapp.com/mnwvehj5NMc2G7/img/shape.svg"
        />

        {/* Content panels container */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] py-6 sm:py-8 md:py-12 lg:py-[100px] gap-0 rounded-[20px] sm:rounded-[30px] overflow-hidden lg:rounded-none lg:overflow-visible animate-scale-in">
          {/* Left panel - student photo */}
          <div className="flex-shrink-0 w-full lg:w-[45%] relative overflow-hidden rounded-t-[20px] sm:rounded-t-[30px] lg:rounded-t-none lg:rounded-l-[30px]">
            <img
              className="w-full h-full object-cover object-center absolute inset-0 animate-slide-in-left"
              alt="Students"
              src="https://c.animaapp.com/mnwvehj5NMc2G7/img/rectangle-39421.png"
            />
            {/* Spacer to maintain aspect ratio on mobile/tablet, stretch to match form on desktop */}
            <div className="w-full h-[180px] sm:h-[260px] md:h-[320px] lg:h-auto lg:min-h-full" />
          </div>

          {/* Right panel - Create Account Form */}
          <div className="flex-1 relative min-h-[600px] animate-slide-in-right">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="Background"
              src="https://c.animaapp.com/mnwvehj5NMc2G7/img/rectangle-39422.svg"
            />
            <div className="relative z-10 w-full h-full flex items-center justify-center px-3 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
              <CreateAccountFormSection />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Info Section */}
      <FooterInfoSection />

      {/* Copyright Bar */}
      <footer className="w-full bg-white flex-shrink-0">
        <Separator className="bg-[#cdcdcd]" />
        <div className="flex items-center justify-center h-[60px] sm:h-[70px] md:h-[93px] px-3 sm:px-6 md:px-8 lg:px-[264px]">
          <p className="font-regular-13px font-[number:var(--regular-13px-font-weight)] text-base-02 text-[length:var(--regular-13px-font-size)] text-center tracking-[var(--regular-13px-letter-spacing)] leading-[var(--regular-13px-line-height)] [font-style:var(--regular-13px-font-style)]">
            © Copyright 2026, All Rights Reserved by Idealizeer
          </p>
        </div>
      </footer>

      {/* Floating Chat Widget */}
      <FloatingChatButtons />
    </div>
  );
};
