import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { FloatingChatButtons } from "../../components/ui/floating-chat-buttons";
import { CourseDetailLayoutSection } from "./sections/CourseDetailLayoutSection";
import { CourseHeroBannerSection } from "./sections/CourseHeroBannerSection";
import { getCourseBySlug } from "./courseData";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-4.svg",
    active: false,
    textColor: "text-[#1a365d]",
    bg: "bg-white",
  },
  {
    label: "Courses",
    href: "/courses",
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-9.svg",
    active: true,
    textColor: "text-[#0072de]",
    bg: "bg-[#e9f6ff]",
  },
  {
    label: "About",
    href: "/about",
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-3.svg",
    active: false,
    textColor: "text-primary-headings-navigation",
    bg: "bg-white",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-5.svg",
    active: false,
    textColor: "text-primary-headings-navigation",
    bg: "bg-white",
  },
];

export const CoursesDetails = (): JSX.Element => {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const course = getCourseBySlug(courseSlug || "");

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

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-6 px-4">
        <h1 className="[font-family:'Open_Sans',Helvetica] font-semibold text-2xl md:text-3xl text-[#1a365d] text-center">Course Not Found</h1>
        <p className="[font-family:'Open_Sans',Helvetica] text-base md:text-lg text-gray-500 text-center">The course you&#39;re looking for doesn&#39;t exist.</p>
        <Button
          onClick={() => navigate("/courses")}
          className="h-auto px-8 py-3 bg-[#0072de] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-lg"
        >
          Back to Courses
        </Button>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden">
      {/* Navigation Bar */}
      <header className="w-full h-[81px] bg-white flex items-center justify-between px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px] relative z-50 shadow-sm">
        <div className="flex items-center flex-shrink-0">
          <Link to="/">
            <img
              className="w-[56px] h-[68px] md:w-[69px] md:h-[84px] object-contain"
              alt="Ics png"
              src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/ics-png-2.png"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center h-[50px]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.href)}
              className={`inline-flex h-12 items-center justify-center gap-2.5 px-3 lg:px-5 py-4 rounded-lg cursor-pointer transition-colors hover:bg-[#e8f6ff] ${item.active ? item.bg : ""}`}
            >
              <img className="w-6 h-6" alt="Frame" src={item.icon} />
              <span
                className={`hidden lg:inline [font-family:'Open_Sans',Helvetica] font-semibold text-base tracking-[0] leading-6 whitespace-nowrap ${item.active ? item.textColor : item.textColor}`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4 h-[50px]">
          <Button
            variant="ghost"
            onClick={() => navigate("/login")}
            className="h-12 px-5 py-4 bg-white rounded-lg [font-family:'Open_Sans',Helvetica] font-semibold text-accent-buttons-links text-base tracking-[0] leading-6 h-auto"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate("/register")}
            className="h-12 px-5 py-4 bg-accent-buttons-links rounded-lg border border-solid border-[#0072de] shadow-[0px_3px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-base tracking-[0] leading-6 h-auto"
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

      {/* Hero Section with Background */}
      <div className="relative w-full overflow-hidden min-h-[360px] sm:min-h-[440px] md:min-h-[560px] lg:min-h-[640px]">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Course Background"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/screan-01.png"
        />
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Overlay"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/screan-2.svg"
        />
        <div className="relative z-10 w-full h-full flex items-center px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px]">
          <CourseHeroBannerSection
            title={course.title}
            category={course.category}
            description={course.description}
            originalPrice={course.originalPrice}
            discountedPrice={course.discountedPrice}
            discount={course.discount}
            image={course.image}
            courseSlug={course.slug}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="relative w-full flex flex-col pt-8 md:pt-12">
        <CourseDetailLayoutSection courseImage={course.image} courseTitle={course.title} courseSlug={course.slug} />
      </main>

      {/* Floating Chat Widget */}
      <FloatingChatButtons />
    </div>
  );
};
