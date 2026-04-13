import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { FloatingChatButtons } from "../../components/ui/floating-chat-buttons";
import { Separator } from "../../components/ui/separator";
import { AuthShowcaseSection } from "./sections/AuthShowcaseSection";
import { SignInFormSection } from "./sections/SignInFormSection";

/** Navigation menu items */
const navItems = [
  {
    label: "Home",
    icon: "https://c.animaapp.com/mnwuy1bl8tBZoj/img/frame-3.svg",
    active: true,
    href: "/",
  },
  {
    label: "Courses",
    icon: "https://c.animaapp.com/mnwuy1bl8tBZoj/img/frame-5.svg",
    active: false,
    href: "/courses",
  },
  {
    label: "About",
    icon: "https://c.animaapp.com/mnwuy1bl8tBZoj/img/frame.svg",
    active: false,
    href: "/about",
  },
  {
    label: "Contact",
    icon: "https://c.animaapp.com/mnwuy1bl8tBZoj/img/frame-1.svg",
    active: false,
    href: "/",
  },
];

export const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#eff7ff]">
      {/* Top Navigation Bar */}
      <header className="w-full h-[81px] bg-white flex items-center px-4 md:px-8 lg:px-16 xl:px-[264px] justify-between flex-shrink-0 z-10 relative">
        {/* Logo */}
        <img
          className="w-[50px] md:w-[69px] h-auto object-contain cursor-pointer"
          alt="ICS Logo"
          src="https://c.animaapp.com/mnwuy1bl8tBZoj/img/ics-png-2.png"
          onClick={() => navigate("/")}
        />

        {/* Center Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center h-[50px]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.href)}
              className={`inline-flex h-12 items-center justify-center gap-2.5 px-3 lg:px-5 py-4 rounded-lg cursor-pointer transition-colors hover:bg-[#e8f6ff] ${item.active ? "bg-[#e8f6ff]" : ""}`}
            >
              <img className="w-6 h-6" alt="Frame" src={item.icon} />
              <span
                className={`hidden lg:inline [font-family:'Open_Sans',Helvetica] font-semibold text-base tracking-[0] leading-6 whitespace-nowrap ${item.active ? "text-accent-buttons-links" : "text-primary-headings-navigation"}`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Auth Buttons + Mobile menu toggle */}
        <div className="flex items-center gap-2 md:gap-4 h-[50px]">
          <Button
            variant="ghost"
            className="h-auto bg-white inline-flex items-center justify-center gap-2.5 px-3 md:px-5 py-3 md:py-4 rounded-lg"
          >
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-accent-buttons-links text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap">
              Login
            </span>
          </Button>
          <Button
            className="h-auto inline-flex items-center justify-center gap-2.5 px-3 md:px-5 py-3 md:py-4 bg-accent-buttons-links rounded-lg border border-solid border-[#0072de] shadow-[0px_3px_4px_#00000040]"
            onClick={() => navigate("/register")}
          >
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
      <main className="flex-1 flex flex-col items-center px-4 md:px-8 lg:px-16 xl:px-[264px] py-8 md:py-12 lg:py-[96px] relative">
        {/* Card container with image and sign-in form */}
        <div className="relative w-full flex flex-col lg:flex-row rounded-[30px] overflow-hidden shadow-md">
          {/* Left: Photo of students */}
          <div className="relative flex-shrink-0 w-full lg:w-1/2">
            {/* Decorative shape behind image (top-left) */}
            <img
              className="absolute top-[-31px] left-[-1px] w-[150px] sm:w-[200px] lg:w-[253px] h-auto z-10 pointer-events-none"
              alt="Shape"
              src="https://c.animaapp.com/mnwuy1bl8tBZoj/img/shape-1.svg"
            />
            {/* Main photo */}
            <img
              className="w-full h-[300px] sm:h-[400px] lg:h-[796px] rounded-t-[30px] lg:rounded-t-none lg:rounded-l-[30px] object-cover relative z-0"
              alt="Students"
              src="https://c.animaapp.com/mnwuy1bl8tBZoj/img/rectangle-39421.png"
            />
            {/* Decorative shape bottom */}
            <img
              className="absolute bottom-[-40px] lg:bottom-[-63px] left-1/2 lg:left-[49%] w-[200px] lg:w-[363px] h-auto z-20 pointer-events-none hidden sm:block"
              alt="Shape"
              src="https://c.animaapp.com/mnwuy1bl8tBZoj/img/shape-2.svg"
            />
            {/* Decorative shape overlay */}
            <img
              className="absolute bottom-[-40px] lg:bottom-[-60px] left-0 w-[300px] lg:w-[520px] h-auto z-10 pointer-events-none hidden sm:block"
              alt="Shape"
              src="https://c.animaapp.com/mnwuy1bl8tBZoj/img/shape.svg"
            />
          </div>

          {/* Right: Background + SignInFormSection */}
          <div className="relative flex-1">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt="Background"
              src="https://c.animaapp.com/mnwuy1bl8tBZoj/img/rectangle-39422.svg"
            />
            <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
              <SignInFormSection />
            </div>
          </div>
        </div>

        {/* AuthShowcaseSection (footer area) below the card */}
        <div className="w-full mt-10">
          <AuthShowcaseSection />
        </div>
      </main>

      {/* Footer copyright */}
      <footer className="w-full bg-white flex-shrink-0">
        <Separator className="bg-[#cdcdcd]" />
        <div className="flex items-center justify-center h-[70px] md:h-[93px] px-4 md:px-8 lg:px-[264px]">
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
