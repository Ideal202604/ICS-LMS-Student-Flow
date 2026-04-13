import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";

const quickLinks = [{ label: "Home" }, { label: "All Courses" }, { label: "Why Choose Us" }, { label: "Blog" }];
const companyLinks = [{ label: "Privacy Policy" }, { label: "Teams of Service" }, { label: "Refund Policy" }, { label: "FAQs" }];
const contactInfo = [{ label: "+91 98904 51547" }, { label: "ceo@idealizeer.com" }, { label: "Pune, Maharashtra, India" }];
const socialIcons = [
  { alt: "Instagram logo", src: "https://c.animaapp.com/mnwpw3l9jXfMum/img/instagram-logo-2016-svg-1-1.png", className: "w-8 h-8 object-cover" },
  { alt: "Linkedin icon svg", src: "https://c.animaapp.com/mnwpw3l9jXfMum/img/linkedin-icon-svg-1-1.png", className: "w-8 h-8 object-cover" },
  { alt: "Youtube logo", src: "https://c.animaapp.com/mnwpw3l9jXfMum/img/youtube-logo-1-1.png", className: "w-[46px] h-8 object-cover" },
];

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex flex-col">
      {/* Hero CTA Banner */}
      <div
        className="w-full flex flex-col items-center justify-center py-28 px-4"
        style={{
          background:
            "linear-gradient(0deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url(https://c.animaapp.com/mnwpw3l9jXfMum/img/frame-1321318002-1.png) 50% 50% / cover",
          minHeight: "392px",
        }}
      >
        <div className="flex flex-col items-center gap-6 max-w-[883px] w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-[44px] text-center tracking-[-0.88px] leading-[52px] w-full">
              Start Your Career Journey Today
            </h2>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7 w-full">
              Don&#39;t wait. Upgrade your skills and secure your future now.
            </p>
          </div>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-[#117ade] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] hover:bg-[#0f6bc7]">
              <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-lg tracking-[0] leading-6 whitespace-nowrap">
                Enroll Now
              </span>
              <img
                className="w-6 h-6"
                alt="Frame"
                src="https://c.animaapp.com/mnwpw3l9jXfMum/img/frame-2.svg"
              />
            </Button>
            <Button
              className="h-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-white rounded-xl border border-solid border-[#8ab5dd] hover:bg-gray-50"
              variant="outline"
            >
              <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-lg tracking-[0] leading-6 whitespace-nowrap">
                Contact Us
              </span>
              <img
                className="w-6 h-6"
                alt="Frame"
                src="https://c.animaapp.com/mnwpw3l9jXfMum/img/frame-2.svg"
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="w-full bg-white flex flex-col items-center">
        <div className="w-full flex justify-center px-[108px] py-24">
          <div className="w-full max-w-[1392px] flex flex-row items-start justify-between gap-8 flex-wrap">
            {/* Logo + description */}
            <div className="flex flex-col items-start gap-6 max-w-[265px]">
              <img
                className="w-[145px] h-[135px]"
                alt="Ics png"
                src="https://c.animaapp.com/mnwpw3l9jXfMum/img/ics-png-3.png"
              />
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
                Lorem ipsum dolor sit amet cons ectetur. Nunc ultrices dui sed
                et vulputate facilisi blandit dapibus.
              </p>
            </div>
            {/* Quick Links */}
            <div className="flex flex-col items-start gap-6 w-[172px]">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] w-full">
                Quick Links
              </h3>
              <nav className="flex flex-col items-start gap-4 w-full">
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
            <div className="flex flex-col items-start gap-6">
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
            <div className="flex flex-col items-start gap-6">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                Contact Information
              </h3>
              <div className="flex flex-col items-start gap-4">
                {contactInfo.map((item, index) => (
                  <p
                    key={index}
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap"
                  >
                    {item.label}
                  </p>
                ))}
              </div>
            </div>
            {/* Follow Us */}
            <div className="flex flex-col items-start gap-6 w-[156px]">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] w-full">
                Follow Us
              </h3>
              <div className="flex items-center gap-6">
                {socialIcons.map((icon, index) => (
                  <a key={index} href="#" aria-label={icon.alt}>
                    <img className={icon.className} alt={icon.alt} src={icon.src} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Divider + copyright */}
        <div className="w-full max-w-[1392px] mx-auto px-[108px]">
          <Separator className="bg-[#cdcdcd]" />
        </div>
        <div className="w-full py-8 bg-white flex items-center justify-center">
          <p className="[font-family:'Poppins',Helvetica] font-normal text-base-02 text-[14px] text-center tracking-[0] leading-[22px]">
            © Copyright 2026, All Rights Reserved by Idealizeer
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-[60px] h-[60px] flex items-center justify-center rounded-full overflow-hidden"
          aria-label="Scroll to top"
        >
          <img
            className="w-[60px] h-[60px]"
            alt="Scroll to top"
            src="https://c.animaapp.com/mnwpw3l9jXfMum/img/frame-73.svg"
          />
        </button>
      </div>
    </section>
  );
};
