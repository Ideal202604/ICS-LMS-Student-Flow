import { useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Textarea } from "../../../components/ui/textarea";
import { submitContactForm } from "../../../lib/api";
import { showToast } from "../../../components/ui/toast";

export const ContactFormSection = (): JSX.Element => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await submitContactForm({ fullName, email, phone, subject, message });
    setLoading(false);
    if (res.success) {
      showToast("success", "Message sent successfully! We\u2019ll respond within 30 minutes.");
      setFullName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } else {
      showToast("error", res.error || "Failed to send message.");
    }
  };

  const subjectOptions = [
    "General Inquiry",
    "Course Information",
    "Admissions",
    "Technical Support",
    "Other",
  ];

  return (
    <Card className="w-full bg-white rounded-2xl border border-solid border-slate-200 shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a]">
      <CardContent className="flex flex-col gap-8 p-4 sm:p-6">
        {/* Header row: title + badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3">
          <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-2xl tracking-[-0.48px] leading-8 whitespace-nowrap">
            Get in touch
          </h2>
          <Badge className="bg-[#faa61b] hover:bg-[#faa61b] text-white [font-family:'Open_Sans',Helvetica] font-semibold text-sm tracking-[0] leading-6 rounded-[50px] px-3 py-2 whitespace-nowrap border-transparent">
            Response within 30 mins
          </Badge>
        </div>
        {/* Form fields */}
        <div className="flex flex-col gap-5 w-full">
          {/* Row 1: Full Name + Email Address */}
          <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5 flex-1 w-full">
              <Label className="[font-family:'Open_Sans',Helvetica] font-semibold text-base-02 text-base tracking-[0] leading-6 whitespace-nowrap">
                Full Name *
              </Label>
              <div className="relative flex items-center">
                <img
                  className="absolute left-3 w-5 h-5 pointer-events-none"
                  alt="User icon"
                  src="https://c.animaapp.com/mnwxk5sdBr2leB/img/frame-1.svg"
                />
                <Input
                  className="pl-10 h-11 [font-family:'Open_Sans',Helvetica] font-normal text-slate-400 text-base tracking-[0] leading-6 rounded-xl border-slate-300 bg-white"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>
            {/* Email Address */}
            <div className="flex flex-col gap-1.5 flex-1 w-full">
              <Label className="[font-family:'Open_Sans',Helvetica] font-semibold text-base-02 text-base tracking-[0] leading-6 whitespace-nowrap">
                Email Address *
              </Label>
              <div className="relative flex items-center">
                <img
                  className="absolute left-3 w-5 h-5 pointer-events-none"
                  alt="Email icon"
                  src="https://c.animaapp.com/mnwxk5sdBr2leB/img/frame-6.svg"
                />
                <Input
                  className="pl-10 h-11 [font-family:'Open_Sans',Helvetica] font-normal text-slate-400 text-base tracking-[0] leading-6 rounded-xl border-slate-300 bg-white"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          {/* Row 2: Phone Number + Subject */}
          <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
            {/* Phone Number */}
            <div className="flex flex-col gap-1.5 flex-1 w-full">
              <Label className="[font-family:'Open_Sans',Helvetica] font-semibold text-base-02 text-base tracking-[0] leading-6 whitespace-nowrap">
                Phone Number (WhatsApp)
              </Label>
              <div className="relative flex items-center">
                <img
                  className="absolute left-3 w-5 h-5 pointer-events-none"
                  alt="Phone icon"
                  src="https://c.animaapp.com/mnwxk5sdBr2leB/img/frame-5.svg"
                />
                <Input
                  className="pl-10 h-11 [font-family:'Open_Sans',Helvetica] font-normal text-slate-400 text-base tracking-[0] leading-6 rounded-xl border-slate-300 bg-white"
                  placeholder="10 Digit Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            {/* Subject */}
            <div className="flex flex-col gap-1.5 flex-1 w-full">
              <Label className="[font-family:'Open_Sans',Helvetica] font-semibold text-base-02 text-base tracking-[0] leading-6 whitespace-nowrap">
                Subject *
              </Label>
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger className="h-11 [font-family:'Open_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6 rounded-xl border-slate-300 bg-white">
                  <SelectValue placeholder="Select a Subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjectOptions.map((option) => (
                    <SelectItem
                      key={option}
                      value={option}
                      className="[font-family:'Open_Sans',Helvetica]"
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Message / Questions */}
          <div className="flex flex-col gap-1.5 w-full">
            <Label className="[font-family:'Open_Sans',Helvetica] font-semibold text-base-02 text-base tracking-[0] leading-6 whitespace-nowrap">
              Your Message / Questions *
            </Label>
            <Textarea
              className="min-h-[101px] [font-family:'Open_Sans',Helvetica] font-normal text-slate-400 text-base tracking-[0] leading-6 rounded-xl border-slate-300 bg-white resize-none"
              placeholder="Tell us about your background, goals, and any specific questions..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {/* Send Message Button */}
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full h-12 flex items-center justify-center gap-2 bg-[#0072de] hover:bg-[#005bb5] rounded-[10px] px-4 py-2 disabled:opacity-60"
          >
            <img
              className="w-[33.73px] h-[33.73px]"
              alt="Send icon"
              src="https://c.animaapp.com/mnwxk5sdBr2leB/img/frame-10.svg"
            />
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-5 whitespace-nowrap">
              {loading ? "Sending..." : "Send Message"}
            </span>
          </Button>
          {/* Disclaimer */}
          <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-base text-center tracking-[0] leading-6">
            <span className="text-slate-400">
              By submitting, you agree to our{" "}
            </span>
            <span className="text-[#0072de] cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-slate-400">
              {" "}
              and consent to receive communication via call, SMS, email, and
              WhatsApp.
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
