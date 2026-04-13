import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { CourseHeroBannerSection } from "./sections/CourseHeroBannerSection";
import { CourseOverviewDetailSection } from "./sections/CourseOverviewDetailSection";
import { CourseSyllabusSidebarSection } from "./sections/CourseSyllabusSidebarSection";

export const CoursePlay = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Top Navigation Bar */}
      <header className="w-full h-[81px] bg-white flex items-center px-6 shrink-0 border-b border-gray-100">
        {/* Left side: back arrow + course title */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <img
            className="w-6 h-6 shrink-0"
            alt="Layer"
            src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/layer-2.png"
          />
          <h1 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap truncate">
            Research Writing &amp; AI: Beginner to Advanced
          </h1>
        </div>
        {/* Right side: vertical separator + syllabus label */}
        <div className="flex items-center shrink-0 ml-4">
          <Separator orientation="vertical" className="h-10 mr-6" />
          <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
            syllabus
          </span>
        </div>
      </header>
      {/* Main content area: two-column layout */}
      <div className="flex flex-row w-full flex-1">
        {/* Left column: video/image area */}
        <div className="flex flex-col" style={{ flex: "0 0 59.6%" }}>
          <img
            className="w-full object-cover rounded-br-[12px] border-[16px] border-solid border-[#f7f7f8]"
            style={{ aspectRatio: "1144/591" }}
            alt="Container"
            src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/container.png"
          />
        </div>
        {/* Right column: analytics header + sections */}
        <div className="flex flex-col flex-1 border-l border-gray-200">
          {/* Analytics row */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b border-gray-200"
            style={{ minHeight: "80px" }}
          >
            <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
              Course Analytics
            </span>
            <Button className="h-auto bg-[#0072de] hover:bg-[#005bb5] rounded-[10px] px-4 py-2">
              <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-5 whitespace-nowrap">
                View Analytics
              </span>
            </Button>
          </div>
          {/* CourseHeroBannerSection in right column */}
          <div className="w-full">
            <CourseHeroBannerSection />
          </div>
          {/* Separator line */}
          <Separator className="w-full" />
          {/* CourseSyllabusSidebarSection */}
          <div className="w-full flex-1">
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
