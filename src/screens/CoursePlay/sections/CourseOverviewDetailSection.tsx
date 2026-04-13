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
    title: "What You&#39;ll Learn",
    subtitle: "5 key objectives",
  },
  {
    id: "this-course-includes",
    icon: "https://c.animaapp.com/mnx5m6v2Jq3hjq/img/primary-button-1.svg",
    title: "This course includes",
    subtitle: "8 key objectives",
  },
  {
    id: "course-structure",
    icon: "https://c.animaapp.com/mnx5m6v2Jq3hjq/img/primary-button.svg",
    title: "Course Structure",
    subtitle: "22 comprehensive modules",
  },
  {
    id: "skill-level",
    icon: "https://c.animaapp.com/mnx5m6v2Jq3hjq/img/primary-button.svg",
    title: "Skill Level",
    subtitle: "who this Course is for",
  },
];

const faqItems = [
  { num: "01", question: "What is the Research Writing & AI class?" },
  { num: "02", question: "How to learn Research Writing & AI?" },
  { num: "03", question: "How to learn Research Writing & AI step by step?" },
  { num: "04", question: "Is Research Writing & AI Course Certified?" },
];

const quickLinks = ["Home", "All Courses", "Why Choose Us", "Blog"];
const companyLinks = [
  "Privacy Policy",
  "Teams of Service",
  "Refund Policy",
  "FAQs",
];

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
    <div className="flex flex-col w-full items-start gap-28">
      {/* Main content area */}
      <div className="flex items-start w-full">
        <div className="w-16 h-6 bg-white flex-shrink-0" />
        <div className="flex flex-col items-start gap-8 flex-1 max-w-[865px]">
          {/* Tab Navigation */}
          <nav className="flex items-center gap-[22px] bg-white border-b border-[#eaebeb] w-full">
            {tabItems.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center justify-center gap-2.5 p-2.5 flex-shrink-0 ${
                  activeTab === tab.id
                    ? "bg-[#e8f1fc] border-b-[3px] border-[#0072de]"
                    : "border-b-[3px] border-transparent"
                }`}
              >
                <span
                  className={`[font-family:'Open_Sans',Helvetica] font-semibold text-xl tracking-[0] leading-8 whitespace-nowrap ${
                    activeTab === tab.id ? "text-[#0072de]" : "text-black"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </nav>
          {/* Content Cards */}
          <div className="flex items-start gap-2.5 p-8 w-full bg-white rounded-2xl border border-solid border-[#eaebeb]">
            <div className="flex flex-col w-full items-start gap-4">
              {/* Course Overview Card */}
              <Card className="w-full rounded-2xl border border-solid border-[#eaebeb] bg-white shadow-none">
                <CardContent className="flex flex-col items-start gap-8 p-8">
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
              {/* Expandable Section Cards */}
              {expandableCards.map((card) => (
                <Card
                  key={card.id}
                  className="w-full rounded-2xl border border-solid border-[#eaebeb] bg-white shadow-none"
                >
                  <CardContent className="flex flex-col items-start gap-8 p-8">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-start gap-6">
                        <img
                          className="w-11 h-11 flex-shrink-0"
                          alt="Primary button"
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
                        alt="Frame"
                        src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/frame.svg"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Certificate Card */}
              <Card className="w-full rounded-2xl border border-solid border-[#eaebeb] shadow-none bg-[linear-gradient(180deg,rgba(213,234,255,1)_0%,rgba(166,209,250,1)_100%)]">
                <CardContent className="flex flex-col items-start gap-8 p-8">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-start gap-2">
                        <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
                          This is course Certificate
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-12">
                    <div
                      className="relative w-[304px] h-[215px] flex-shrink-0"
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
                    <div className="flex flex-col w-80 items-start gap-4">
                      <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 w-full">
                        Hey Learner, This Course is 100% Free
                      </p>
                      <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-[26px] py-3 bg-[#0072de] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] hover:bg-[#0060c0]">
                        <span className="text-app-background [font-family:'Open_Sans',Helvetica] font-semibold text-lg tracking-[0] leading-6 whitespace-nowrap">
                          Join For Now
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* FAQ Card */}
              <Card className="w-full rounded-2xl border border-solid border-[#eaebeb] bg-white shadow-none">
                <CardContent className="flex flex-col items-start gap-4 p-8">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-start gap-6">
                      <img
                        className="w-11 h-11 flex-shrink-0"
                        alt="Primary button"
                        src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/primary-button.svg"
                      />
                      <div className="flex flex-col items-start gap-2">
                        <p className="[font-family:'Open_Sans',Helvetica] font-bold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
                          FAQ
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Items */}
                  {faqItems.map((item) => (
                    <div
                      key={item.num}
                      className="flex items-center gap-2.5 px-6 py-4 w-full rounded-[16px_16px_0px_0px]"
                    >
                      <div className="flex items-center gap-6 flex-1 bg-[#f7fafc]">
                        <div className="flex w-12 h-12 items-center justify-center gap-2.5 px-2 py-4 bg-[#ecf5fd] rounded-lg border border-solid border-white flex-shrink-0">
                          <span className="text-[#0072de] text-lg leading-7 [font-family:'Open_Sans',Helvetica] font-semibold tracking-[0] whitespace-nowrap">
                            {item.num}
                          </span>
                        </div>
                        <p className="text-black leading-7 [font-family:'Open_Sans',Helvetica] font-semibold text-lg tracking-[0] whitespace-nowrap">
                          {item.question}
                        </p>
                      </div>
                      <img
                        className="w-6 h-6 flex-shrink-0"
                        alt="Frame"
                        src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/frame.svg"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="w-full flex flex-col">
        {/* Career Journey Banner */}
        <div
          className="w-full flex flex-col items-center justify-center py-28 px-8"
          style={{
            background:
              "linear-gradient(0deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url(https://c.animaapp.com/mnx5m6v2Jq3hjq/img/frame-1321318002.png) 50% 50% / cover",
            minHeight: "392px",
          }}
        >
          <div className="flex flex-col items-center gap-6 max-w-[883px] w-full">
            <div className="flex flex-col items-center gap-4 w-full">
              <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-[44px] text-center tracking-[-0.88px] leading-[52px] w-full">
                Start Your Career Journey Today
              </h2>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7 w-full">
                Don&apos;t wait. Upgrade your skills and secure your future now.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-[#117ade] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] hover:bg-[#0060c0]">
                <span className="text-app-background [font-family:'Open_Sans',Helvetica] font-semibold text-lg tracking-[0] leading-6 whitespace-nowrap">
                  Enroll Now
                </span>
                <img
                  className="w-6 h-6"
                  alt="Frame"
                  src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/frame-2.svg"
                />
              </Button>
              <Button
                variant="outline"
                className="h-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-white rounded-xl border border-solid border-[#8ab5dd] hover:bg-gray-50"
              >
                <span className="text-[#0072de] [font-family:'Open_Sans',Helvetica] font-semibold text-lg tracking-[0] leading-6 whitespace-nowrap">
                  Contact Us
                </span>
                <img
                  className="w-6 h-6"
                  alt="Frame"
                  src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/frame-2.svg"
                />
              </Button>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="w-full bg-white px-[108px] py-24 flex flex-col items-center gap-2.5">
          <div className="w-full max-w-[1392px] flex items-start justify-between">
            {/* Logo & Description */}
            <div className="flex flex-col items-start gap-6 max-w-[265px]">
              <img
                className="w-[145px] h-[135px]"
                alt="Ics png"
                src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/ics-png-3-1.png"
              />
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
                Lorem ipsum dolor sit amet cons ectetur. Nunc ultrices dui sed
                et vulputate facilisi blandit dapibus.
              </p>
            </div>
            {/* Quick Links */}
            <div className="flex flex-col items-start gap-6 w-[172px]">
              <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] w-full">
                Quick Links
              </p>
              <div className="flex flex-col items-start gap-4 w-full">
                {quickLinks.map((link) => (
                  <div key={link} className="inline-flex items-center gap-2.5">
                    <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                      {link}
                    </span>
                  </div>
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
                  <div key={link} className="inline-flex items-center gap-2.5">
                    <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                      {link}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Contact Information */}
            <div className="flex flex-col items-start gap-6">
              <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                Contact Information
              </p>
              <div className="flex flex-col items-start gap-4">
                <div className="inline-flex items-center gap-2.5">
                  <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                    +91 98904 51547
                  </span>
                </div>
                <div className="inline-flex items-center gap-2.5">
                  <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                    ceo@idealizeer.com
                  </span>
                </div>
                <div className="inline-flex items-center gap-2.5">
                  <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                    Pune, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>
            {/* Follow Us */}
            <div className="flex flex-col items-start gap-6 w-[156px]">
              <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] w-full">
                Follow Us
              </p>
              <div className="flex items-center gap-6">
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
          <div className="max-w-[1392px] mx-auto px-[108px] py-6 flex flex-col items-center gap-[39px]">
            <p className="font-regular-13px font-[number:var(--regular-13px-font-weight)] text-base-02 text-[length:var(--regular-13px-font-size)] text-center tracking-[var(--regular-13px-letter-spacing)] leading-[var(--regular-13px-line-height)] [font-style:var(--regular-13px-font-style)] w-full">
              © Copyright 2026, All Rights Reserved by Idealizeer
            </p>
          </div>
        </div>
        {/* Scroll to top button */}
        <div className="flex justify-end px-8 pb-4">
          <img
            className="w-[60px] h-[60px]"
            alt="Frame"
            src="https://c.animaapp.com/mnx5m6v2Jq3hjq/img/frame-73.svg"
          />
        </div>
      </div>
    </div>
  );
};
