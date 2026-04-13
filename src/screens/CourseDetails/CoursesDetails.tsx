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

  const course = getCourseBySlug(courseSlug || "");

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-6">
        <h1 className="[font-family:'Open_Sans',Helvetica] font-semibold text-3xl text-[#1a365d]">Course Not Found</h1>
        <p className="[font-family:'Open_Sans',Helvetica] text-lg text-gray-500">The course you&#39;re looking for doesn&#39;t exist.</p>
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
      <header className="w-full h-[81px] bg-white flex items-center justify-between px-6 relative z-10">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="w-[69px] h-[84px] object-contain"
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
              className={`inline-flex h-12 items-center justify-center gap-2.5 px-5 py-4 rounded-lg cursor-pointer transition-colors ${item.active ? item.bg : "hover:bg-gray-50"}`}
            >
              <img className="w-6 h-6" alt="Frame" src={item.icon} />
              <span
                className={`[font-family:'Open_Sans',Helvetica] font-semibold text-base tracking-[0] leading-6 whitespace-nowrap ${item.active ? item.textColor : item.textColor}`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-4 h-[50px]">
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
      </header>

      {/* Hero Section with Background */}
      <div className="relative w-full overflow-hidden">
        <img
          className="w-full h-[340px] sm:h-[450px] md:h-[555px] lg:h-[655px] object-cover"
          alt="Course Background"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/screan-01.png"
        />
        <img
          className="absolute top-0 left-0 w-full h-[340px] sm:h-[450px] md:h-[555px] lg:h-[655px] object-cover"
          alt="Overlay"
          src="https://c.animaapp.com/mnmyaijxgewU4q/img/screan-2.svg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center px-4 sm:px-8 md:px-12 lg:px-16">
          <CourseHeroBannerSection
            title={course.title}
            category={course.category}
            description={course.description}
            originalPrice={course.originalPrice}
            discountedPrice={course.discountedPrice}
            discount={course.discount}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="relative w-full flex flex-col pt-12">
        <CourseDetailLayoutSection />
      </main>

      {/* Floating Social Icons */}
      <div className="fixed right-6 top-[623px] flex flex-col items-start gap-8 z-50">
        <img
          className="w-14 h-14"
          alt="Group"
          src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/group-40187.png"
        />
        <img
          className="w-12 h-12"
          alt="Frame"
          src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-1321317933.svg"
        />
      </div>

      {/* Floating Chat Widget */}
      <FloatingChatButtons />
    </div>
  );
};
