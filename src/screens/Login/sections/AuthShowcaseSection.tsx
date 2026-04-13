/** Footer section data */
const quickLinks = ["Home", "All Courses", "Why Choose Us", "Blog"];
const companyLinks = [
  "Privacy Policy",
  "Teams of Service",
  "Refund Policy",
  "FAQs",
];
const contactInfo = [
  "+91 98904 51547",
  "ceo@idealizeer.com",
  "Pune, Maharashtra, India",
];
const socialIcons = [
  {
    alt: "Instagram",
    src: "https://c.animaapp.com/mnwuy1bl8tBZoj/img/instagram-logo-2016-svg-1.png",
    className: "w-8 h-8 object-cover",
  },
  {
    alt: "LinkedIn",
    src: "https://c.animaapp.com/mnwuy1bl8tBZoj/img/linkedin-icon-svg-1.png",
    className: "w-8 h-8 object-cover",
  },
  {
    alt: "YouTube",
    src: "https://c.animaapp.com/mnwuy1bl8tBZoj/img/youtube-logo-1.png",
    className: "w-[46px] h-8 object-cover",
  },
];

export const AuthShowcaseSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-white px-4 md:px-12 lg:px-[108px] py-8 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-[1392px] mx-auto">
        {/* Logo and description */}
        <div className="flex flex-col items-start gap-6 col-span-2 md:col-span-3 lg:col-span-1 max-w-[265px]">
          <img
            className="w-[145px] h-[135px]"
            alt="ICS Logo"
            src="https://c.animaapp.com/mnwuy1bl8tBZoj/img/ics-png-3.png"
          />
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
            Lorem ipsum dolor sit amet cons ectetur. Nunc ultrices dui sed et
            vulputate facilisi blandit dapibus.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start gap-6 w-[172px]">
          <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-lg tracking-[0] leading-[26px]">
            Quick Links
          </h3>
          <nav className="flex flex-col items-start gap-4">
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
        <div className="flex flex-col items-start gap-6">
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
        <div className="flex flex-col items-start gap-6">
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
        <div className="flex flex-col items-start gap-6 w-[156px]">
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
