import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";

// Quick Links data
const quickLinks = [
  { label: "Home" },
  { label: "All Courses" },
  { label: "Why Choose Us" },
  { label: "Blog" },
];

// Company links data
const companyLinks = [
  { label: "Privacy Policy" },
  { label: "Teams of Service" },
  { label: "Refund Policy" },
  { label: "FAQs" },
];

// Contact information data
const contactInfo = [
  { label: "+91 98904 51547" },
  { label: "ceo@idealizeer.com" },
  { label: "Pune, Maharashtra, India" },
];

// Social media icons data
const socialIcons = [
  {
    alt: "Instagram logo",
    src: "https://c.animaapp.com/mnwxwol3SDKgi5/img/instagram-logo-2016-svg-1.png",
    className: "w-8 h-8 object-cover",
  },
  {
    alt: "Linkedin icon svg",
    src: "https://c.animaapp.com/mnwxwol3SDKgi5/img/linkedin-icon-svg-1.png",
    className: "w-8 h-8 object-cover",
  },
  {
    alt: "Youtube logo",
    src: "https://c.animaapp.com/mnwxwol3SDKgi5/img/youtube-logo-1.png",
    className: "w-[46px] h-8 object-cover",
  },
];

export const CareerCallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex flex-col">
      {/* Hero CTA Banner */}
      <div
        className="w-full flex items-center justify-center py-28"
        style={{
          background:
            "linear-gradient(0deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url(https://c.animaapp.com/mnwxwol3SDKgi5/img/frame-1321318002.png) 50% 50% / cover",
          minHeight: "392px",
        }}
      >
        <div className="flex flex-col items-center gap-6 w-full max-w-[883px] px-4">
          {/* Heading and subtitle */}
          <div className="flex flex-col items-center gap-4 w-full">
            <h1 className="w-full [font-family:'Open_Sans',Helvetica] font-semibold text-white text-[44px] text-center tracking-[-0.88px] leading-[52px]">
              Start Your Career Journey Today
            </h1>
            <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7">
              Don&apos;t wait. Upgrade your skills and secure your future now.
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-[#117ade] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] hover:bg-[#0f6bc4]">
              <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-lg tracking-[0] leading-6 whitespace-nowrap">
                Enroll Now
              </span>
              <img
                className="w-6 h-6"
                alt="Frame"
                src="https://c.animaapp.com/mnwxwol3SDKgi5/img/frame.svg"
              />
            </Button>
            <Button
              variant="outline"
              className="h-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-white rounded-xl border border-solid border-[#8ab5dd] hover:bg-gray-50"
            >
              <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-lg tracking-[0] leading-6 whitespace-nowrap">
                Contact Us
              </span>
              <img
                className="w-6 h-6"
                alt="Frame"
                src="https://c.animaapp.com/mnwxwol3SDKgi5/img/frame.svg"
              />
            </Button>
          </div>
        </div>
      </div>
      {/* Footer Content */}
      <footer className="w-full bg-white">
        <div className="w-full flex justify-center px-4 md:px-8 lg:px-[108px] py-12 lg:py-24">
          <div className="w-full max-w-[1392px] flex flex-row items-start gap-8 flex-wrap">
            {/* Logo and description */}
            <div className="flex flex-col items-start gap-6 flex-shrink-0 w-[265px]">
              <img
                className="w-[145px] h-[135px]"
                alt="Ics png"
                src="https://c.animaapp.com/mnwxwol3SDKgi5/img/ics-png-3.png"
              />
              <p className="w-[265px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
                Lorem ipsum dolor sit amet cons ectetur. Nunc ultrices dui sed
                et vulputate facilisi blandit dapibus.
              </p>
            </div>
            {/* Quick Links */}
            <div className="flex flex-col items-start gap-6 flex-shrink-0 w-[172px] mt-5">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px]">
                Quick Links
              </h3>
              <nav className="flex flex-col items-start gap-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            {/* Company */}
            <div className="flex flex-col items-start gap-6 flex-shrink-0 mt-5">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                Company
              </h3>
              <nav className="flex flex-col items-start gap-4">
                {companyLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            {/* Contact Information */}
            <div className="flex flex-col items-start gap-6 flex-shrink-0 mt-5">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                Contact Information
              </h3>
              <address className="flex flex-col items-start gap-4 not-italic">
                {contactInfo.map((item, index) => (
                  <span
                    key={index}
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap"
                  >
                    {item.label}
                  </span>
                ))}
              </address>
            </div>
            {/* Follow Us */}
            <div className="flex flex-col items-start gap-6 flex-shrink-0 w-[156px] mt-5">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px]">
                Follow Us
              </h3>
              <div className="flex items-center gap-6">
                {socialIcons.map((icon, index) => (
                  <a key={index} href="#" aria-label={icon.alt}>
                    <img
                      className={icon.className}
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Copyright bar */}
        <div className="w-full flex justify-center px-4 md:px-8 lg:px-[108px]">
          <div className="w-full max-w-[1392px] flex flex-col items-center gap-[39px]">
            <Separator className="bg-[#cdcdcd]" />
            <p className="w-full font-regular-13px font-[number:var(--regular-13px-font-weight)] text-base-02 text-[length:var(--regular-13px-font-size)] text-center tracking-[var(--regular-13px-letter-spacing)] leading-[var(--regular-13px-line-height)] [font-style:var(--regular-13px-font-style)] pb-8">
              © Copyright 2026, All Rights Reserved by Idealizeer
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
