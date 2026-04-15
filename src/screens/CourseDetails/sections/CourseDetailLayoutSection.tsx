import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { EnrollmentCheckoutModal } from "../../../components/ui/enrollment-checkout-modal";

// Nav tabs (from Figma CourseNavTabsSection)
const navTabs = [
  { label: "About" },
  { label: "Recently Asses" },
  { label: "Discussions" },
  { label: "Bookmarks" },
  { label: "Certificates" },
];

// Data for "What You'll Learn" items (8 items, 2 columns of 4)
const learnItems = [
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
];

// Data for "This course includes" items
const courseIncludesLeft = [
  {
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-16.svg",
    label: "1 Role Play",
  },
  {
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-23.svg",
    label: "29.5 hours on-demand video",
  },
  {
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button.svg",
    label: "exercises",
  },
  {
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-5.svg",
    label: "28 articles",
  },
];

const courseIncludesRight = [
  {
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-1.svg",
    label: "156 downloadable resources",
  },
  {
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-11.svg",
    label: "Access on mobile and TV",
  },
  {
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-10.svg",
    label: "Closed captions",
  },
  {
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-14.svg",
    label: "Certificate of completion",
  },
];

// Data for Course Structure modules
const courseModules = [
  { num: "01", title: "Module 2: Lorem And dolor", meta: "8 lectures • 26min" },
  { num: "02", title: "Module 2: Lorem And dolor", meta: "8 lectures • 26min" },
  { num: "03", title: "Module 2: Lorem And dolor", meta: "8 lectures • 26min" },
  { num: "04", title: "Module 2: Lorem And dolor", meta: "8 lectures • 26min" },
];

// Data for ratings bars — use percentage widths so they're responsive
const ratingBars = [
  { star: "5", pct: "80%" },
  { star: "4", pct: "45%" },
  { star: "3", pct: "20%" },
  { star: "2", pct: "8%" },
  { star: "1", pct: "4%" },
];

// Data for reviews
const reviews = [
  {
    logo: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/google--g--logo-1.svg",
    starSrc: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/star-1-4.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    name: "Maria Sheferd",
    date: "19/04/2024",
    avatar: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/ellipse-2.png",
  },
  {
    logo: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/google--g--logo-1.svg",
    starSrc: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/star-1-4.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    name: "Maria Sheferd",
    date: "19/04/2024",
    avatar: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/ellipse-2-1.png",
  },
];

// Data for FAQ items
const faqItems = [
  { num: "01", question: "What is the Research Writing & AI class?" },
  { num: "02", question: "How to learn Research Writing & AI?" },
  { num: "03", question: "How to learn Research Writing & AI step by step?" },
  { num: "04", question: "Is Research Writing & AI Course Certified?" },
];

// Data for course details sidebar
const courseDetails = [
  { label: "Duration", value: "3 Months" },
  { label: "Students Enrooled", value: "15,234" },
  { label: "Language", value: "English" },
  { label: "Certificate", value: "Yes" },
];

// Data for "Need Help Deciding?" items
const helpItems = [
  "Course suitability assessment",
  "Career path consultation",
  "Payment plan options",
];

// Data for Quick Links
const quickLinks = ["Home", "All Courses", "Why Choose Us", "Blog"];

// Data for Company links
const companyLinks = [
  "Privacy Policy",
  "Teams of Service",
  "Refund Policy",
  "FAQs",
];

// Data for sidebar action buttons
const sidebarActions = [
  {
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-17.svg",
    label: "Save",
  },
  {
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-16.svg",
    label: "Syllabus",
  },
  {
    icon: "https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-15.svg",
    label: "Share",
  },
];

interface CourseDetailLayoutSectionProps {
  courseImage?: string;
  courseTitle?: string;
  courseSlug?: string;
}

export const CourseDetailLayoutSection = ({ courseImage, courseTitle, courseSlug }: CourseDetailLayoutSectionProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [shareToast, setShareToast] = useState(false);
  const [syllabusOpen, setSyllabusOpen] = useState(false);

  const handleSave = () => setSaved((prev) => !prev);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href).catch(() => {});
    setShareToast(true);
    setTimeout(() => setShareToast(false), 2500);
  };

  return (
    <>
      <div className="flex flex-col w-full items-center gap-16 md:gap-28">
        {/* Main content: left column + right sidebar */}
        <div className="flex flex-wrap items-start gap-8 lg:gap-16 w-full px-3 sm:px-6 md:px-8 lg:px-16 xl:px-[200px] 2xl:px-[264px]">

          {/* LEFT COLUMN — matches Figma ComponentScreen w-[865px] */}
          <div className="flex flex-col flex-1 min-w-0 items-start gap-8">

            {/* ── Nav Tabs (Figma: CourseNavTabsSection) ── */}
            <nav className="w-full flex items-center bg-white border-b border-solid border-[#eaebeb] overflow-x-auto">
              {navTabs.map((tab, index) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(index)}
                  className={`inline-flex items-center justify-center gap-2.5 p-2.5 flex-shrink-0 cursor-pointer border-b-[3px] border-solid transition-colors
                    ${activeTab === index ? "bg-[#e8f1fc] border-[#0072de]" : "bg-transparent border-transparent"}`}
                >
                  <span
                    className={`[font-family:'Open_Sans',Helvetica] font-semibold text-base sm:text-lg md:text-xl tracking-[0] leading-8 whitespace-nowrap
                      ${activeTab === index ? "text-[#0072de]" : "text-black"}`}
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </nav>

            {/* ── Course Overview Card ── */}
            <Card className="w-full bg-white rounded-2xl border border-solid border-[#eaebeb] shadow-none">
              <CardContent className="flex flex-col items-start gap-8 p-6 sm:p-8">
                <div className="flex items-start gap-6 w-full">
                  <img
                    className="w-11 h-11 flex-shrink-0"
                    alt="Course Overview Icon"
                    src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-13.svg"
                  />
                  <div className="flex flex-col items-start gap-2">
                    <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8">
                      Course Overview
                    </h2>
                    <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
                      Everything you need to know about this course
                    </p>
                  </div>
                </div>
                <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
                  This comprehensive program guides you from the basics of
                  Microsoft Excel to advanced techniques and mastery of
                  automation. Whether you&apos;re a beginner looking to build a
                  strong foundation or a professional aiming to optimise
                  workflows, this course equips you with the skills to harness
                  Excel as a powerful business tool.
                </p>
              </CardContent>
            </Card>

            {/* ── What You'll Learn Card ── */}
            <Card className="w-full bg-white rounded-2xl border border-solid border-[#eaebeb] shadow-none">
              <CardContent className="flex flex-col items-start gap-8 p-6 sm:p-8">
                <div className="flex items-start gap-6 w-full">
                  <img
                    className="w-11 h-11 flex-shrink-0"
                    alt="What You'll Learn Icon"
                    src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-2.svg"
                  />
                  <div className="flex flex-col items-start gap-2">
                    <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
                      What You'll Learn
                    </h2>
                    <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                      8 key objectives
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <div className="flex flex-col flex-1 items-start gap-4">
                    {learnItems.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 w-full">
                        <img
                          className="w-11 h-11 flex-shrink-0"
                          alt="Learn item icon"
                          src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-2.svg"
                        />
                        <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col flex-1 items-start gap-4">
                    {learnItems.slice(4, 8).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 w-full">
                        <img
                          className="w-11 h-11 flex-shrink-0"
                          alt="Learn item icon"
                          src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-2.svg"
                        />
                        <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ── This Course Includes Card ── */}
            <Card className="w-full bg-white rounded-2xl border border-solid border-[#eaebeb] shadow-none">
              <CardContent className="flex flex-col items-start gap-8 p-6 sm:p-8">
                <div className="flex items-start gap-6 w-full">
                  <img
                    className="w-11 h-11 flex-shrink-0"
                    alt="Course includes icon"
                    src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-6.svg"
                  />
                  <div className="flex flex-col items-start gap-2">
                    <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
                      This course includes
                    </h2>
                    <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                      8 key objectives
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <div className="flex flex-col flex-1 items-start gap-4">
                    {courseIncludesLeft.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 w-full">
                        <img
                          className="w-11 h-11 flex-shrink-0"
                          alt={item.label}
                          src={item.icon}
                        />
                        <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col flex-1 items-start gap-4">
                    {courseIncludesRight.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 w-full">
                        <img
                          className="w-11 h-11 flex-shrink-0"
                          alt={item.label}
                          src={item.icon}
                        />
                        <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ── Course Structure Card ── */}
            <Card className="w-full bg-white rounded-2xl border border-solid border-[#eaebeb] shadow-none">
              <CardContent className="flex flex-col items-start gap-8 p-6 sm:p-8">
                <div className="flex items-start gap-6 w-full">
                  <img
                    className="w-11 h-11 flex-shrink-0"
                    alt="Course Structure icon"
                    src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-15.svg"
                  />
                  <div className="flex flex-col items-start gap-2">
                    <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
                      Course Structure
                    </h2>
                    <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                      4 sections • 8 lectures • 29h 41m total length
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full gap-1">
                  {courseModules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-2.5 px-4 sm:px-6 py-4 w-full bg-[#f7fafc] rounded-lg hover:bg-[#eef4fb] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        <div className="flex w-12 h-12 items-center justify-center bg-[#ecf5fd] rounded-lg border border-solid border-white flex-shrink-0">
                          <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-lg tracking-[0] leading-7">
                            {mod.num}
                          </span>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                          <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7">
                            {mod.title}
                          </span>
                          <span className="[font-family:'Open_Sans',Helvetica] font-normal text-[#6a6a6a] text-base tracking-[0] leading-6">
                            {mod.meta}
                          </span>
                        </div>
                      </div>
                      <img
                        className="w-6 h-6 flex-shrink-0"
                        alt="Expand"
                        src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-6.svg"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ── Certificate Card (gradient background from Figma CertificateCTASection) ── */}
            <Card className="w-full rounded-2xl border border-solid border-[#eaebeb] shadow-none bg-[linear-gradient(180deg,rgba(213,234,255,1)_0%,rgba(166,209,250,1)_100%)]">
              <CardContent className="flex flex-col items-start gap-8 p-6 sm:p-8">
                <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8">
                  This is course Certificate
                </h2>
                <div className="flex items-center gap-8 sm:gap-12 flex-wrap">
                  <div
                    className="relative w-[240px] sm:w-[304px] h-[170px] sm:h-[215px] bg-cover bg-[100%_100%] flex-shrink-0"
                    style={{
                      backgroundImage:
                        "url(https://c.animaapp.com/mnwz2xsf6lRKFq/img/153711089-d61b13da-12e9-497a-a94e-845ffc895da1-1.png)",
                    }}
                  >
                    <img
                      className="absolute top-5 left-5 w-[34px] h-[42px]"
                      alt="ICS logo"
                      src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/ics-png-3.png"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-4 flex-1 min-w-[200px]">
                    <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8">
                      Hey Learner, This Course is 100% Free
                    </h3>
                    <Button className="h-auto bg-[#0072de] hover:bg-[#005bb5] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] px-[26px] py-3 [font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-lg tracking-[0] leading-6">
                      Join For Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ── ICS Learning's Ratings Card ── */}
            <Card className="w-full bg-white rounded-2xl border border-solid border-[#eaebeb] shadow-none">
              <CardContent className="flex flex-col items-start gap-6 p-6 sm:p-8">
                <div className="flex items-center gap-6">
                  <img
                    className="w-11 h-11 flex-shrink-0"
                    alt="Ratings icon"
                    src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-15.svg"
                  />
                  <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
                    ICS Learning&#39;s Ratings
                  </h2>
                </div>
                <div className="flex items-center gap-6 sm:gap-8 w-full flex-wrap">
                  {/* Rating bars */}
                  <div className="flex flex-col gap-2 flex-1 min-w-[180px]">
                    {ratingBars.map((bar, idx) => (
                      <div key={idx} className="flex items-center gap-4 w-full">
                        <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#aaaaaa] text-base text-center leading-normal w-3 flex-shrink-0">
                          {bar.star}
                        </span>
                        <div className="flex-1 h-3 bg-[#dbdee1] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#fbbc05] rounded-full"
                            style={{ width: bar.pct }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Score display */}
                  <div className="flex flex-col items-center gap-2 w-[140px]">
                    <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#020202] text-7xl sm:text-[89.9px] text-center leading-none">
                      5.0
                    </span>
                    <div className="flex items-center justify-center gap-1">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <img
                          key={i}
                          className="w-6 h-6"
                          alt="Star"
                          src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/star-1.svg"
                        />
                      ))}
                    </div>
                    <span className="[font-family:'Open_Sans',Helvetica] font-normal text-grey text-base text-center tracking-[0] leading-6">
                      500 reviews
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ── Reviews Card ── */}
            <Card className="w-full bg-white rounded-2xl border border-solid border-[#eaebeb] shadow-none">
              <CardContent className="flex flex-col items-start gap-8 p-6 sm:p-8">
                <div className="flex items-center gap-6">
                  <img
                    className="w-11 h-11 flex-shrink-0"
                    alt="Reviews icon"
                    src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-15.svg"
                  />
                  <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-xl sm:text-2xl tracking-[0] leading-8">
                    What other courses learners took with this course
                  </h2>
                </div>
                <div className="flex flex-wrap items-start gap-4 sm:gap-6 w-full">
                  {reviews.map((review, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col flex-1 min-w-[280px] items-center gap-4 p-6 sm:p-8 bg-white rounded-2xl shadow-[-8px_-4px_29px_#00000014]"
                    >
                      <div className="flex flex-col items-center gap-4 w-full">
                        <img
                          className="w-[52px] h-[52px]"
                          alt="Google logo"
                          src={review.logo}
                        />
                        <div className="flex items-center justify-center gap-1.5">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <img
                              key={i}
                              className="w-6 h-6"
                              alt="Star"
                              src={review.starSrc}
                            />
                          ))}
                        </div>
                        <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#363636] text-base text-center tracking-[0] leading-[22px] max-w-[253px]">
                          {review.text}
                        </p>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0d0d0d] text-lg text-center tracking-[0] leading-[22px] whitespace-nowrap">
                          {review.name}
                        </span>
                        <span className="[font-family:'Open_Sans',Helvetica] font-normal text-[#6a6a6a] text-sm text-center tracking-[0] leading-[22px]">
                          {review.date}
                        </span>
                        <img
                          className="w-12 h-12 rounded-full object-cover mt-1"
                          alt="Reviewer avatar"
                          src={review.avatar}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ── FAQ Card (matches Figma CourseFaqSection) ── */}
            <Card className="w-full bg-white rounded-2xl border border-solid border-[#eaebeb] shadow-none">
              <CardContent className="flex flex-col items-start gap-4 p-6 sm:p-8">
                <div className="flex items-center gap-4 w-full">
                  <img
                    className="w-11 h-11 flex-shrink-0"
                    alt="FAQ icon"
                    src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-15.svg"
                  />
                  <h2 className="[font-family:'Open_Sans',Helvetica] font-bold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
                    FAQ
                  </h2>
                </div>
                {faqItems.map((faq, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-4 sm:px-6 py-4 w-full rounded-[16px_16px_0px_0px] bg-[#f7fafc] hover:bg-[#eef4fb] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 flex-1">
                      <div className="flex w-12 h-12 items-center justify-center bg-[#ecf5fd] rounded-lg border border-solid border-white flex-shrink-0">
                        <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-lg tracking-[0] leading-7">
                          {faq.num}
                        </span>
                      </div>
                      <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-base sm:text-lg tracking-[0] leading-7">
                        {faq.question}
                      </span>
                    </div>
                    <img
                      className="w-6 h-6 flex-shrink-0"
                      alt="Expand"
                      src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-6.svg"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="flex flex-col items-center gap-12 sm:gap-16 w-full lg:w-[400px] xl:w-[463px] flex-shrink-0 py-0 sm:py-8">
            {/* Enrollment Card */}
            <Card className="w-full shadow-[0px_4px_4px_#00000040] rounded-[0px_0px_30px_30px] border-0">
              <CardContent className="p-0">
                <div className="w-full h-[220px] sm:h-[269px] overflow-hidden rounded-t-[inherit]">
                  <img
                    className="w-full h-full object-cover"
                    alt={courseTitle || "Course thumbnail"}
                    src={courseImage || "https://c.animaapp.com/mnwz2xsf6lRKFq/img/rectangle-39423.svg"}
                  />
                </div>
                <div className="flex flex-col items-center gap-6 px-6 sm:pl-8 sm:pr-[31px] pt-6 pb-8 bg-white rounded-[0px_0px_30px_30px]">
                  {/* Save / Syllabus / Share buttons */}
                  <div className="flex items-center gap-4 sm:gap-[54px] relative w-full justify-center">
                    {/* Save */}
                    <button
                      onClick={handleSave}
                      className={`flex flex-col items-center justify-center gap-2 px-4 sm:px-6 py-2.5 rounded-2xl cursor-pointer transition-all duration-200 active:scale-95 ${saved ? "bg-[#dbeafe] ring-2 ring-[#0072de]" : "bg-[#e9ebef] hover:bg-[#d4d8e0]"}`}
                      title={saved ? "Unsave course" : "Save course"}
                    >
                      <img className="w-6 h-6" alt="Save" src={sidebarActions[0].icon} />
                      <span className={`[font-family:'Open_Sans',Helvetica] font-semibold text-base tracking-[0] leading-6 whitespace-nowrap ${saved ? "text-[#0072de]" : "text-black"}`}>
                        {saved ? "Saved" : "Save"}
                      </span>
                    </button>
                    {/* Syllabus */}
                    <button
                      onClick={() => setSyllabusOpen((prev) => !prev)}
                      className="flex flex-col items-center justify-center gap-2 px-4 sm:px-6 py-2.5 bg-[#e9ebef] hover:bg-[#d4d8e0] rounded-2xl cursor-pointer transition-all duration-200 active:scale-95"
                    >
                      <img className="w-6 h-6" alt="Syllabus" src={sidebarActions[1].icon} />
                      <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                        Syllabus
                      </span>
                    </button>
                    {/* Share */}
                    <button
                      onClick={handleShare}
                      className="flex flex-col items-center justify-center gap-2 px-4 sm:px-6 py-2.5 bg-[#e9ebef] hover:bg-[#d4d8e0] rounded-2xl cursor-pointer transition-all duration-200 active:scale-95"
                    >
                      <img className="w-6 h-6" alt="Share" src={sidebarActions[2].icon} />
                      <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                        Share
                      </span>
                    </button>
                    {/* Share toast */}
                    {shareToast && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0072de] text-white text-sm font-semibold px-4 py-1.5 rounded-lg shadow-md whitespace-nowrap animate-fade-in-down">
                        Link copied!
                      </div>
                    )}
                  </div>
                  {/* Syllabus dropdown */}
                  {syllabusOpen && (
                    <div className="w-full flex flex-col gap-2 bg-[#f7fafc] rounded-2xl p-4 border border-[#eaebeb]">
                      <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-base mb-1">Course Syllabus</p>
                      {courseModules.map((mod, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="flex w-8 h-8 items-center justify-center bg-[#ecf5fd] rounded-lg flex-shrink-0">
                            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-sm">{mod.num}</span>
                          </div>
                          <div>
                            <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-sm leading-5">{mod.title}</p>
                            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#6a6a6a] text-xs">{mod.meta}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Enroll Now button */}
                  <Button
                    onClick={() => setIsEnrollOpen(true)}
                    className="h-auto w-full bg-[#0072de] hover:bg-[#005bb5] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] px-[26px] py-3 [font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-lg tracking-[0] leading-6"
                  >
                    Enroll Now
                  </Button>
                  {/* Course image small preview */}
                  {courseImage && (
                    <div className="w-full flex items-center gap-3 px-2 py-2 bg-[#f3f9ff] rounded-xl border border-[#e0eef9]">
                      <img
                        className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                        alt={courseTitle || "Course"}
                        src={courseImage}
                      />
                      <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0a3d8f] text-sm leading-5 line-clamp-2">
                        {courseTitle}
                      </span>
                    </div>
                  )}
                  {/* Course details */}
                  <div className="flex flex-col w-full items-start gap-4">
                    {courseDetails.map((detail, idx) => (
                      <div key={idx} className="flex items-center justify-between w-full">
                        <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                          {detail.label}
                        </span>
                        <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[-0.36px] leading-7 whitespace-nowrap">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Need Help Deciding? */}
            <div className="flex flex-col w-full items-center gap-4">
              <div className="flex flex-col items-start gap-8 w-full">
                <div className="flex items-start gap-6 w-full">
                  <img
                    className="w-11 h-11 flex-shrink-0"
                    alt="Help icon"
                    src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-6.svg"
                  />
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
                      Need Help Deciding?
                    </h3>
                    <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
                      Get personalized guidance from our experts
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full items-start gap-8">
                  <div className="flex flex-col items-start gap-4 w-full">
                    {helpItems.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-6 w-full">
                        <img
                          className="w-11 h-11 flex-shrink-0"
                          alt="Help item icon"
                          src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/primary-button-22.svg"
                        />
                        <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button className="h-auto w-full flex items-center justify-center gap-2.5 px-[26px] py-3 bg-[#0072de] hover:bg-[#005bb5] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-lg tracking-[0] leading-6">
                    <img
                      className="w-6 h-6"
                      alt="Chat icon"
                      src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-1.svg"
                    />
                    Chat With Advisor
                  </Button>
                </div>
              </div>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-6 w-full">
                Typically replies within 5 minutes
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom: CTA Banner + Footer ── */}
        <div className="w-full flex flex-col">
          {/* CTA Banner */}
          <div
            className="w-full flex flex-col items-center justify-center py-16 md:py-28 px-4 sm:px-8"
            style={{
              background:
                "linear-gradient(0deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url(https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame-1321318002.png) 50% 50% / cover",
              minHeight: "392px",
            }}
          >
            <div className="flex flex-col items-center gap-6 max-w-[883px] w-full">
              <div className="flex flex-col items-center gap-4 w-full">
                <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-2xl sm:text-3xl md:text-[44px] text-center tracking-[-0.88px] leading-tight md:leading-[52px] w-full">
                  Start Your Career Journey Today
                </h2>
                <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-base md:text-lg text-center tracking-[0] leading-7 w-full">
                  Don&apos;t wait. Upgrade your skills and secure your future now.
                </p>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
                <Button
                  onClick={() => setIsEnrollOpen(true)}
                  className="h-auto flex items-center gap-2.5 px-6 sm:px-8 py-3 bg-[#117ade] hover:bg-[#0060c0] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] [font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-base sm:text-lg tracking-[0] leading-6"
                >
                  Enroll Now
                  <img className="w-6 h-6" alt="Arrow" src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame.svg" />
                </Button>
                <Button
                  variant="outline"
                  className="h-auto flex items-center gap-2.5 px-6 sm:px-8 py-3 bg-white hover:bg-gray-50 rounded-xl border border-solid border-[#8ab5dd] [font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-base sm:text-lg tracking-[0] leading-6"
                >
                  Contact Us
                  <img className="w-6 h-6" alt="Arrow" src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/frame.svg" />
                </Button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[200px] 2xl:px-[264px] py-12 md:py-24">
            <div className="w-full max-w-[1392px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
              {/* Logo + description */}
              <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-start gap-6">
                <img
                  className="w-[100px] h-[93px] md:w-[145px] md:h-[135px]"
                  alt="ICS logo"
                  src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/ics-png-3-1.png"
                />
                <p className="max-w-[265px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
                  Lorem ipsum dolor sit amet cons ectetur. Nunc ultrices dui sed
                  et vulputate facilisi blandit dapibus.
                </p>
              </div>
              {/* Quick Links */}
              <div className="flex flex-col items-start gap-6">
                <h4 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px]">
                  Quick Links
                </h4>
                <nav className="flex flex-col items-start gap-4">
                  {quickLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:text-[#0072de] hover:underline transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </nav>
              </div>
              {/* Company */}
              <div className="flex flex-col items-start gap-6">
                <h4 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                  Company
                </h4>
                <nav className="flex flex-col items-start gap-4">
                  {companyLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:text-[#0072de] hover:underline transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </nav>
              </div>
              {/* Contact Information */}
              <div className="flex flex-col items-start gap-6">
                <h4 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                  Contact Information
                </h4>
                <address className="flex flex-col items-start gap-4 not-italic">
                  <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                    +91 98904 51547
                  </span>
                  <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                    ceo@idealizeer.com
                  </span>
                  <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
                    Pune, Maharashtra, India
                  </span>
                </address>
              </div>
              {/* Follow Us */}
              <div className="flex flex-col items-start gap-6">
                <h4 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px]">
                  Follow Us
                </h4>
                <div className="flex items-center gap-4 sm:gap-6">
                  <img className="w-8 h-8 object-cover" alt="Instagram" src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/instagram-logo-2016-svg-1.png" />
                  <img className="w-8 h-8 object-cover" alt="LinkedIn" src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/linkedin-icon-svg-1.png" />
                  <img className="w-[46px] h-8 object-cover" alt="YouTube" src="https://c.animaapp.com/mnwz2xsf6lRKFq/img/youtube-logo-1.png" />
                </div>
              </div>
            </div>
            {/* Footer bottom */}
            <div className="w-full max-w-[1392px] mx-auto mt-10 pt-6 border-t border-solid border-[#cdcdcd] flex flex-col items-center">
              <p className="[font-family:'Poppins',Helvetica] font-normal text-base-02 text-sm text-center tracking-[0] leading-6 w-full">
                © Copyright 2026, All Rights Reserved by Idealizeer
              </p>
            </div>
          </footer>
        </div>
      </div>

      <EnrollmentCheckoutModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        title={courseTitle}
        bannerImage={courseImage}
        courseSlug={courseSlug}
      />
    </>
  );
};
