import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

// Tab navigation data
const tabs = [
  { id: "about", label: "About" },
  { id: "recently-asses", label: "Recently Asses" },
  { id: "discussions", label: "Discussions" },
  { id: "bookmarks", label: "Bookmarks" },
  { id: "certificates", label: "Certificates" },
];

// Expandable section cards data
const expandableSections = [
  {
    id: "what-youll-learn",
    icon: "https://c.animaapp.com/mnx1pxe5WuKivI/img/primary-button-4.svg",
    title: "What You'll Learn",
    subtitle: "5 key objectives",
  },
  {
    id: "course-includes",
    icon: "https://c.animaapp.com/mnx1pxe5WuKivI/img/primary-button-4.svg",
    title: "This course includes",
    subtitle: "8 key objectives",
  },
  {
    id: "course-structure",
    icon: "https://c.animaapp.com/mnx1pxe5WuKivI/img/primary-button.svg",
    title: "Course Structure",
    subtitle: "22 comprehensive modules",
  },
  {
    id: "skill-level",
    icon: "https://c.animaapp.com/mnx1pxe5WuKivI/img/primary-button.svg",
    title: "Skill Level",
    subtitle: "who this Course is for",
  },
];

// FAQ data
const faqItems = [
  { id: "01", question: "What is the Research Writing & AI class?" },
  { id: "02", question: "How to learn Research Writing & AI?" },
  { id: "03", question: "How to learn Research Writing & AI step by step?" },
  { id: "04", question: "Is Research Writing & AI Course Certified?" },
];

// Quick links data
const quickLinks = ["Home", "All Courses", "Why Choose Us", "Blog"];

// Company links data
const companyLinks = [
  "Privacy Policy",
  "Teams of Service",
  "Refund Policy",
  "FAQs",
];

// Contact information data
const contactInfo = [
  "+91 98904 51547",
  "ceo@idealizeer.com",
  "Pune, Maharashtra, India",
];

// Social media icons data
const socialIcons = [
  {
    alt: "Instagram logo",
    src: "https://c.animaapp.com/mnx1pxe5WuKivI/img/instagram-logo-2016-svg-1.png",
    className: "w-8 h-8",
  },
  {
    alt: "Linkedin icon svg",
    src: "https://c.animaapp.com/mnx1pxe5WuKivI/img/linkedin-icon-svg-1.png",
    className: "w-8 h-8",
  },
  {
    alt: "Youtube logo",
    src: "https://c.animaapp.com/mnx1pxe5WuKivI/img/youtube-logo-1.png",
    className: "w-[46px] h-8",
  },
];

export const CourseOverviewDetailSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="flex flex-col w-full items-start gap-28">
      {/* Main content section */}
      <div className="flex items-start w-full">
        <div className="w-16 h-6 bg-white flex-shrink-0" />
        <div className="flex flex-col items-start gap-8 flex-1 max-w-[865px]">
          {/* Tab Navigation */}
          <nav className="flex items-center gap-[22px] bg-white border-b border-[#eaebeb] w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center justify-center gap-2.5 p-2.5 flex-shrink-0 cursor-pointer ${
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
          {/* Content Cards Container */}
          <div className="flex items-start gap-2.5 p-8 w-full bg-white rounded-2xl border border-solid border-[#eaebeb]">
            <div className="flex flex-col w-full items-start gap-4">
              {/* Course Overview Card */}
              <Card className="w-full bg-white rounded-2xl border border-solid border-[#eaebeb] shadow-none">
                <CardContent className="flex flex-col items-start gap-8 p-8">
                  <div className="flex items-start gap-6 w-full">
                    <img
                      className="w-11 h-11 flex-shrink-0"
                      alt="Primary button"
                      src="https://c.animaapp.com/mnx1pxe5WuKivI/img/primary-button-2.svg"
                    />
                    <div className="flex flex-col items-start gap-2">
                      <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
                        Course Overview
                      </h2>
                      <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                        Everything you need to know about this course
                      </p>
                    </div>
                  </div>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
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
              {expandableSections.map((section) => (
                <Card
                  key={section.id}
                  className="w-full bg-white rounded-2xl border border-solid border-[#eaebeb] shadow-none"
                >
                  <CardContent className="flex items-center justify-between p-8">
                    <div className="flex items-start gap-6">
                      <img
                        className="w-11 h-11 flex-shrink-0"
                        alt="Primary button"
                        src={section.icon}
                      />
                      <div className="flex flex-col items-start gap-2">
                        <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
                          {section.title}
                        </h3>
                        <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                          {section.subtitle}
                        </p>
                      </div>
                    </div>
                    <img
                      className="w-6 h-6 flex-shrink-0"
                      alt="Frame"
                      src="https://c.animaapp.com/mnx1pxe5WuKivI/img/frame.svg"
                    />
                  </CardContent>
                </Card>
              ))}

              {/* Certificate Card */}
              <Card className="w-full rounded-2xl border border-solid border-[#eaebeb] shadow-none bg-[linear-gradient(180deg,rgba(213,234,255,1)_0%,rgba(166,209,250,1)_100%)]">
                <CardContent className="flex flex-col items-start gap-8 p-8">
                  <div className="flex items-center w-full">
                    <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
                      This is course Certificate
                    </h3>
                  </div>
                  <div className="flex items-center gap-12">
                    <div
                      className="relative w-[304px] h-[215px] flex-shrink-0"
                      style={{
                        backgroundImage:
                          "url(https://c.animaapp.com/mnx1pxe5WuKivI/img/153711089-d61b13da-12e9-497a-a94e-845ffc895da1-1.png)",
                        backgroundSize: "100% 100%",
                      }}
                    >
                      <img
                        className="absolute top-5 left-5 w-[34px] h-[42px]"
                        alt="Ics png"
                        src="https://c.animaapp.com/mnx1pxe5WuKivI/img/ics-png-3.png"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-4 w-80">
                      <p className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-8">
                        Hey Learner, This Course is 100% Free
                      </p>
                      <Button className="h-auto bg-[#0072de] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] px-[26px] py-3 hover:bg-[#0060c0]">
                        <span className="text-app-background [font-family:'Open_Sans',Helvetica] font-semibold text-lg tracking-[0] leading-6 whitespace-nowrap">
                          Join For Now
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* FAQ Card */}
              <Card className="w-full bg-white rounded-2xl border border-solid border-[#eaebeb] shadow-none">
                <CardContent className="flex flex-col items-start gap-4 p-8">
                  {/* FAQ Header */}
                  <div className="flex items-center gap-6 w-full">
                    <img
                      className="w-11 h-11 flex-shrink-0"
                      alt="Primary button"
                      src="https://c.animaapp.com/mnx1pxe5WuKivI/img/primary-button.svg"
                    />
                    <h3 className="[font-family:'Open_Sans',Helvetica] font-bold text-black text-2xl tracking-[0] leading-8 whitespace-nowrap">
                      FAQ
                    </h3>
                  </div>
                  {/* FAQ Items */}
                  {faqItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-2.5 px-6 py-4 w-full rounded-[16px_16px_0px_0px] cursor-pointer"
                    >
                      <div className="flex items-center gap-6 flex-1 bg-[#f7fafc]">
                        <div className="flex w-12 h-12 items-center justify-center bg-[#ecf5fd] rounded-lg border border-solid border-white flex-shrink-0">
                          <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-lg tracking-[0] leading-7">
                            {item.id}
                          </span>
                        </div>
                        <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                          {item.question}
                        </span>
                      </div>
                      <img
                        className="w-6 h-6 flex-shrink-0"
                        alt="Frame"
                        src="https://c.animaapp.com/mnx1pxe5WuKivI/img/frame.svg"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section: CTA Banner + Footer */}
      <div className="w-full flex flex-col">
        {/* CTA Banner */}
        <section
          className="w-full flex items-center justify-center py-28"
          style={{
            background:
              "linear-gradient(0deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url(https://c.animaapp.com/mnx1pxe5WuKivI/img/frame-1321318002.png) 50% 50% / cover",
          }}
        >
          <div className="flex flex-col items-center gap-6 max-w-[883px] w-full px-4">
            <div className="flex flex-col items-center gap-4 w-full">
              <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-[44px] text-center tracking-[-0.88px] leading-[52px]">
                Start Your Career Journey Today
              </h2>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7">
                Don&apos;t wait. Upgrade your skills and secure your future now.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Button className="h-auto bg-[#117ade] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] px-8 py-3 hover:bg-[#0f6bc4]">
                <span className="text-app-background [font-family:'Open_Sans',Helvetica] font-semibold text-lg tracking-[0] leading-6 whitespace-nowrap">
                  Enroll Now
                </span>
                <img
                  className="w-6 h-6"
                  alt="Frame"
                  src="https://c.animaapp.com/mnx1pxe5WuKivI/img/frame-2.svg"
                />
              </Button>
              <Button
                variant="outline"
                className="h-auto bg-white rounded-xl border border-solid border-[#8ab5dd] px-8 py-3 hover:bg-gray-50"
              >
                <span className="text-[#0072de] [font-family:'Open_Sans',Helvetica] font-semibold text-lg tracking-[0] leading-6 whitespace-nowrap">
                  Contact Us
                </span>
                <img
                  className="w-6 h-6"
                  alt="Frame"
                  src="https://c.animaapp.com/mnx1pxe5WuKivI/img/frame-2.svg"
                />
              </Button>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="w-full bg-white">
          {/* Footer Links Section */}
          <div className="w-full flex items-start justify-between px-[108px] py-24 gap-8">
            {/* Logo & Description */}
            <div className="flex flex-col items-start gap-6">
              <img
                className="w-[145px] h-[135px]"
                alt="Ics png"
                src="https://c.animaapp.com/mnx1pxe5WuKivI/img/ics-png-3-1.png"
              />
              <p className="w-[265px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
                Lorem ipsum dolor sit amet cons ectetur. Nunc ultrices dui sed
                et vulputate facilisi blandit dapibus.
              </p>
            </div>
            {/* Quick Links */}
            <div className="flex flex-col items-start gap-6 w-[172px]">
              <h4 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px]">
                Quick Links
              </h4>
              <div className="flex flex-col items-start gap-4">
                {quickLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            {/* Company */}
            <div className="flex flex-col items-start gap-6">
              <h4 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                Company
              </h4>
              <div className="flex flex-col items-start gap-4">
                {companyLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            {/* Contact Information */}
            <div className="flex flex-col items-start gap-6">
              <h4 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                Contact Information
              </h4>
              <div className="flex flex-col items-start gap-4">
                {contactInfo.map((info) => (
                  <p
                    key={info}
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap"
                  >
                    {info}
                  </p>
                ))}
              </div>
            </div>
            {/* Follow Us */}
            <div className="flex flex-col items-start gap-6 w-[156px]">
              <h4 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px]">
                Follow Us
              </h4>
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
          {/* Copyright Bar */}
          <div className="w-full border-t border-[#cdcdcd] py-6 px-[108px]">
            <p className="font-regular-13px font-[number:var(--regular-13px-font-weight)] text-base-02 text-[length:var(--regular-13px-font-size)] text-center tracking-[var(--regular-13px-letter-spacing)] leading-[var(--regular-13px-line-height)] [font-style:var(--regular-13px-font-style)]">
              © Copyright 2026, All Rights Reserved by Idealizeer
            </p>
          </div>
        </footer>
        {/* Scroll to top button */}
        <div className="flex justify-end px-[108px] pb-6">
          <img
            className="w-[60px] h-[60px]"
            alt="Frame"
            src="https://c.animaapp.com/mnx1pxe5WuKivI/img/frame-73.svg"
          />
        </div>
      </div>
    </div>
  );
};
