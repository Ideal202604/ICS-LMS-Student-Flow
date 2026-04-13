import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { CourseHeroBannerSection } from "./sections/CourseHeroBannerSection";
import { CourseOverviewDetailSection } from "./sections/CourseOverviewDetailSection";
import { CourseSyllabusSidebarSection } from "./sections/CourseSyllabusSidebarSection";

export const CoursePlay = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white flex flex-col">
      {/* Top Navigation Bar */}
      <header className="w-full bg-white flex items-center px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img
            className="w-6 h-6"
            alt="Layer"
            src="https://c.animaapp.com/mnx1pxe5WuKivI/img/layer-2.png"
          />
          <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
            Research Writing &amp; AI: Beginner to Advanced
          </span>
        </div>
      </header>
      {/* Main Two-Column Layout */}
      <div className="flex w-full flex-1">
        {/* Left Column - Video Area (empty placeholder matching image) */}
        <div className="flex flex-col flex-1 min-w-0"></div>
        {/* Vertical Divider */}
        <Separator orientation="vertical" className="h-auto self-stretch" />
        {/* Right Column - Hero Banner + Syllabus Sidebar */}
        <div className="flex flex-col w-[770px] shrink-0">
          {/* Sidebar Header Row */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-gray-200">
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
              syllabus
            </span>
          </div>
          {/* Analytics Row */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-gray-200">
            <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
              Course Analytics
            </span>
            <Button className="h-auto bg-[#0072de] hover:bg-[#005bb5] rounded-[10px] px-4 py-2">
              <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-5 whitespace-nowrap">
                View Analytics
              </span>
            </Button>
          </div>
          {/* Hero Banner Section */}
          <CourseHeroBannerSection />
          {/* Syllabus Sidebar Section */}
          <CourseSyllabusSidebarSection />
        </div>
      </div>
      {/* Full Width Course Overview Detail Section */}
      <div className="w-full">
        <CourseOverviewDetailSection />
      </div>
    </div>
  );
};
