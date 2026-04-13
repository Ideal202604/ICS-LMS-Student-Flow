import { Card, CardContent } from "../../../components/ui/card";

const contactItems = [
  {
    icon: "https://c.animaapp.com/mnwxk5sdBr2leB/img/primary-button-3.svg",
    title: "Call / WhatsApp",
    primaryText: "+91 9850585703",
    secondaryText: "Mon to Sun 9 AM - 9PM",
  },
  {
    icon: "https://c.animaapp.com/mnwxk5sdBr2leB/img/primary-button-2.svg",
    title: "Email Support",
    primaryText: "creative_4@idealizeer.com",
    secondaryText: "Get Detailed Course Information Via Email",
  },
  {
    icon: "https://c.animaapp.com/mnwxk5sdBr2leB/img/primary-button.svg",
    title: "Live Chat",
    primaryText: "Click to Chat",
    secondaryText: "Instant Response during business hours",
  },
  {
    icon: "https://c.animaapp.com/mnwxk5sdBr2leB/img/primary-button-1.svg",
    title: "Location",
    primaryText: "Pune, India",
    secondaryText: "Online Training Available Worldwide",
  },
];

export const ContactDetailsSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-4">
      {contactItems.map((item, index) => (
        <Card
          key={index}
          className="w-full rounded-2xl border border-solid border-border shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] bg-white"
        >
          <CardContent className="flex items-start gap-4 sm:gap-6 p-3 sm:p-4">
            <img
              className="w-11 h-11 flex-shrink-0"
              alt={item.title}
              src={item.icon}
            />
            <div className="flex flex-col items-start gap-2">
              <p className="mt-[-1px] [font-family:'Open_Sans',Helvetica] font-semibold text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                {item.title}
              </p>
              <div className="[font-family:'Open_Sans',Helvetica] font-normal text-base tracking-[0]">
                <span className="text-black leading-6">
                  {item.primaryText}
                  <br />
                </span>
                <span className="text-slate-400 leading-6">
                  {item.secondaryText}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
