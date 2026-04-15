import { useState, useRef, useEffect, useCallback } from "react";

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

function useCardsPerView() {
  const [cardsPerView, setCardsPerView] = useState(3);
  useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cardsPerView;
}

const ARROW_SIZE = 44; // px — width of each arrow button
const GAP = 24; // gap-6 = 24px between cards

export const TestimonialCarouselSection = (): JSX.Element => {
  const cardsPerView = useCardsPerView();
  const total = testimonials.length;
  const maxIndex = Math.max(0, total - cardsPerView);
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const dotCount = maxIndex + 1;
  // card height based on how many cards are shown
  const cardHeight = cardsPerView === 1 ? "420px" : cardsPerView === 2 ? "480px" : "568px";

  return (
    <div className="w-full flex flex-col items-center gap-8">
      {/* Outer wrapper: arrows sit outside the track via negative margin, track is full-width */}
      <div className="w-full flex items-center gap-12">

        {/* ← Left Arrow */}
        <div className="flex-shrink-0" onClick={prev}>
          <img
            className="w-11 h-11 cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200"
            alt="Previous"
            src="https://c.animaapp.com/mnyh1m5aMKY8e5/img/layer-3.png"
          />
        </div>

        {/* Sliding Track */}
        <div
          className="flex-1 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Inner flex row — slides via translateX */}
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(calc(-${currentIndex} * (100% / ${cardsPerView} + ${GAP / cardsPerView}px)))`,
              transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-[20px] overflow-hidden relative"
                style={{
                  // Each card fills exactly 1/cardsPerView of the track minus gap space
                  width: `calc((100% - ${GAP * (cardsPerView - 1)}px) / ${cardsPerView})`,
                  height: cardHeight,
                }}
              >
                {/* Background photo */}
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={testimonial.name}
                  src={testimonial.image}
                />
                {/* Bottom gradient overlay */}
                <div
                  className="absolute bottom-0 left-0 w-full rounded-b-[20px]"
                  style={{
                    height: "220px",
                    background: "linear-gradient(0deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0) 100%)",
                  }}
                />
                {/* Name */}
                <p className="absolute bottom-[50px] left-8 font-bold text-white text-lg tracking-[-0.5px] leading-6 whitespace-nowrap [font-family:'Open_Sans',Helvetica]">
                  {testimonial.name}
                </p>
                {/* Role */}
                <p className="absolute bottom-[27px] left-8 text-gray-300 text-base leading-[22px] whitespace-nowrap [font-family:'Open_Sans',Helvetica]">
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* → Right Arrow */}
        <div className="flex-shrink-0" onClick={next}>
          <img
            className="w-11 h-11 cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200"
            alt="Next"
            src="https://c.animaapp.com/mnyh1m5aMKY8e5/img/layer-2.png"
          />
        </div>
      </div>

      {/* Dot indicators */}
      {dotCount > 1 && (
        <div className="flex items-center gap-2">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-6 h-2.5 bg-[#0072de]"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
