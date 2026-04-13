export interface CourseInfo {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
}

export const allCourses: CourseInfo[] = [
  {
    slug: "digital-marketing-using-ai",
    title: "Digital Marketing Using AI",
    category: "Accredited Programs",
    description: "Explore top-tier, up-to-date online courses designed by industry professionals to accelerate your career in technology and creative fields.",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-5.png",
    originalPrice: "₹20,000",
    discountedPrice: "₹15,000",
    discount: "25% OFF",
  },
  {
    slug: "research-writing-ai",
    title: "Research Writing & AI: Beginner to Advanced",
    category: "Accredited Programs",
    description: "Explore top-tier, up-to-date online courses designed by industry professionals to accelerate your career in technology and creative fields.",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-4.png",
    originalPrice: "₹20,000",
    discountedPrice: "₹15,000",
    discount: "25% OFF",
  },
  {
    slug: "digital-marketing-using-ai-2",
    title: "Digital Marketing Using AI",
    category: "Accredited Programs",
    description: "Explore top-tier, up-to-date online courses designed by industry professionals to accelerate your career in technology and creative fields.",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-5.png",
    originalPrice: "₹20,000",
    discountedPrice: "₹15,000",
    discount: "25% OFF",
  },
  {
    slug: "digital-marketing-using-ai-3",
    title: "Digital Marketing Using AI",
    category: "Accredited Programs",
    description: "Explore top-tier, up-to-date online courses designed by industry professionals to accelerate your career in technology and creative fields.",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-5.png",
    originalPrice: "₹20,000",
    discountedPrice: "₹15,000",
    discount: "25% OFF",
  },
  {
    slug: "research-writing-ai-2",
    title: "Research Writing & AI",
    category: "Accredited Programs",
    description: "Explore top-tier, up-to-date online courses designed by industry professionals to accelerate your career in technology and creative fields.",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-4.png",
    originalPrice: "₹20,000",
    discountedPrice: "₹15,000",
    discount: "25% OFF",
  },
  {
    slug: "digital-marketing-using-ai-4",
    title: "Digital Marketing Using AI",
    category: "Accredited Programs",
    description: "Explore top-tier, up-to-date online courses designed by industry professionals to accelerate your career in technology and creative fields.",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-5.png",
    originalPrice: "₹20,000",
    discountedPrice: "₹15,000",
    discount: "25% OFF",
  },
];

export function getCourseBySlug(slug: string): CourseInfo | undefined {
  return allCourses.find((c) => c.slug === slug);
}
