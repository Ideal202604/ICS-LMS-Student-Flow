import { XIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { Input } from "./input";

/** Props for the EnrollmentCheckoutModal */
export interface EnrollmentCheckoutModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback to close the modal */
  onClose: () => void;
  /** Course title */
  title?: string;
  /** Instructor name */
  instructor?: string;
  /** Rating score */
  rating?: string;
  /** Number of reviews */
  reviews?: string;
  /** Number of students */
  students?: string;
  /** Badge label (e.g. "Bestseller") */
  badge?: string;
  /** Course price after discount */
  coursePrice?: string;
  /** Original price before discount */
  originalPrice?: string;
  /** Banner image URL */
  bannerImage?: string;
  /** Callback when Proceed to Checkout is clicked */
  onCheckout?: () => void;
}

export const EnrollmentCheckoutModal = ({
  isOpen,
  onClose,
  title = "Research Writing & AI: Beginner to Advanced",
  instructor = "by Michael Rodriguez",
  rating = "4.9",
  reviews = "(18,920 reviews)",
  students = "215,680 students",
  badge = "Bestseller",
  coursePrice = "₹900.00 inc. tax",
  originalPrice = "₹1,500",
  bannerImage = "https://c.animaapp.com/mnwzi4ru4Pehbx/img/button.svg",
  onCheckout,
}: EnrollmentCheckoutModalProps): JSX.Element | null => {
  const [couponCode, setCouponCode] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const totalAmount = coursePrice;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <Card className="flex flex-col w-full max-w-[512px] bg-white rounded-[20px] overflow-hidden border-0 shadow-lg animate-fade-in" style={{ animationDelay: "0s", animationDuration: "0.3s" }}>
        {/* Course Banner Image Area */}
        <div className="relative w-full h-[260px] overflow-hidden bg-[#1a3a6e]">
          <img
            className="w-full h-full object-cover"
            alt="Course Banner"
            src={bannerImage}
          />
          {/* Close button positioned top-right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-colors cursor-pointer"
          >
            <XIcon className="w-4 h-4 text-gray-700" />
          </button>
        </div>
        <CardContent className="flex flex-col gap-6 pt-6 pb-6 px-6">
          {/* Course Info Section */}
          <div className="flex flex-col gap-2">
            {/* Title */}
            <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-gray-800 text-2xl tracking-[0] leading-8">
              {title}
            </h2>
            {/* Instructor */}
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-5">
              {instructor}
            </p>
            {/* Rating and Students Row */}
            <div className="flex items-center gap-4 mt-1">
              {/* Rating */}
              <div className="flex items-center gap-1">
                <img
                  className="w-4 h-4"
                  alt="Star Icon"
                  src="https://c.animaapp.com/mnwzi4ru4Pehbx/img/icon-1.svg"
                />
                <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-gray-800 text-base tracking-[0] leading-6 whitespace-nowrap">
                  {rating}
                </span>
                <span className="[font-family:'Open_Sans',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-5 whitespace-nowrap">
                  {reviews}
                </span>
              </div>
              {/* Students */}
              <div className="flex items-center gap-1">
                <img
                  className="w-4 h-4"
                  alt="Students Icon"
                  src="https://c.animaapp.com/mnwzi4ru4Pehbx/img/icon-2.svg"
                />
                <span className="[font-family:'Open_Sans',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-5 whitespace-nowrap">
                  {students}
                </span>
              </div>
            </div>
            {/* Bestseller Badge */}
            <div className="mt-1">
              <span className="inline-flex items-center justify-center px-2 py-0.5 bg-[#f59e0b1a] rounded-[10px] border border-solid border-[#f59e0b33] text-amber-500 [font-family:'Open_Sans',Helvetica] font-normal text-xs tracking-[0] leading-4 whitespace-nowrap">
                {badge}
              </span>
            </div>
          </div>
          {/* Coupon Code Section */}
          <div className="flex flex-col gap-4 w-full">
            {/* Coupon label */}
            <div className="flex items-center gap-2">
              <img
                className="w-4 h-4"
                alt="Tag Icon"
                src="https://c.animaapp.com/mnwzi4ru4Pehbx/img/icon.svg"
              />
              <span className="[font-family:'Open_Sans',Helvetica] font-normal text-gray-800 text-base tracking-[0] leading-5 whitespace-nowrap">
                Have a coupon code?
              </span>
            </div>
            {/* Coupon input + Apply button */}
            <div className="flex items-center gap-2 w-full">
              <Input
                className="flex-1 h-9 px-3 py-1 bg-white rounded-[10px] border border-solid border-gray-200 [font-family:'Open_Sans',Helvetica] font-normal text-gray-500 text-base"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <Button
                variant="outline"
                className={`h-9 px-4 py-2 bg-[#f8f9fa] rounded-[10px] border border-solid border-gray-200 [font-family:'Open_Sans',Helvetica] font-semibold text-gray-800 text-base text-center tracking-[0] leading-5 whitespace-nowrap ${!couponCode ? "opacity-50" : "opacity-100"}`}
                disabled={!couponCode}
              >
                Apply
              </Button>
            </div>
          </div>
          {/* Price Breakdown Section */}
          <div className="flex flex-col gap-4 pt-[17px] w-full border-t border-solid border-gray-200">
            {/* Course Price Row */}
            <div className="flex items-center justify-between w-full">
              <span className="[font-family:'Open_Sans',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-6 whitespace-nowrap">
                Course Price
              </span>
              <span className="[font-family:'Inter',Helvetica] font-medium text-gray-800 text-base tracking-[0] leading-6 whitespace-nowrap">
                {coursePrice}
              </span>
            </div>
            {/* Original Price Row */}
            <div className="flex items-center justify-between w-full">
              <span className="[font-family:'Open_Sans',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-5 whitespace-nowrap">
                Original Price
              </span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-5 line-through whitespace-nowrap">
                {originalPrice}
              </span>
            </div>
            {/* Total Amount Row */}
            <div className="flex items-center justify-between w-full pt-3 border-t border-solid border-gray-200">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-gray-800 text-lg tracking-[0] leading-7 whitespace-nowrap">
                Total Amount
              </span>
              <span className="[font-family:'Inter',Helvetica] font-bold text-[#0072de] text-2xl tracking-[0] leading-8 whitespace-nowrap">
                {totalAmount}
              </span>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2 w-full">
            <Button
              variant="outline"
              onClick={onClose}
              className="h-auto px-4 py-3 bg-[#f8f9fa] rounded-[10px] border border-solid border-gray-200 [font-family:'Open_Sans',Helvetica] font-semibold text-gray-800 text-base text-center tracking-[0] leading-5 whitespace-nowrap"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
              className="h-auto flex-1 px-4 py-3 bg-[#0072de] hover:bg-[#005bb5] rounded-[10px] border-0 [font-family:'Open_Sans',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-5 whitespace-nowrap"
            >
              Proceed to Checkout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
