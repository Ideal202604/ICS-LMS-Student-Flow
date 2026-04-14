import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { EnrollmentCheckoutModal } from "../../../../components/ui/enrollment-checkout-modal";

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
  const navigate = useNavigate();
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);

  const handleEnroll = () => {
    setIsEnrollOpen(true);
  };

  const handleContact = () => {
    setContactClicked(true);
    navigate("/contact");
    setTimeout(() => setContactClicked(false), 2500);
  };

  const handleNavLink = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    if (link === "Home") navigate("/");
    else if (link === "All Courses") navigate("/courses");
    else if (link === "Why Choose Us") navigate("/");
    else if (link === "Blog") navigate("/");
    else navigate("/");
  };

  return (
    <>
    <footer className="relative w-full flex flex-col">
      {/* CTA Banner Section */}
      <div
        className="w-full flex flex-col items-center justify-center py-16 md:py-28 px-4"
        style={{
          background: "linear-gradient(0deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%),url(https://c.animaapp.com/mnmyaijxgewU4q/img/frame-1321318002.png) 50% 50% / cover",
          minHeight: "392px",
        }}
      >
        <div className="flex flex-col items-center gap-6 max-w-[883px] w-full">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-2xl md:text-[44px] text-center tracking-[-0.88px] leading-tight md:leading-[52px] w-full">
              Start Your Career Journey Today
            </h2>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-base md:text-lg text-center tracking-[0] leading-7 w-full">
              Don&apos;t wait. Upgrade your skills and secure your future now.
            </p>
          </div>

          <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
            <Button
              onClick={handleEnroll}
              className="h-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-[#117ade] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] hover:bg-[#0f6bc7] active:scale-95 transition-all"
            >
              <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-lg tracking-[0] leading-6 whitespace-nowrap">
                Enroll Now
              </span>
              <img className="w-6 h-6" alt="Frame" src="https://c.animaapp.com/mnmyaijxgewU4q/img/frame-2.svg" />
            </Button>

            <Button
              variant="outline"
              onClick={handleContact}
              className="h-auto inline-flex items-center justify-center gap-2.5 px-8 py-3 bg-white rounded-xl border border-solid border-[#8ab5dd] hover:bg-gray-50 transition-colors"
            >
              <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-lg tracking-[0] leading-6 whitespace-nowrap">
                {contactClicked ? "Scrolling..." : "Contact Us"}
              </span>
              <img className="w-6 h-6" alt="Frame" src="https://c.animaapp.com/mnmyaijxgewU4q/img/frame-2.svg" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="w-full bg-white flex flex-col items-center">
        <div className="w-full max-w-[1920px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[200px] 2xl:px-[264px] py-12 md:py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Logo + Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-start gap-6">
            <img
              className="w-[100px] h-[93px] md:w-[145px] md:h-[135px]"
              alt="Ics png"
              src="https://c.animaapp.com/mnmyaijxgewU4q/img/ics-png-3.png"
            />
            <p className="max-w-[265px] text-black text-base leading-6 [font-family:'Open_Sans',Helvetica] font-normal tracking-[0]">
              Lorem ipsum dolor sit amet cons ectetur. Nunc ultrices dui sed et vulputate facilisi blandit dapibus.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start gap-6">
            <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] w-full">
              Quick Links
            </h3>
            <nav className="flex flex-col items-start gap-4 w-full">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={(e) => handleNavLink(e, link)}
                  className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:text-[#0072de] hover:underline transition-colors"
                >
                  {link}
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
              {companyLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:text-[#0072de] hover:underline transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-start gap-6">
            <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
              Contact Information
            </h3>
            <address className="flex flex-col items-start gap-4 not-italic">
              {contactInfo.map((info) => (
                <span
                  key={info}
                  className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6"
                >
                  {info}
                </span>
              ))}
            </address>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-start gap-6">
            <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] w-full">
              Follow Us
            </h3>
            <div className="flex items-center gap-4 md:gap-6">
              {socialIcons.map((icon) => (
                <a
                  key={icon.alt}
                  href={
                    icon.alt === "Instagram logo"
                      ? "https://instagram.com"
                      : icon.alt === "Linkedin icon svg"
                      ? "https://linkedin.com"
                      : "https://youtube.com"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.alt}
                  className="transition-opacity hover:opacity-75 active:scale-95"
                >
                  <img className={icon.className} alt={icon.alt} src={icon.src} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-white border-t border-[#cdcdcd]">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[200px] 2xl:px-[264px] py-6 flex items-center justify-center relative">
          <p className="[font-family:'Poppins',Helvetica] font-normal text-base-02 text-sm text-center tracking-[0] leading-6">
            © Copyright 2026, All Rights Reserved by Idealizeer
          </p>
        </div>
      </div>
    </footer>

      <EnrollmentCheckoutModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
      />
    </>
  );
};
