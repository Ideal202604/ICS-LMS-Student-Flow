
const quickLinks = ["Home", "All Courses", "Why Choose Us", "Blog"];
const companyLinks = ["Privacy Policy", "Teams of Service", "Refund Policy", "FAQs"];
const contactInfo = ["+91 98904 51547", "ceo@idealizeer.com", "Pune, Maharashtra, India"];

const socialIcons = [
  {
    alt: "Instagram logo",
    src: "https://c.animaapp.com/mnwuy1bl8tBZoj/img/instagram-logo-2016-svg-1.png",
    className: "w-8 h-8 object-cover",
  },
  {
    alt: "Linkedin icon svg",
    src: "https://c.animaapp.com/mnwuy1bl8tBZoj/img/linkedin-icon-svg-1.png",
    className: "w-8 h-8 object-cover",
  },
  {
    alt: "Youtube logo",
    src: "https://c.animaapp.com/mnwuy1bl8tBZoj/img/youtube-logo-1.png",
    className: "w-[46px] h-8 object-cover",
  },
];

export const AuthShowcaseSection = (): JSX.Element => {
  const handleNavLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full flex flex-col">
      {/* Footer Links Section */}
      <div className="w-full bg-white flex flex-col items-center">
        <div className="w-full max-w-[1920px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[200px] 2xl:px-[264px] py-12 md:py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Logo + Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-start gap-6">
            <img
              className="w-[100px] h-[93px] md:w-[145px] md:h-[135px]"
              alt="Ics png"
              src="https://c.animaapp.com/mnwuy1bl8tBZoj/img/ics-png-3.png"
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
                  onClick={handleNavLink}
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
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label={icon.alt}
                  className="transition-opacity hover:opacity-75"
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
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[200px] 2xl:px-[264px] py-6 flex items-center justify-center">
          <p className="[font-family:'Poppins',Helvetica] font-normal text-base-02 text-sm text-center tracking-[0] leading-6">
            © Copyright 2026, All Rights Reserved by Idealizeer
          </p>
        </div>
      </div>
    </footer>
  );
};
