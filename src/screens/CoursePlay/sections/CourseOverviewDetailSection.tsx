import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const tabItems = [
  { label: "About", id: "about" },
  { label: "Recently Asses", id: "recently-asses" },
  { label: "Discussions", id: "discussions" },
  { label: "Bookmarks", id: "bookmarks" },
  { label: "Certificates", id: "certificates" },
];

const expandableCards = [
  {
    id: "what-youll-learn",
    icon: "https://c.animaapp.com/mnx5m6v2Jq3hjq/img/primary-button-1.svg",
    title: "What You'll Learn",
    subtitle: "5 key objectives",
    chevron: true,
  },
  {
    id: "this-course-includes",
    icon: "https://c.animaapp.com/mnx5m6v2Jq3hjq/img/primary-button-1.svg",
    title: "This course includes",
    subtitle: "8 key objectives",
    chevron: true,
  },
  {
    id: "course-structure",
    icon: "https://c.animaapp.com/mnx5m6v2Jq3hjq/img/primary-button.svg",
    title: "Course Structure",
    subtitle: "22 comprehensive modules",
    chevron: true,
  },
  {
    id: "skill-level",
    icon: "https://c.animaapp.com/mnx5m6v2Jq3hjq/img/primary-button.svg",
    title: "Skill Level",
    subtitle: "who this Course is for",
    chevron: true,
  },
];

const faqItems = [
  { num: "01", question: "What is the Research Writing & AI class?" },
  { num: "02", question: "How to learn Research Writing & AI?" },
  { num: "03", question: "How to learn Research Writing & AI step by step?" },
  { num: "04", question: "Is Research Writing & AI Course Certified?" },
];

const quickLinks = ["Home", "All Courses", "Why Choose Us", "Blog"];
const companyLinks = ["Privacy Policy", "Teams of Service", "Refund Policy", "FAQs"];

const socialIcons = [
  {
    alt: "Instagram logo",
    src: "https://c.animaapp.com/mnx5m6v2Jq3hjq/img/instagram-logo-2016-svg-1.png",
    className: "w-8 h-8",
  },
  {
    alt: "Linkedin icon svg",
    src: "https://c.animaapp.com/mnx5m6v2Jq3hjq/img/linkedin-icon-svg-1.png",
    className: "w-8 h-8",
  },
  {
    alt: "Youtube logo",
    src: "https://c.animaapp.com/mnx5m6v2Jq3hjq/img/youtube-logo-1.png",
    className: "w-[46px] h-8",
  },
];

export const CourseOverviewDetailSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="flex flex-col w-full items-start gap-16 md:gap-28">
      {/* Main content area — matches Figma ComponentScreen layout */}
      <div className="flex items-start w-full px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-start gap-8 w-full max-w-[865px]">

          {/* Tab Navigation — matches Figma CourseNavTabsSection exactly */}
          <nav className="w-full flex items-center bg-white border-b border-solid border-[#eaebeb] overflow-x-auto">
            {tabItems.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center justify-center gap-2.5 p-2.5 flex-shrink-0 cursor-pointer border-b-[3px] border-solid transition-colors
                  ${activeTab === tab.id ? "bg-[#e8f1fc] border-[#0072de]" : "bg-transparent border-transparent"}`}
              >
                <span
                  className={`[font-family:'Open_Sans',Helvetica] font-semibold text-base sm:text-lg md:text-xl tracking-[0] leading-8 whitespace-nowrap
                    ${activeTab === tab.id ? "text-[#0072de]" : "text-black"}`}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </nav>

          {/* ── Course Overview Card (Figma: CourseOverviewSection) ── */}
          <Card className="w-full rounded-2xl border border-solid border-[#eaebeb] bg-white shadow-none">
            <CardContent className="flex flex-col items-start gap-8 p-6 sm:p-8">
              <div className="flex items-start gap-6 w-full">
                <img
                  className="w-11 h-11 flex-shrink-0"
                  alt="Primary button"
                  src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/primary-button-4.svg"
                />
                <div className="flex flex-col items-start gap-2">
                  <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
                    Course Overview
                  </p>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                    Everything you need to know about this course
                  </p>
                </div>
              </div>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7 w-full">
                This comprehensive program guides you from the basics of
                Microsoft Excel to advanced techniques and mastery of
                automation. Whether you&apos;re a beginner looking to build
                a strong foundation or a professional aiming to optimise
                workflows, this course equips you with the skills to harness
                Excel as a powerful business tool.
              </p>
            </CardContent>
          </Card>

          {/* ── Expandable Section Cards (Figma: LearningObjectivesSection, CourseInclusionsSection, etc.) ── */}
          {expandableCards.map((card) => (
            <Card
              key={card.id}
              className="w-full rounded-2xl border border-solid border-[#eaebeb] bg-white shadow-none hover:border-[#0072de40] transition-colors cursor-pointer"
            >
              <CardContent className="flex items-center justify-between p-6 sm:p-8">
                <div className="flex items-start gap-6">
                  <img
                    className="w-11 h-11 flex-shrink-0"
                    alt="Section icon"
                    src={card.icon}
                  />
                  <div className="flex flex-col items-start gap-2">
                    <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
                      {card.title}
                    </p>
                    <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                <img
                  className="w-6 h-6 flex-shrink-0"
                  alt="Expand"
                  src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/frame.svg"
                />
              </CardContent>
            </Card>
          ))}

          {/* ── Certificate Card (Figma: CertificateCTASection) ── */}
          <Card className="w-full rounded-2xl border border-solid border-[#eaebeb] shadow-none bg-[linear-gradient(180deg,rgba(213,234,255,1)_0%,rgba(166,209,250,1)_100%)]">
            <CardContent className="flex flex-col items-start gap-8 p-6 sm:p-8">
              <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8">
                This is course Certificate
              </p>
              <div className="flex items-center gap-8 sm:gap-12 flex-wrap">
                <div
                  className="relative w-[240px] sm:w-[304px] h-[170px] sm:h-[215px] flex-shrink-0"
                  style={{
                    backgroundImage:
                      "url(https://c.animaapp.com/mnx5m6v2Jq3hjq/img/153711089-d61b13da-12e9-497a-a94e-845ffc895da1-1.png)",
                    backgroundSize: "100% 100%",
                  }}
                >
                  <img
                    className="absolute top-5 left-5 w-[34px] h-[42px]"
                    alt="Ics png"
                    src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/ics-png-3.png"
                  />
                </div>
                <div className="flex flex-col flex-1 min-w-[200px] items-start gap-4">
                  <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8">
                    Hey Learner, This Course is 100% Free
                  </p>
                  <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-[26px] py-3 bg-[#0072de] hover:bg-[#005bb5] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040]">
                    <span className="text-app-background [font-family:'Open_Sans',Helvetica] font-semibold text-lg tracking-[0] leading-6 whitespace-nowrap">
                      Join For Now
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ── FAQ Card (Figma: CourseFaqSection) ── */}
          <Card className="w-full rounded-2xl border border-solid border-[#eaebeb] bg-white shadow-none">
            <CardContent className="flex flex-col items-start gap-4 p-6 sm:p-8">
              <div className="flex items-center gap-4 w-full">
                <img
                  className="w-11 h-11 flex-shrink-0"
                  alt="Primary button"
                  src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/primary-button.svg"
                />
                <p className="[font-family:'Open_Sans',Helvetica] font-bold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
                  FAQ
                </p>
              </div>
              {/* FAQ Items — matches Figma CourseFaqSection exactly */}
              {faqItems.map((item) => (
                <div
                  key={item.num}
                  className="w-full flex items-center gap-2.5 px-4 sm:px-6 py-4 rounded-[16px_16px_0px_0px] bg-[#f7fafc] cursor-pointer hover:bg-[#eef4fb] transition-colors"
                >
                  <div className="flex w-12 h-12 items-center justify-center flex-shrink-0 bg-[#ecf5fd] rounded-lg border border-solid border-white">
                    <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-lg tracking-[0] leading-7 whitespace-nowrap">
                      {item.num}
                    </span>
                  </div>
                  <div className="flex-1 px-2">
                    <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-base sm:text-lg tracking-[0] leading-7">
                      {item.question}
                    </span>
                  </div>
                  <img
                    className="w-6 h-6 flex-shrink-0"
                    alt="Expand"
                    src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/frame.svg"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col">
        {/* Career Journey Banner */}
        <div
          className="w-full flex flex-col items-center justify-center py-16 md:py-28 px-4 sm:px-8"
          style={{
            background:
              "linear-gradient(0deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url(https://c.animaapp.com/mnx5m6v2Jq3hjq/img/frame-1321318002.png) 50% 50% / cover",
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
              <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 bg-[#117ade] hover:bg-[#0060c0] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040]">
                <span className="text-app-background [font-family:'Open_Sans',Helvetica] font-semibold text-base sm:text-lg tracking-[0] leading-6 whitespace-nowrap">
                  Enroll Now
                </span>
                <img className="w-6 h-6" alt="Frame" src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/frame-2.svg" />
              </Button>
              <Button
                variant="outline"
                className="h-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 bg-white hover:bg-gray-50 rounded-xl border border-solid border-[#8ab5dd]"
              >
                <span className="text-[#0072de] [font-family:'Open_Sans',Helvetica] font-semibold text-base sm:text-lg tracking-[0] leading-6 whitespace-nowrap">
                  Contact Us
                </span>
                <img className="w-6 h-6" alt="Frame" src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/frame-2.svg" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full bg-white px-4 sm:px-8 md:px-12 lg:px-[108px] py-12 md:py-24">
          <div className="w-full max-w-[1392px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
            {/* Logo & Description */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-start gap-6">
              <img
                className="w-[100px] h-[93px] md:w-[145px] md:h-[135px]"
                alt="Ics png"
                src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/ics-png-3-1.png"
              />
              <p className="max-w-[265px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
                Lorem ipsum dolor sit amet cons ectetur. Nunc ultrices dui sed
                et vulputate facilisi blandit dapibus.
              </p>
            </div>
            {/* Quick Links */}
            <div className="flex flex-col items-start gap-6">
              <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] w-full">
                Quick Links
              </p>
              <div className="flex flex-col items-start gap-4 w-full">
                {quickLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:text-[#0072de] hover:underline transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            {/* Company */}
            <div className="flex flex-col items-start gap-6">
              <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                Company
              </p>
              <div className="flex flex-col items-start gap-4">
                {companyLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:text-[#0072de] hover:underline transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            {/* Contact Information */}
            <div className="flex flex-col items-start gap-6">
              <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                Contact Information
              </p>
              <address className="flex flex-col items-start gap-4 not-italic">
                <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                  +91 98904 51547
                </span>
                <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                  ceo@idealizeer.com
                </span>
                <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                  Pune, Maharashtra, India
                </span>
              </address>
            </div>
            {/* Follow Us */}
            <div className="flex flex-col items-start gap-6">
              <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] w-full">
                Follow Us
              </p>
              <div className="flex items-center gap-4 sm:gap-6">
                {socialIcons.map((icon) => (
                  <img
                    key={icon.alt}
                    className={`${icon.className} object-cover`}
                    alt={icon.alt}
                    src={icon.src}
                  />
                ))}
              </div>
            </div>
          </div>
        </footer>

        {/* Copyright Bar */}
        <div className="w-full bg-white border-t border-[#cdcdcd]">
          <div className="w-full max-w-[1392px] mx-auto px-4 sm:px-8 md:px-[108px] py-6 flex flex-col items-center">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-base-02 text-sm text-center tracking-[0] leading-6 w-full">
              © Copyright 2026, All Rights Reserved by Idealizeer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
