const testimonials = [
  {
    name: "Albert Flores",
    role: "Founder of GearUp",
    image: "https://c.animaapp.com/mnwxwol3SDKgi5/img/bg.png",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder of Womenia",
    image: "https://c.animaapp.com/mnwxwol3SDKgi5/img/bg-1.png",
  },
  {
    name: "Courtney Henry",
    role: "Founder of CH Beauty",
    image: "https://c.animaapp.com/mnwxwol3SDKgi5/img/bg-2.png",
  },
];

export const TestimonialCarouselSection = (): JSX.Element => {
  return (
    <div className="w-full flex justify-center overflow-x-auto">
      <div className="flex gap-4 sm:gap-6 lg:gap-[46px] px-4 sm:px-0">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-[260px] sm:w-[280px] lg:w-[316px] h-[420px] sm:h-[480px] lg:h-[568px] relative overflow-hidden rounded-[20px] flex-shrink-0"
          >
            {/* Background image */}
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt={testimonial.name}
              src={testimonial.image}
            />
            {/* Dark gradient overlay at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[223px] rounded-[0px_0px_20px_20px] bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] opacity-80" />
            {/* Person name */}
            <div className="absolute bottom-[50px] left-8 h-6 flex items-center [font-family:'Open_Sans',Helvetica] font-bold text-basewhite text-lg tracking-[-0.50px] leading-6 whitespace-nowrap">
              {testimonial.name}
            </div>
            {/* Person role */}
            <div className="absolute bottom-[27px] left-8 [font-family:'Open_Sans',Helvetica] font-normal text-gray-300 text-base tracking-[0] leading-[22px] whitespace-nowrap">
              {testimonial.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
