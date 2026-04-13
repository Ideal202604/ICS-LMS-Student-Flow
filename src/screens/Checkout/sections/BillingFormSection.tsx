import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

// Form fields data
const billingFields = [
  { id: "fullName", label: "Full Name", placeholder: "Full name" },
  { id: "emailAddress", label: "Email Address", placeholder: "Email Address" },
  { id: "phoneNumber", label: "Phone Number", placeholder: "Phone Number" },
];

export interface BillingData {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
}

// Emit billing data changes to parent via a global event-like pattern
let billingDataCallback: ((data: BillingData) => void) | null = null;
export function onBillingDataChange(cb: (data: BillingData) => void) {
  billingDataCallback = cb;
}

export const BillingFormSection = (): JSX.Element => {
  const [values, setValues] = useState<BillingData>({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
  });

  const handleChange = (id: string, value: string) => {
    const updated = { ...values, [id]: value };
    setValues(updated);
    billingDataCallback?.(updated);
  };

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
      <Card className="w-full bg-white rounded-2xl border border-solid border-[hsl(var(--border))]">
        <CardHeader className="pt-[25px] px-[25px] pb-0">
          <CardTitle className="[font-family:'Open_Sans',Helvetica] font-semibold text-gray-800 text-2xl tracking-[0] leading-7">
            Billing Details
          </CardTitle>
        </CardHeader>
        <CardContent className="px-[25px] pt-6 pb-px flex flex-col gap-5">
          {billingFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-2 w-full">
              {/* Label with required asterisk */}
              <Label
                htmlFor={field.id}
                className="[font-family:'Open_Sans',Helvetica] font-semibold text-gray-800 text-base tracking-[0] leading-[14px] whitespace-nowrap flex items-center gap-1"
              >
                {field.label}
                <span className="[font-family:'Inter',Helvetica] font-medium text-gray-800 text-sm leading-[14px]">
                  *
                </span>
              </Label>
              {/* Input field styled to match the design */}
              <Input
                id={field.id}
                placeholder={field.placeholder}
                value={values[field.id as keyof BillingData]}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="h-9 px-3 py-1 bg-white rounded-[10px] border border-transparent [font-family:'Open_Sans',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-normal placeholder:text-gray-500 placeholder:text-base placeholder:[font-family:'Open_Sans',Helvetica]"
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
