// Course syllabus sidebar section displaying a list of course modules
const syllabusItems = [
  {
    title: "Know You Writing & AI: Beginner to Advanced",
    lessons: "9 Lessons",
  },
  {
    title: "Know You Writing & AI: Beginner to Advanced",
    lessons: "9 Lessons",
  },
  {
    title: "Know You Writing & AI: Beginner to Advanced",
    lessons: "9 Lessons",
  },
  {
    title: "Know You Writing & AI: Beginner to Advanced",
    lessons: "9 Lessons",
  },
];

export const CourseSyllabusSidebarSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-6 px-6 py-6 overflow-y-auto">
      {syllabusItems.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-[19px] self-stretch w-full flex-[0_0_auto]"
        >
          {/* Icon — exactly as Figma: bare SVG, no wrapper box */}
          <img
            className="flex-[0_0_auto]"
            alt="Frame"
            src="https://c.animaapp.com/mnznuw4nkVG1CX/img/frame-1321317981.svg"
          />

          {/* Text content */}
          <div className="flex flex-col flex-1 items-start gap-[3px] min-w-0">
            <p className="self-stretch mt-[-1.00px] [font-family:'Open_Sans',Helvetica] font-normal text-[#676767] text-2xl tracking-[0] leading-8">
              {item.title}
            </p>
            <p className="self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-[#676767] text-base tracking-[0] leading-6">
              {item.lessons}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
