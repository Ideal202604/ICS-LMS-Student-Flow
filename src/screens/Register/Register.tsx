import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
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
    href: "/",
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

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#eff7ff]">
      {/* Navigation Bar */}
      <header className="w-full h-[81px] bg-white flex items-center justify-between px-[264px] flex-shrink-0 z-10">
        {/* Logo */}
        <img
          className="w-[69px] h-[84px] object-contain cursor-pointer"
          alt="ICS Logo"
          src="https://c.animaapp.com/mnwvehj5NMc2G7/img/ics-png-2.png"
          onClick={() => navigate("/")}
        />

        {/* Center Navigation */}
        <nav className="flex items-center h-[50px]">
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
        <div className="flex items-center gap-4 h-[50px]">
          <Button
            variant="ghost"
            className="h-auto bg-white inline-flex items-center justify-center gap-2.5 px-5 py-4 rounded-lg"
            onClick={() => navigate("/login")}
          >
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-accent-buttons-links text-base tracking-[0] leading-6 whitespace-nowrap">
              Login
            </span>
          </Button>
          <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-5 py-4 bg-accent-buttons-links rounded-lg border border-solid border-[#0072de] shadow-[0px_3px_4px_#00000040]">
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-base tracking-[0] leading-6 whitespace-nowrap">
              Register
            </span>
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full bg-[#eff7ff] relative">
        {/* Decorative shape overlay */}
        <img
          className="absolute top-0 left-0 w-[253px] h-[285px] pointer-events-none z-[1]"
          alt="Shape"
          src="https://c.animaapp.com/mnwvehj5NMc2G7/img/shape.svg"
        />

        {/* Content panels container */}
        <div className="flex justify-center items-stretch px-[264px] py-[100px] gap-0">
          {/* Left panel - student photo */}
          <div className="flex-shrink-0">
            <img
              className="w-[709px] h-[1025px] object-cover rounded-l-[30px]"
              alt="Students"
              src="https://c.animaapp.com/mnwvehj5NMc2G7/img/rectangle-39421.png"
            />
          </div>

          {/* Right panel - Create Account Form */}
          <div className="flex-shrink-0 relative">
            <img
              className="absolute top-0 left-0 w-[683px] h-[1025px]"
              alt="Background"
              src="https://c.animaapp.com/mnwvehj5NMc2G7/img/rectangle-39422.svg"
            />
            <div className="relative z-10 w-[683px] h-[1025px] flex items-center justify-center px-12">
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
        <div className="flex items-center justify-center h-[93px] px-[264px]">
          <p className="font-regular-13px font-[number:var(--regular-13px-font-weight)] text-base-02 text-[length:var(--regular-13px-font-size)] text-center tracking-[var(--regular-13px-letter-spacing)] leading-[var(--regular-13px-line-height)] [font-style:var(--regular-13px-font-style)]">
            © Copyright 2026, All Rights Reserved by Idealizeer
          </p>
        </div>
      </footer>
    </div>
  );
};
