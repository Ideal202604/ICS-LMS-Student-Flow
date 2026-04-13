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
    src: "https://c.animaapp.com/mnx1h5hfns5K3g/img/instagram-logo-2016-svg-1.png",
    className: "w-8 h-8 object-cover",
  },
  {
    alt: "Linkedin icon svg",
    src: "https://c.animaapp.com/mnx1h5hfns5K3g/img/linkedin-icon-svg-1.png",
    className: "w-8 h-8 object-cover",
  },
  {
    alt: "Youtube logo",
    src: "https://c.animaapp.com/mnx1h5hfns5K3g/img/youtube-logo-1.png",
    className: "w-[46px] h-8 object-cover",
  },
];

export const CareerJourneyHighlightSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex flex-col">
      {/* Hero / CTA Banner */}
      <div
        className="w-full flex items-center justify-center py-28"
        style={{
          background:
            "linear-gradient(0deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url(https://c.animaapp.com/mnx1h5hfns5K3g/img/frame-1321318002.png) 50% 50% / cover",
          minHeight: "392px",
        }}
      >
        <div className="flex flex-col items-center gap-6 max-w-[883px] w-full px-4">
          {/* Title and subtitle */}
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-[44px] text-center tracking-[-0.88px] leading-[52px] w-full">
              Start Your Career Journey Today
            </h2>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7 w-full">
              Don&apos;t wait. Upgrade your skills and secure your future now.
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {/* Enroll Now button */}
            <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-[#117ade] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] hover:bg-[#0f6bc4]">
              <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-lg tracking-[0] leading-6 whitespace-nowrap">
                Enroll Now
              </span>
              <img
                className="w-6 h-6"
                alt="Frame"
                src="https://c.animaapp.com/mnx1h5hfns5K3g/img/frame.svg"
              />
            </Button>
            {/* Contact Us button */}
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
                src="https://c.animaapp.com/mnx1h5hfns5K3g/img/frame.svg"
              />
            </Button>
          </div>
        </div>
      </div>
      {/* Footer Content */}
      <footer className="w-full bg-white">
        <div className="w-full flex flex-col items-center px-4 md:px-[108px] py-12 md:py-24">
          <div className="w-full max-w-[1392px] flex flex-row flex-wrap items-start justify-between gap-8">
            {/* Logo and description */}
            <div className="flex flex-col items-start gap-6 max-w-[265px]">
              <img
                className="w-[145px] h-[135px]"
                alt="Ics png"
                src="https://c.animaapp.com/mnx1h5hfns5K3g/img/ics-png-3.png"
              />
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
                Lorem ipsum dolor sit amet cons ectetur. Nunc ultrices dui sed
                et vulputate facilisi blandit dapibus.
              </p>
            </div>
            {/* Quick Links */}
            <div className="flex flex-col items-start gap-6 min-w-[172px]">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px]">
                Quick Links
              </h3>
              <nav className="flex flex-col items-start gap-4">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href="#"
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            {/* Company */}
            <div className="flex flex-col items-start gap-6 min-w-[172px]">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                Company
              </h3>
              <nav className="flex flex-col items-start gap-4">
                {companyLinks.map((link) => (
                  <a
                    key={link.label}
                    href="#"
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            {/* Contact Information */}
            <div className="flex flex-col items-start gap-6">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                Contact Information
              </h3>
              <div className="flex flex-col items-start gap-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Follow Us */}
            <div className="flex flex-col items-start gap-6 w-[156px]">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px]">
                Follow Us
              </h3>
              <div className="flex items-center gap-6">
                {socialIcons.map((icon) => (
                  <a key={icon.alt} href="#" aria-label={icon.alt}>
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
        <div className="w-full max-w-[1392px] mx-auto px-4">
          <Separator className="bg-[#cdcdcd]" />
          <div className="py-8 text-center">
            <p className="font-regular-13px font-[number:var(--regular-13px-font-weight)] text-base-02 text-[length:var(--regular-13px-font-size)] tracking-[var(--regular-13px-letter-spacing)] leading-[var(--regular-13px-line-height)] [font-style:var(--regular-13px-font-style)]">
              © Copyright 2026, All Rights Reserved by Idealizeer
            </p>
          </div>
        </div>
      </footer>
      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-[60px] h-[60px] rounded-full overflow-hidden focus:outline-none"
          aria-label="Scroll to top"
        >
          <img
            className="w-full h-full"
            alt="Frame"
            src="https://c.animaapp.com/mnx1h5hfns5K3g/img/frame-73.svg"
          />
        </button>
      </div>
    </section>
  );
};
