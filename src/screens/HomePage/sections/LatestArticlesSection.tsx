import { Card, CardContent } from "../../../components/ui/card";

const articles = [
  {
    image: "https://c.animaapp.com/mnwpw3l9jXfMum/img/rectangle-139.png",
    title: "Best Learnpress Wordpress Theme Collection For 2023",
    date: "Jan 24, 22023",
    description: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
  },
  {
    image: "https://c.animaapp.com/mnwpw3l9jXfMum/img/rectangle-139-1.png",
    title: "Best Learnpress Wordpress Theme Collection For 2023",
    date: "Jan 24, 22023",
    description: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
  },
  {
    image: "https://c.animaapp.com/mnwpw3l9jXfMum/img/rectangle-139-2.png",
    title: "Best Learnpress Wordpress Theme Collection For 2023",
    date: "Jan 24, 22023",
    description: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
  },
];

export const LatestArticlesSection = (): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-[30px] w-full">
      {articles.map((article, index) => (
        <Card
          key={index}
          className={`card-animate flex flex-col items-start rounded-[20px] border border-solid border-[#e9e9e9] overflow-hidden flex-1 w-full md:max-w-[410px] bg-white p-0 animate-slide-in-up ${index === 1 ? 'animation-delay-200' : index === 2 ? 'animation-delay-400' : ''}`}
        >
          <img
            className="w-full h-[250px] rounded-t-[20px] object-cover"
            alt="Rectangle"
            src={article.image}
          />
          <CardContent className="flex flex-col items-start gap-3 p-5 w-full">
            <h3 className="self-stretch [font-family:'Open_Sans',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[24px]">
              {article.title}
            </h3>
            <div className="flex items-center gap-2">
              <span className="[font-family:'Open_Sans',Helvetica] font-normal text-[#555555] text-base tracking-[0] leading-6 whitespace-nowrap">
                {article.date}
              </span>
            </div>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#555555] text-lg tracking-[0] leading-[27px] self-stretch">
              {article.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
