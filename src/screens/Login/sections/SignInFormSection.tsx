import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Checkbox } from "../../../components/ui/checkbox";
import { Label } from "../../../components/ui/label";
import { Separator } from "../../../components/ui/separator";

/** Social login provider config */
const socialLoginOptions = [
  {
    id: "google",
    logo: "https://c.animaapp.com/mnwuy1bl8tBZoj/img/google--g--logo-svg-1.png",
    alt: "Google logo",
    label: "Continue with Google",
  },
  {
    id: "facebook",
    logo: "https://c.animaapp.com/mnwuy1bl8tBZoj/img/logo-de-facebook-1.png",
    alt: "Facebook logo",
    label: "Continue with Facebook",
  },
];

export const SignInFormSection = (): JSX.Element => {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex w-full max-w-[526px] flex-col items-start gap-6">
      {/* Header and form fields */}
      <div className="flex flex-col items-start gap-[45px] self-stretch w-full">
        {/* Title and subtitle */}
        <div className="flex flex-col items-start gap-[15px] w-full">
          <h1 className="self-stretch [font-family:'Open_Sans',Helvetica] font-semibold text-base-02 text-[52px] tracking-[-2.00px] leading-[62px]">
            Welcome Back
          </h1>
          <p className="self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-zinc-600 text-lg tracking-[0] leading-[30px]">
            Sign in to continue learning
          </p>
        </div>

        {/* Form fields */}
        <div className="flex flex-col items-start gap-5 w-full">
          {/* Email Address field */}
          <div className="flex flex-col gap-[11px] w-full">
            <Label
              htmlFor="email"
              className="[font-family:'Open_Sans',Helvetica] font-semibold text-base-02 text-base tracking-[0] leading-6"
            >
              Email Address
            </Label>
            <div className="flex h-[60px] w-full items-center gap-2.5 pl-8 pr-4 py-[18px] bg-white rounded-xl border border-solid border-slate-300">
              <img
                className="w-6 h-6 flex-shrink-0"
                alt="Email icon"
                src="https://c.animaapp.com/mnwuy1bl8tBZoj/img/frame-1.svg"
              />
              <input
                id="email"
                type="email"
                placeholder="Enter your Email Address"
                className="flex-1 bg-transparent border-none outline-none [font-family:'Open_Sans',Helvetica] font-normal text-slate-400 text-base tracking-[0] leading-6 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="flex flex-col gap-[11px] w-full">
            <Label
              htmlFor="password"
              className="[font-family:'Open_Sans',Helvetica] font-semibold text-base-02 text-base tracking-[0] leading-6"
            >
              Password
            </Label>
            <div className="flex h-[60px] w-full items-center gap-2.5 pl-8 pr-4 py-[18px] bg-white rounded-xl border border-solid border-slate-300">
              <img
                className="w-6 h-6 flex-shrink-0"
                alt="Password icon"
                src="https://c.animaapp.com/mnwuy1bl8tBZoj/img/frame-2.svg"
              />
              <input
                id="password"
                type="password"
                placeholder="Enter your Password"
                className="flex-1 bg-transparent border-none outline-none [font-family:'Open_Sans',Helvetica] font-normal text-slate-400 text-base tracking-[0] leading-6 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Remember me and Forgot password */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-[9px]">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="w-[19px] h-[19px] rounded-[5px] border-slate-400"
              />
              <label
                htmlFor="remember"
                className="[font-family:'Open_Sans',Helvetica] font-normal text-gray-900 text-sm tracking-[0] leading-[22px] whitespace-nowrap cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <button className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#0072de] text-sm tracking-[0] leading-[22px] whitespace-nowrap bg-transparent border-none cursor-pointer">
              Forgot password?
            </button>
          </div>
        </div>

        {/* Login button */}
        <Button className="w-full h-auto flex items-center justify-center gap-2.5 px-[26px] py-3.5 bg-[#0072de] rounded-xl border border-solid border-[#8ab5dd] shadow-[0px_3px_4px_#00000040] hover:bg-[#005bb5]">
          <span className="text-app-background text-lg [font-family:'Open_Sans',Helvetica] font-semibold tracking-[0] leading-6 whitespace-nowrap">
            Login
          </span>
        </Button>
      </div>

      {/* Divider with "Instan Login" */}
      <div className="flex items-center justify-center gap-4 self-stretch w-full">
        <Separator className="flex-1 bg-slate-300" />
        <span className="[font-family:'Open_Sans',Helvetica] font-normal text-slate-500 text-base text-center tracking-[0] leading-6 whitespace-nowrap">
          Instan Login
        </span>
        <Separator className="flex-1 bg-slate-300" />
      </div>

      {/* Social login options */}
      <div className="flex items-center gap-8">
        {socialLoginOptions.map((option) => (
          <button
            key={option.id}
            className="inline-flex items-center gap-6 bg-transparent border-none cursor-pointer"
          >
            <img
              className="w-11 h-11 object-cover"
              alt={option.alt}
              src={option.logo}
            />
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-black text-base tracking-[0] leading-7 whitespace-nowrap">
              {option.label}
            </span>
          </button>
        ))}
      </div>

      {/* Sign up link */}
      <p className="flex items-center justify-center self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-base text-center tracking-[0] leading-6">
        <span className="text-black">Don&#39;t have an account? </span>
        <button
          onClick={() => navigate("/register")}
          className="font-semibold text-[#0072de] bg-transparent border-none cursor-pointer [font-family:'Open_Sans',Helvetica] text-base leading-6"
        >
          Create free account
        </button>
      </p>
    </div>
  );
};
