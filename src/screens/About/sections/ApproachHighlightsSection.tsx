const highlights = [
  {
    imgSrc: "https://c.animaapp.com/mnwxwol3SDKgi5/img/vector.svg",
    imgWidth: "w-[72px]",
    title: "Expert Training",
    description:
      "Lorem ipsum dolor sit amet consecte tur. Commodo cursus quis at felis feugiat donec amet eget amet eget.",
  },
  {
    imgSrc: "https://c.animaapp.com/mnwxwol3SDKgi5/img/vector-1.svg",
    imgWidth: "w-[66px]",
    title: "Certification Ready",
    description:
      "Lorem ipsum dolor sit amet consecte tur. Commodo cursus quis at felis feugiat donec amet eget amet eget.",
  },
  {
    imgSrc: "https://c.animaapp.com/mnwxwol3SDKgi5/img/vector-2.svg",
    imgWidth: "w-16",
    title: "Community Support",
    description:
      "Lorem ipsum dolor sit amet consecte tur. Commodo cursus quis at felis feugiat donec amet eget amet eget.",
  },
  {
    imgSrc: "https://c.animaapp.com/mnwxwol3SDKgi5/img/vector-3.svg",
    imgWidth: "w-[59px]",
    title: "Career Focused",
    description:
      "Lorem ipsum dolor sit amet consecte tur. Commodo cursus quis at felis feugiat donec amet eget amet eget.",
  },
];

export const ApproachHighlightsSection = (): JSX.Element => {
  return (
    <div className="flex flex-nowrap items-start justify-center gap-4 w-full">
      {highlights.map((item, index) => (
        <div key={index} className="flex flex-col flex-1 min-w-0 items-center gap-6">
          <img
            className={`${item.imgWidth} h-16 object-contain`}
            alt="Vector"
            src={item.imgSrc}
          />
          <div className="flex flex-col items-center gap-4 self-stretch w-full">
            <p className="self-stretch [font-family:'Open_Sans',Helvetica] font-semibold text-black text-xl text-center tracking-[0] leading-[29px] m-0">
              {item.title}
            </p>
            <p className="w-full max-w-[332px] text-black text-lg text-center leading-7 [font-family:'Open_Sans',Helvetica] font-normal tracking-[0] m-0">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
