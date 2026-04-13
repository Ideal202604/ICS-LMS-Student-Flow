// Testimonial card data — exactly matching Figma reference (mnwt10e4B9BeSJ)
const testimonials = [
  {
    reviewImg: "https://c.animaapp.com/mnwt10e4B9BeSJ/img/review.png",
    quote: '"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."',
    authorName: "Jenny Wilson",
    authorNameWidth: "w-[101px]",
    company: "Grower.io",
    companyWidth: "w-[74px]",
    authorGap: "gap-[18px]",
    authorContainerWidth: "w-[197px]",
    bgImg: "https://c.animaapp.com/mnwt10e4B9BeSJ/img/bg.png",
    bgRounded: "",
  },
  {
    reviewImg: "https://c.animaapp.com/mnwt10e4B9BeSJ/img/review-1.png",
    quote: '"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."',
    authorName: "Devon Lane",
    authorNameWidth: "w-[92px]",
    company: "DLDesign.co",
    companyWidth: "w-[93px]",
    authorGap: "gap-2.5",
    authorContainerWidth: "w-[199px]",
    bgImg: "https://c.animaapp.com/mnwt10e4B9BeSJ/img/bg-1.png",
    bgRounded: "rounded-[15px]",
  },
];

export const StudentTestimonialsSection = (): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[35px] relative w-full">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="relative w-full max-w-[625px] min-h-[239px] flex flex-col sm:flex-row sm:block">
          {/* Text content positioned to the right of the image */}
          <div className="sm:absolute sm:top-[15px] sm:left-[279px] w-full sm:w-[348px] sm:h-[209px] flex flex-col px-4 sm:px-0 mt-4 sm:mt-0">
            {/* Star rating image */}
            <img
              className="w-[121px] h-[18.09px]"
              alt="Review"
              src={testimonial.reviewImg}
            />
            {/* Quote text */}
            <p className="w-[346px] h-28 mt-[30.9px] [font-family:'Open_Sans',Helvetica] font-normal text-base-02 text-lg tracking-[0] leading-7">
              {testimonial.quote}
            </p>
            {/* Author info */}
            <div
              className={`${testimonial.authorContainerWidth} mt-5 flex ${testimonial.authorGap}`}
            >
              <span
                className={`flex items-center ${testimonial.authorNameWidth} h-7 [font-family:'Open_Sans',Helvetica] font-bold text-base-02 text-base tracking-[-0.20px] leading-7 whitespace-nowrap`}
              >
                {testimonial.authorName}
              </span>
              <span
                className={`flex items-center mt-0.5 ${testimonial.companyWidth} h-6 [font-family:'Open_Sans',Helvetica] font-normal text-blue-gray500 text-base tracking-[0] leading-6 whitespace-nowrap`}
              >
                {testimonial.company}
              </span>
            </div>
          </div>
          {/* Person photo */}
          <img
            className={`sm:absolute sm:top-0 sm:left-0 w-[180px] sm:w-[239px] h-[180px] sm:h-[239px] object-cover mx-auto sm:mx-0 ${testimonial.bgRounded}`}
            alt="Bg"
            src={testimonial.bgImg}
          />
        </div>
      ))}
    </div>
  );
};
