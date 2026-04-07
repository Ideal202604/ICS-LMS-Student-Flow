import { useEffect, useState, FormEvent } from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "../../components/ui/button";
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
    href: "#about",
    icon: "https://c.animaapp.com/mnmyaijxgewU4q/img/frame-46.svg",
    active: false,
    activeColor: "text-primary-headings-navigation",
    bg: "",
  },
  {
    label: "Contact",
    href: "#contact",
    icon: "https://c.animaapp.com/mnmyaijxgewU4q/img/frame-11.svg",
    active: false,
    activeColor: "text-primary-headings-navigation",
    bg: "",
  },
];

const authFormInitial = { name: "", email: "", password: "" };

export const Courses = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Courses");
  const [authMode, setAuthMode] = useState<"login" | "register" | null>(null);
  const [authForm, setAuthForm] = useState(authFormInitial);
  const [authLoading, setAuthLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState("");
  const [authError, setAuthError] = useState("");

  const handleAuthField = (field: keyof typeof authForm, value: string) => {
    setAuthForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleAuthClose = () => {
    setAuthMode(null);
    setAuthMessage("");
    setAuthError("");
    setAuthForm(authFormInitial);
  };

  const handleAuthSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!authMode) return;
    setAuthLoading(true);
    setAuthError("");
    setAuthMessage("");

    try {
      const endpoint = authMode === "login" ? "/api/login" : "/api/register";
      const payload: Record<string, string> = {
        email: authForm.email,
        password: authForm.password,
      };
      if (authMode === "register") {
        payload.name = authForm.name;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Network error");
      }

      setAuthMessage(data.message ?? `${authMode === "login" ? "Login" : "Registration"} successful.`);
      setAuthForm(authFormInitial);
      if (authMode === "login") {
        setActiveNav("Courses");
      }
    } catch (error) {
      if (error instanceof Error) {
        setAuthError(error.message);
      }
    } finally {
      setAuthLoading(false);
    }
  };

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
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#eff7ff] w-full relative flex flex-col" data-model-id="312:2247">

      {/* Navigation Bar */}
      <header className="sticky top-0 w-full bg-white z-50 border-b border-[#e5e7eb] shadow-[0px_2px_4px_rgba(0,0,0,0.05)]">
        <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex items-center flex-shrink-0">
            <img
              className="w-14 h-[68px] md:w-16 md:h-20 object-contain"
              alt="ICS Logo"
              src="https://c.animaapp.com/mnmyaijxgewU4q/img/ics-png-2.png"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center h-16 gap-1">
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.label, item.href)}
                className={`inline-flex h-12 items-center justify-center gap-2.5 px-5 py-3 rounded-lg cursor-pointer transition-all duration-200 ${isActive ? `${item.bg} ${item.activeColor}` : "text-[#1a365d] hover:bg-gray-50"}`}
              >
                <img className="w-6 h-6" alt={`${item.label} icon`} src={item.icon} />
                <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-base tracking-[-0.14px] leading-6 whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4 h-12">
          <Button
            onClick={() => setAuthMode("login")}
            variant="outline"
            className="h-11 px-6 py-2.5 bg-white rounded-lg border border-[#0072de] text-[#0072de] shadow-none [font-family:'Open_Sans',Helvetica] font-semibold text-base tracking-[-0.14px] leading-6 whitespace-nowrap transition-colors hover:bg-[#e9f6ff]"
          >
            Login
          </Button>
          <Button
            onClick={() => setAuthMode("register")}
            className="h-11 px-6 py-2.5 bg-[#0072de] rounded-lg border border-[#0072de] shadow-[0px_4px_12px_rgba(0,72,222,0.25)] [font-family:'Open_Sans',Helvetica] font-semibold text-white text-base tracking-[-0.14px] leading-6 whitespace-nowrap transition-colors hover:bg-[#005bbf]"
          >
            Register
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 flex-shrink-0 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span className={`block w-6 h-0.5 bg-[#1a365d] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a365d] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a365d] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} bg-[rgba(0,0,0,0.2)]`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Slide-Down Menu */}
      <div
        className={`fixed top-20 left-0 right-0 z-40 md:hidden bg-white transition-all duration-300 shadow-lg border-b border-[#e5e7eb] ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
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
                <img className="w-6 h-6 flex-shrink-0" alt={`${item.label} icon`} src={item.icon} />
                <span className={`[font-family:'Open_Sans',Helvetica] font-semibold text-base ${isActive ? item.activeColor : "text-[#1a365d]"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-200 mt-2">
            <Button
              onClick={() => {
                setAuthMode("login");
                setMenuOpen(false);
              }}
              variant="outline"
              className="flex-1 h-11 bg-white rounded-lg border border-[#0072de] text-[#0072de] [font-family:'Open_Sans',Helvetica] font-semibold text-base transition-colors hover:bg-[#e9f6ff]"
            >
              Login
            </Button>
            <Button
              onClick={() => {
                setAuthMode("register");
                setMenuOpen(false);
              }}
              className="flex-1 h-11 bg-[#0072de] rounded-lg border border-[#0072de] text-white shadow-[0px_4px_12px_rgba(0,72,222,0.25)] [font-family:'Open_Sans',Helvetica] font-semibold text-base transition-colors hover:bg-[#005bbf]"
            >
              Register
            </Button>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div id="hero" className="relative w-full">
        <img
          className="w-full h-[350px] sm:h-[480px] md:h-[580px] lg:h-[700px] object-cover"
          alt="Hero background"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/screan-01.png"
        />
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero overlay gradient"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/screan-2.svg"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
            <HeroCourseIntroductionSection />
          </div>
        </div>

        {/* Fixed Floating Action Buttons */}
        <div className="hidden lg:flex fixed right-6 top-1/2 z-50 flex-col items-center gap-4 -translate-y-1/2">
          <a
            href="https://wa.me/919890451547"
            target="_blank"
            rel="noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-[0px_6px_20px_rgba(15,23,42,0.15)] transition-transform hover:-translate-y-1"
            aria-label="WhatsApp chat"
          >
            <PhoneCall className="h-6 w-6 text-[#25d366]" />
          </a>
          <a
            href="mailto:ceo@idealizeer.com"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-[0px_6px_20px_rgba(15,23,42,0.15)] transition-transform hover:-translate-y-1"
            aria-label="Send email"
          >
            <MessageCircle className="h-6 w-6 text-[#1d4ed8]" />
          </a>
        </div>
      </div>

      {/* Main content sections */}
      <main id="courses" className="flex flex-col w-full">
        <CoursesOverviewSection />
        <CourseGridSection />
        <CareerCTASection />
      </main>

      {/* Footer */}
      <div id="contact">
        <GlobalFooterSection />
      </div>

      {authMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-[0px_20px_60px_rgba(15,23,42,0.2)]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] tracking-tight">{authMode === "login" ? "Login" : "Register"}</h2>
                <p className="text-sm text-[#64748b]">{authMode === "login" ? "Access your account" : "Create a new account"}</p>
              </div>
              <button onClick={handleAuthClose} className="text-[#475569] hover:text-[#0f172a]">
                ✕
              </button>
            </div>
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {authMode === "register" && (
                <label className="flex flex-col gap-2 text-sm text-[#334155]">
                  Name
                  <input
                    value={authForm.name}
                    onChange={(event) => handleAuthField("name", event.target.value)}
                    className="rounded-2xl border border-[#cbd5e1] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#3b82f6]"
                    placeholder="John Doe"
                    required
                  />
                </label>
              )}
              <label className="flex flex-col gap-2 text-sm text-[#334155]">
                Email
                <input
                  type="email"
                  value={authForm.email}
                  onChange={(event) => handleAuthField("email", event.target.value)}
                  className="rounded-2xl border border-[#cbd5e1] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#3b82f6]"
                  placeholder="hello@example.com"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#334155]">
                Password
                <input
                  type="password"
                  value={authForm.password}
                  onChange={(event) => handleAuthField("password", event.target.value)}
                  className="rounded-2xl border border-[#cbd5e1] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#3b82f6]"
                  placeholder="••••••••"
                  required
                />
              </label>
              {authError && <p className="text-sm text-[#dc2626]">{authError}</p>}
              {authMessage && <p className="text-sm text-[#16a34a]">{authMessage}</p>}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" className="w-full sm:w-auto bg-[#0072de] px-6 py-3 text-white hover:bg-[#005bbf]">
                  {authLoading ? "Processing..." : authMode === "login" ? "Login" : "Register"}
                </Button>
                <button type="button" onClick={handleAuthClose} className="w-full sm:w-auto rounded-2xl border border-[#cbd5e1] bg-white px-6 py-3 text-sm text-[#475569] hover:bg-[#f8fafc]">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
