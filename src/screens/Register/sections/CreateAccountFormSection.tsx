import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { Label } from "../../../components/ui/label";

/** Form field configuration */
const formFields = [
  {
    id: "fullName",
    label: "Full Name",
    placeholder: "Enter your full name",
    iconSrc: "https://c.animaapp.com/mnwvehj5NMc2G7/img/frame-6.svg",
    type: "text",
    bg: "bg-white",
    placeholderColor: "text-slate-400",
    isSelect: false,
  },
  {
    id: "email",
    label: "Email Address",
    placeholder: "Enter your Email Address",
    iconSrc: "https://c.animaapp.com/mnwvehj5NMc2G7/img/frame-4.svg",
    type: "email",
    bg: "bg-white",
    placeholderColor: "text-slate-400",
    isSelect: false,
  },
  {
    id: "iWantTo",
    label: "I want to",
    placeholder: "Learn Courses",
    iconSrc: "https://c.animaapp.com/mnwvehj5NMc2G7/img/frame-1.svg",
    type: "text",
    bg: "bg-[#f1f5f9]",
    placeholderColor: "text-base-02",
    isSelect: true,
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Create a strong password",
    iconSrc: "https://c.animaapp.com/mnwvehj5NMc2G7/img/frame.svg",
    type: "password",
    bg: "bg-white",
    placeholderColor: "text-slate-400",
    isSelect: false,
  },
  {
    id: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm Password",
    iconSrc: "https://c.animaapp.com/mnwvehj5NMc2G7/img/frame.svg",
    type: "password",
    bg: "bg-white",
    placeholderColor: "text-slate-400",
    isSelect: false,
  },
];

/** Social login options */
const socialLogins = [
  {
    id: "google",
    imgSrc: "https://c.animaapp.com/mnwvehj5NMc2G7/img/google--g--logo-svg-1.png",
    imgAlt: "Google logo",
    label: "Continue with Google",
  },
  {
    id: "facebook",
    imgSrc: "https://c.animaapp.com/mnwvehj5NMc2G7/img/logo-de-facebook-1.png",
    imgAlt: "Facebook logo",
    label: "Continue with Facebook",
  },
];

export const CreateAccountFormSection = (): JSX.Element => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative w-full flex justify-center">
      <div className="flex flex-col items-center gap-6 w-full max-w-[526px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[45px] w-full">
          <div className="flex flex-col items-center gap-[15px] w-full">
            <h1 className="w-full [font-family:'Open_Sans',Helvetica] font-semibold text-[#080814] text-[28px] sm:text-[40px] lg:text-[52px] text-center tracking-[-1px] lg:tracking-[-2.00px] leading-[36px] sm:leading-[48px] lg:leading-[62px]">
              Create Account
            </h1>
            <p className="w-full [font-family:'Open_Sans',Helvetica] font-normal text-zinc-600 text-lg text-center tracking-[0] leading-[30px]">
              Join our learning community
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col items-start gap-5 w-full">
            {formFields.map((field) => (
              <div key={field.id} className="flex flex-col gap-[11px] w-full">
                <Label
                  htmlFor={field.id}
                  className={`h-6 flex items-center [font-family:'Open_Sans',Helvetica] font-semibold ${field.id === "confirmPassword" ? "text-[#080814]" : "text-base-02"} text-base tracking-[0] leading-6 whitespace-nowrap`}
                >
                  {field.label}
                </Label>
                <div className={`flex w-full h-[60px] gap-2.5 pl-4 pr-4 py-[18px] ${field.bg} rounded-xl border border-solid border-slate-300 items-center`}>
                  <img
                    className="w-6 h-6 flex-shrink-0"
                    alt={field.label}
                    src={field.iconSrc}
                  />
                  {field.isSelect ? (
                    <select
                      id={field.id}
                      className={`flex-1 bg-transparent border-none outline-none [font-family:'Open_Sans',Helvetica] font-normal ${field.placeholderColor} text-base tracking-[0] leading-6 cursor-pointer appearance-none`}
                      defaultValue=""
                    >
                      <option value="" disabled>{field.placeholder}</option>
                      <option value="learn">Learn Courses</option>
                      <option value="teach">Teach Courses</option>
                    </select>
                  ) : (
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className={`flex-1 bg-transparent border-none outline-none [font-family:'Open_Sans',Helvetica] font-normal ${field.placeholderColor} text-base tracking-[0] leading-6 placeholder:text-slate-400`}
                    />
                  )}
                </div>
              </div>
            ))}

            {/* Terms and Conditions */}
            <div className="flex items-center gap-[9px] w-full">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="w-[19px] h-[19px] rounded-[5px] border border-solid border-slate-400 flex-shrink-0"
              />
              <label
                htmlFor="terms"
                className="[font-family:'Open_Sans',Helvetica] font-normal text-sm tracking-[0] leading-[22px] whitespace-nowrap cursor-pointer"
              >
                <span className="text-black">I agree to the </span>
                <span className="font-semibold text-[#0072de]">Terms and Conditions</span>
                <span className="text-black"> and </span>
                <span className="font-semibold text-[#0072de]">Privacy Policy</span>
              </label>
            </div>
          </div>

          {/* Create Account Button */}
          <Button className="w-full h-auto flex items-center justify-center gap-2.5 px-[26px] py-3.5 bg-[#0072de] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] hover:bg-[#005bb5]">
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-app-background text-lg tracking-[0] leading-6 whitespace-nowrap">
              Create Account
            </span>
          </Button>
        </div>

        {/* Social Login Options */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          {socialLogins.map((social) => (
            <button
              key={social.id}
              className="inline-flex items-center gap-3 sm:gap-6 cursor-pointer bg-transparent border-none"
            >
              <img
                className="w-8 sm:w-11 h-8 sm:h-11 object-cover"
                alt={social.imgAlt}
                src={social.imgSrc}
              />
              <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-sm sm:text-base tracking-[0] leading-7 whitespace-nowrap">
                {social.label}
              </span>
            </button>
          ))}
        </div>

        {/* Sign In Link */}
        <div className="flex items-center justify-center gap-4 w-full">
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            <span className="text-slate-500">Already have an account? </span>
            <button
              onClick={() => navigate("/login")}
              className="font-semibold text-[#0072de] bg-transparent border-none cursor-pointer [font-family:'Open_Sans',Helvetica] text-base leading-6"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
