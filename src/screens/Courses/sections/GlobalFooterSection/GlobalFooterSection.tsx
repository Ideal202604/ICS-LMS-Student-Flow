import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const quickLinks = ["Home", "All Courses", "Why Choose Us", "Blog"];
const companyLinks = ["Privacy Policy", "Teams of Service", "Refund Policy", "FAQs"];
const contactInfo = ["+91 98904 51547", "ceo@idealizeer.com", "Pune, Maharashtra, India"];

const socialIcons = [
  {
    alt: "Instagram logo",
    src: "https://c.animaapp.com/mnmyaijxgewU4q/img/instagram-logo-2016-svg-1.png",
    className: "w-8 h-8 object-cover",
  },
  {
    alt: "Linkedin icon svg",
    src: "https://c.animaapp.com/mnmyaijxgewU4q/img/linkedin-icon-svg-1.png",
    className: "w-8 h-8 object-cover",
  },
  {
    alt: "Youtube logo",
    src: "https://c.animaapp.com/mnmyaijxgewU4q/img/youtube-logo-1.png",
    className: "w-[46px] h-8 object-cover",
  },
];

export const GlobalFooterSection = (): JSX.Element => {
  const [enrollClicked, setEnrollClicked] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);

  const handleEnroll = () => {
    setEnrollClicked(true);
    setTimeout(() => setEnrollClicked(false), 2500);
  };

  const handleContact = () => {
    setContactClicked(true);
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setContactClicked(false), 2500);
  };

  const handleNavLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full flex flex-col bg-white">
      {/* CTA Banner Section */}
      <section
        className="w-full flex flex-col items-center justify-center py-20 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12"
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.35) 100%), url(https://c.animaapp.com/mnmyaijxgewU4q/img/frame-1321318002.png) center/cover",
          minHeight: "420px",
        }}
      >
        <div className="flex flex-col items-center gap-8 md:gap-10 max-w-[900px] w-full">
          {/* Heading and description */}
          <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
            <h2 className="[font-family:'Open_Sans',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-5xl text-center tracking-tight leading-tight md:leading-[1.2]">
              Ready to Transform Your Career?
            </h2>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-base md:text-lg text-center tracking-[-0.14px] leading-7 md:leading-8 max-w-[700px]">
              Join thousands of students already learning from industry experts. Start your journey today with our comprehensive courses.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
            <Button
              onClick={handleEnroll}
              className="h-12 md:h-13 inline-flex items-center justify-center gap-3 px-7 md:px-8 py-3 bg-[#0072de] rounded-lg border border-[#0072de] shadow-[0px_4px_16px_rgba(0,72,222,0.3)] hover:bg-[#005bbf] transition-all active:scale-95 [font-family:'Open_Sans',Helvetica]"
            >
              <span className="font-semibold text-white text-base md:text-lg tracking-[-0.14px] leading-6 whitespace-nowrap">
                {enrollClicked ? "Enrolled! 🎉" : "Enroll Now"}
              </span>
              {!enrollClicked && (
                <img className="w-6 h-6" alt="Arrow" src="https://c.animaapp.com/mnmyaijxgewU4q/img/frame-2.svg" />
              )}
            </Button>

            <Button
              variant="outline"
              onClick={handleContact}
              className="h-12 md:h-13 inline-flex items-center justify-center gap-3 px-7 md:px-8 py-3 bg-white rounded-lg border border-white shadow-[0px_4px_16px_rgba(255,255,255,0.2)] hover:bg-gray-50 transition-all active:scale-95 [font-family:'Open_Sans',Helvetica]"
            >
              <span className="font-semibold text-[#0072de] text-base md:text-lg tracking-[-0.14px] leading-6 whitespace-nowrap">
                {contactClicked ? "Contacting..." : "Contact Us"}
              </span>
              {!contactClicked && (
                <img className="w-6 h-6" alt="Arrow" src="https://c.animaapp.com/mnmyaijxgewU4q/img/frame-2.svg" />
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Links Section */}
      <section className="w-full bg-white px-4 sm:px-6 md:px-[60px] lg:px-[108px] py-16 md:py-24">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
            {/* Logo + Description */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-start gap-6">
              <img
                className="w-20 h-[93px] md:w-24 md:h-[111px]"
                alt="ICS Logo"
                src="https://c.animaapp.com/mnmyaijxgewU4q/img/ics-png-3.png"
              />
              <p className="max-w-[280px] text-[#55596a] text-sm md:text-base leading-6 md:leading-7 [font-family:'Open_Sans',Helvetica] font-normal tracking-[-0.14px]">
                Empower your learning journey with expert-led courses and industry-ready skills.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-start gap-6">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-bold text-[#1a365d] text-lg tracking-tight leading-7 w-full">
                Quick Links
              </h3>
              <nav className="flex flex-col items-start gap-4 w-full">
                {quickLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    onClick={handleNavLink}
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-[#55596a] text-base tracking-[-0.14px] leading-6 whitespace-nowrap hover:text-[#0072de] transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Company */}
            <div className="flex flex-col items-start gap-6">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-bold text-[#1a365d] text-lg tracking-tight leading-7 whitespace-nowrap">
                Company
              </h3>
              <nav className="flex flex-col items-start gap-4 w-full">
                {companyLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-[#55596a] text-base tracking-[-0.14px] leading-6 whitespace-nowrap hover:text-[#0072de] transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col items-start gap-6">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-bold text-[#1a365d] text-lg tracking-tight leading-7 whitespace-nowrap">
                Contact
              </h3>
              <address className="flex flex-col items-start gap-4 not-italic">
                {contactInfo.map((info) => (
                  <span
                    key={info}
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-[#55596a] text-base tracking-[-0.14px] leading-6"
                  >
                    {info}
                  </span>
                ))}
              </address>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col items-start gap-6">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-bold text-[#1a365d] text-lg tracking-tight leading-7 w-full">
                Follow Us
              </h3>
              <div className="flex items-center gap-6">
                {socialIcons.map((icon) => (
                  <a
                    key={icon.alt}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-label={icon.alt}
                    className="transition-transform hover:scale-110 active:scale-95"
                  >
                    <img className={`${icon.className} hover:opacity-75 transition-opacity`} alt={icon.alt} src={icon.src} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <Separator className="bg-[#e5e7eb] my-8 md:my-12" />
          <div className="py-6 flex items-center justify-between relative px-0">
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#9ca3af] text-sm md:text-base tracking-[-0.14px] leading-6 text-center flex-1">
              © 2024-2026 ICS Learning System. All Rights Reserved.
            </p>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center transition-all hover:scale-110 active:scale-95 rounded-full hover:bg-[#e9f6ff]"
              aria-label="Scroll to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img className="w-14 h-14" alt="Scroll to top" src="https://c.animaapp.com/mnmyaijxgewU4q/img/frame-73.svg" />
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};
