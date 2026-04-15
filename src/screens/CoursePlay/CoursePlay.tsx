import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { CourseHeroBannerSection } from "./sections/CourseHeroBannerSection";
import { CourseOverviewDetailSection } from "./sections/CourseOverviewDetailSection";
import { CourseSyllabusSidebarSection } from "./sections/CourseSyllabusSidebarSection";
import { getCourseBySlug } from "../CourseDetails/courseData";

export const CoursePlay = (): JSX.Element => {
  const navigate = useNavigate();
  const { courseSlug } = useParams<{ courseSlug: string }>();

  const course = getCourseBySlug(courseSlug || "");
  const courseImage = course?.image || "https://c.animaapp.com/mnx5m6v2Jq3hjq/img/container.png";
  const courseTitle = course?.title || "Research Writing & AI: Beginner to Advanced";

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Top Navigation Bar */}
      <header className="w-full h-[81px] bg-white flex items-center px-6 shrink-0 border-b border-gray-100">
        {/* Left side: back arrow + course title */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <button
            aria-label="Go Back"
            onClick={() => courseSlug ? navigate(`/courses/${courseSlug}`) : navigate("/courses")}
            className="shrink-0 cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-none p-0 flex items-center"
          >
            <img
              className="w-6 h-6"
              alt="Back"
              src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/layer-2.png"
            />
          </button>
          <h1 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap truncate">
            {courseTitle}
          </h1>
        </div>
        {/* Right side: vertical separator + syllabus label — aligned with Course Analytics px-6 */}
        <div className="flex items-center shrink-0 ml-4">
          <Separator orientation="vertical" className="h-10 mr-0" />
          <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap px-6">
            Syllabus
          </span>
        </div>
      </header>
      {/* Main content area: two-column layout */}
      <div className="flex flex-col lg:flex-row w-full flex-1">
        {/* Left column: course video/image area — Figma Container design */}
        <div className="flex flex-col" style={{ flex: "0 0 60%" }}>
          <div
            className="relative w-full overflow-hidden border-[16px] border-solid border-[#f7f7f8] rounded-[0px_0px_12px_0px]"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Background course image — fixed thumbnail for CoursePlay page */}
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt={courseTitle}
              src="https://c.animaapp.com/mnmyaijxgewU4q/img/uploaded-asset-1776236612059-0.png"
            />
            {/* Dark overlay — rgba(0,0,0,0.2) as per Figma */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%)" }}
            />
            {/* Centered play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 bg-transparent border-none p-0"
                aria-label="Play course video"
              >
                <img
                  className="w-20 h-20 drop-shadow-lg"
                  alt="Play"
                  src="https://c.animaapp.com/mnzp5zbpzEJe0W/img/button.svg"
                />
              </button>
            </div>
          </div>
        </div>
        {/* Right column: analytics header + course info + syllabus */}
        <div className="flex flex-col flex-1 border-l border-gray-200 min-h-0">
          {/* Analytics row */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 flex-shrink-0">
            <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-8 whitespace-nowrap">
              Course Analytics
            </span>
            <Button className="h-auto bg-[#0072de] hover:bg-[#005bb5] rounded-[10px] px-4 py-2">
              <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                View Analytics
              </span>
            </Button>
          </div>
          {/* CourseHeroBannerSection in right column */}
          <div className="w-full flex-shrink-0">
            <CourseHeroBannerSection title={courseTitle} />
          </div>
          {/* Separator line */}
          <Separator className="w-full flex-shrink-0" />
          {/* CourseSyllabusSidebarSection — scrollable */}
          <div className="w-full flex-1 overflow-y-auto">
            <CourseSyllabusSidebarSection />
          </div>
        </div>
      </div>
      {/* CourseOverviewDetailSection - full width below */}
      <div className="w-full">
        <CourseOverviewDetailSection />
      </div>
    </div>
  );
};
