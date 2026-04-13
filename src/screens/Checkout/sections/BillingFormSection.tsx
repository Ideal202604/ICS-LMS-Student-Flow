import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

// Form fields data
const formFields = [
  { id: "fullName", label: "Full Name", placeholder: "Full name" },
  { id: "emailAddress", label: "Email Address", placeholder: "Email Address" },
  { id: "phoneNumber", label: "Phone Number", placeholder: "Phone Number" },
];

export const BillingFormSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start justify-center gap-[45px] w-full relative">
      {/* Header section */}
      <div className="flex flex-col items-start gap-6 self-stretch w-full">
        <div className="flex flex-col items-start gap-4 self-stretch w-full">
          <h1 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-[44px] tracking-[-0.88px] leading-[52px]">
            Checkout
          </h1>
          <p className="self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
            Complete your billing details to proceed
          </p>
        </div>
      </div>
      {/* Billing Details Card */}
      <Card className="w-full bg-white rounded-2xl border border-solid border-gray-200 shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a]">
        <CardContent className="flex flex-col gap-6 pt-[25px] pb-px px-[25px]">
          {/* Card heading */}
          <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-gray-800 text-2xl tracking-[0] leading-7 whitespace-nowrap">
            Billing Details
          </h2>
          {/* Form fields */}
          <div className="flex flex-col items-start gap-5 self-stretch w-full">
            {formFields.map((field) => (
              <div
                key={field.id}
                className="flex flex-col items-start gap-2 self-stretch w-full"
              >
                {/* Label with required asterisk */}
                <div className="flex flex-row items-center gap-0.5">
                  <Label
                    htmlFor={field.id}
                    className="[font-family:'Open_Sans',Helvetica] font-semibold text-gray-800 text-base tracking-[0] leading-[14px] whitespace-nowrap"
                  >
                    {field.label}
                  </Label>
                  <span className="[font-family:'Inter',Helvetica] font-medium text-gray-800 text-sm tracking-[0] leading-[14px] ml-1">
                    *
                  </span>
                </div>
                {/* Input field */}
                <Input
                  id={field.id}
                  placeholder={field.placeholder}
                  className="h-9 px-3 py-1 bg-white rounded-[10px] border border-gray-200 [font-family:'Open_Sans',Helvetica] font-normal text-gray-500 text-base tracking-[0] w-full"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
