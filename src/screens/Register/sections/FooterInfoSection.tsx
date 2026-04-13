/** Quick Links column data */
const quickLinks = ["Home", "All Courses", "Why Choose Us", "Blog"];

/** Company column data */
const companyLinks = [
  "Privacy Policy",
  "Teams of Service",
  "Refund Policy",
  "FAQs",
];

/** Contact Info column data */
const contactInfo = [
  "+91 98904 51547",
  "ceo@idealizeer.com",
  "Pune, Maharashtra, India",
];

/** Social media icons data */
const socialIcons = [
  {
    alt: "Instagram",
    src: "https://c.animaapp.com/mnwvehj5NMc2G7/img/instagram-logo-2016-svg-1.png",
    className: "w-8 h-8 object-cover",
  },
  {
    alt: "LinkedIn",
    src: "https://c.animaapp.com/mnwvehj5NMc2G7/img/linkedin-icon-svg-1.png",
    className: "w-8 h-8 object-cover",
  },
  {
    alt: "YouTube",
    src: "https://c.animaapp.com/mnwvehj5NMc2G7/img/youtube-logo-1.png",
    className: "w-[46px] h-8 object-cover",
  },
];

export const FooterInfoSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-white px-[108px] py-24 flex flex-col items-center">
      <div className="w-full max-w-[1392px] flex flex-row items-start justify-between">
        {/* Logo and description */}
        <div className="flex flex-col items-start gap-6 flex-shrink-0">
          <img
            className="w-[145px] h-[135px]"
            alt="ICS Logo"
            src="https://c.animaapp.com/mnwvehj5NMc2G7/img/ics-png-3.png"
          />
          <p className="w-[265px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
            Lorem ipsum dolor sit amet cons ectetur. Nunc ultrices dui sed et vulputate facilisi blandit dapibus.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start gap-6 w-[172px] mt-5">
          <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px]">
            Quick Links
          </h3>
          <nav className="flex flex-col items-start gap-4 w-full">
            {quickLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:underline"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Company */}
        <div className="flex flex-col items-start gap-6 mt-5">
          <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
            Company
          </h3>
          <nav className="flex flex-col items-start gap-4">
            {companyLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap hover:underline"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start gap-6 mt-5">
          <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px] whitespace-nowrap">
            Contact Information
          </h3>
          <div className="flex flex-col items-start gap-4">
            {contactInfo.map((info) => (
              <div key={info} className="flex items-center gap-2.5">
                <span className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                  {info}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col items-start gap-6 w-[156px] mt-5">
          <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px]">
            Follow Us
          </h3>
          <div className="flex items-center gap-6">
            {socialIcons.map((icon) => (
              <a key={icon.alt} href="#" aria-label={icon.alt}>
                <img className={icon.className} alt={icon.alt} src={icon.src} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
