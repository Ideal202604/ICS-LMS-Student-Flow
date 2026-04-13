const syllabusItems = [
  {
    id: 1,
    title: "Know You Writing & AI: Beginner to Advanced",
    lessons: "9 Lessons",
  },
  {
    id: 2,
    title: "Know You Writing & AI: Beginner to Advanced",
    lessons: "9 Lessons",
  },
  {
    id: 3,
    title: "Know You Writing & AI: Beginner to Advanced",
    lessons: "9 Lessons",
  },
  {
    id: 4,
    title: "Know You Writing & AI: Beginner to Advanced",
    lessons: "9 Lessons",
  },
];

export const CourseSyllabusSidebarSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-6">
      {syllabusItems.map((item) => (
        <div
          key={item.id}
          className="flex items-start gap-[19px] self-stretch w-full flex-[0_0_auto]"
        >
          <img
            className="flex-[0_0_auto]"
            alt="Frame"
            src="https://c.animaapp.com/mnx1pxe5WuKivI/img/frame-1321317981.svg"
          />
          <div className="flex flex-col flex-1 items-start gap-[3px]">
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
