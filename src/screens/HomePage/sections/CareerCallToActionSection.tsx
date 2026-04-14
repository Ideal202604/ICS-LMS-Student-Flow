import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { EnrollmentCheckoutModal } from "../../../components/ui/enrollment-checkout-modal";

const quickLinksData = [
  { label: "Home", href: "/" },
  { label: "All Courses", href: "/courses" },
  { label: "Why Choose Us", href: "/" },
  { label: "Blog", href: "/" },
];
const companyLinksData = [
  { label: "Privacy Policy", href: "/" },
  { label: "Teams of Service", href: "/" },
  { label: "Refund Policy", href: "/" },
  { label: "FAQs", href: "/" },
];
const contactInfo = ["+91 98904 51547", "ceo@idealizeer.com", "Pune, Maharashtra, India"];
const socialIcons = [
  { alt: "Instagram logo", src: "https://c.animaapp.com/mnwpw3l9jXfMum/img/instagram-logo-2016-svg-1-1.png", className: "w-8 h-8 object-cover" },
  { alt: "Linkedin icon svg", src: "https://c.animaapp.com/mnwpw3l9jXfMum/img/linkedin-icon-svg-1-1.png", className: "w-8 h-8 object-cover" },
  { alt: "Youtube logo", src: "https://c.animaapp.com/mnwpw3l9jXfMum/img/youtube-logo-1-1.png", className: "w-[46px] h-8 object-cover" },
];

export const CareerCallToActionSection = (): JSX.Element => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    <section className="relative w-full flex flex-col">
      {/* Hero CTA Banner */}
      <div
        className="w-full flex flex-col items-center justify-center py-16 sm:py-20 md:py-28 px-3 sm:px-6"
        style={{
          background:
            "linear-gradient(0deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url(https://c.animaapp.com/mnwpw3l9jXfMum/img/frame-1321318002-1.png) 50% 50% / cover",
          minHeight: "392px",
        }}
      >
        <div className="flex flex-col items-center gap-6 w-full max-w-[883px]">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-[26px] sm:text-[34px] md:text-[44px] text-center tracking-[-0.88px] leading-[34px] sm:leading-[42px] md:leading-[52px] w-full animate-slide-in-up">
              Start Your Career Journey Today
            </h2>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-base sm:text-lg text-center tracking-[0] leading-6 sm:leading-7 w-full">
              Don&#39;t wait. Upgrade your skills and secure your future now.
            </p>
          </div>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Button
              onClick={() => setIsEnrollOpen(true)}
              className="btn-animate h-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#117ade] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] hover:bg-[#0f6bc4]"
            >
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
              className="btn-animate h-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 bg-white rounded-xl border border-solid border-[#8ab5dd] hover:bg-gray-50"
              variant="outline"
              onClick={() => navigate("/contact")}
            >
              <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-base sm:text-lg tracking-[0] leading-6 whitespace-nowrap">
                Contact Us
              </span>
              <img
                className="w-5 sm:w-6 h-5 sm:h-6"
                alt="Frame"
                src="https://c.animaapp.com/mnwpw3l9jXfMum/img/frame-2.svg"
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-white flex flex-col items-center">
        <div className="w-full max-w-[1920px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[200px] 2xl:px-[264px] py-12 md:py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Logo and description */}
            <div className="flex flex-col items-start gap-6 col-span-2 md:col-span-3 lg:col-span-1 max-w-[265px]">
              <img
                className="w-[145px] h-[135px]"
                alt="Ics png"
                src="https://c.animaapp.com/mnwpw3l9jXfMum/img/ics-png-3-1.png"
              />
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
                Lorem ipsum dolor sit amet cons ectetur. Nunc ultrices dui sed
                et vulputate facilisi blandit dapibus.
              </p>
            </div>
            {/* Quick Links */}
            <div className="flex flex-col items-start gap-6 min-w-[140px]">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px]">
                Quick Links
              </h3>
              <nav className="flex flex-col items-start gap-4">
                {quickLinksData.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); navigate(link.href); }}
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:underline hover:text-[#0072de] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            {/* Company */}
            <div className="flex flex-col items-start gap-6 min-w-[140px]">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                Company
              </h3>
              <nav className="flex flex-col items-start gap-4">
                {companyLinksData.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => e.preventDefault()}
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:underline hover:text-[#0072de] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            {/* Contact Information */}
            <div className="flex flex-col items-start gap-6 min-w-[180px]">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                Contact Information
              </h3>
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
            <div className="flex flex-col items-start gap-6 min-w-[120px]">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px]">
                Follow Us
              </h3>
              <div className="flex items-center gap-6">
                {socialIcons.map((icon) => (
                  <a key={icon.alt} href={icon.alt === "Instagram logo" ? "https://instagram.com" : icon.alt === "Linkedin icon svg" ? "https://linkedin.com" : "https://youtube.com"} target="_blank" rel="noopener noreferrer" aria-label={icon.alt} className="transition-opacity hover:opacity-75">
                    <img className={icon.className} alt={icon.alt} src={icon.src} />
                  </a>
                ))}
              </div>
            </div>
        </div>
        {/* Copyright bar */}
        <div className="w-full border-t border-[#cdcdcd]">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[200px] 2xl:px-[264px] py-6 flex items-center justify-center">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-base-02 text-sm text-center tracking-[0] leading-6">
              © Copyright 2026, All Rights Reserved by Idealizeer
            </p>
          </div>
        </div>
      </footer>
    </section>

      <EnrollmentCheckoutModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
      />
    </>
  );
};
