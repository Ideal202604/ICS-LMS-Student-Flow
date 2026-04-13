import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";

export const OrderSummarySection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Card className="flex flex-col w-full max-w-[512px] bg-white rounded-[20px] border border-solid shadow-[0px_1px_2px_-1px_#0000001a,0px_1px_3px_#0000001a] overflow-hidden">
      {/* Header */}
      <CardHeader className="flex flex-row items-center gap-2 p-6 pb-4">
        <img
          className="w-6 h-6 flex-shrink-0"
          alt="Order icon"
          src="https://c.animaapp.com/mnx1h5hfns5K3g/img/icon.svg"
        />
        <h2 className="[font-family:'Open_Sans',Helvetica] font-semibold text-gray-800 text-2xl tracking-[0] leading-7 whitespace-nowrap">
          Order Summary
        </h2>
      </CardHeader>
      <CardContent className="flex flex-col gap-0 p-0">
        {/* Course Thumbnail */}
        <div className="mx-6 mb-0">
          <div
            className="w-full h-[200px] rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://c.animaapp.com/mnx1h5hfns5K3g/img/image--the-complete-web-development-bootcamp-.png)",
            }}
          />
        </div>
        {/* Course Info */}
        <div className="flex flex-col gap-6 pt-6 pb-6 px-6">
          {/* Title, Author, Rating */}
          <div className="flex flex-col gap-4">
            {/* Title and Author */}
            <div className="flex flex-col gap-2">
              <h3 className="[font-family:'Open_Sans',Helvetica] font-semibold text-gray-800 text-2xl tracking-[0] leading-8">
                Research Writing &amp; AI: Beginner to Advanced
              </h3>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-5">
                by Michael Rodriguez
              </p>
            </div>
            {/* Rating and Students */}
            <div className="flex items-center gap-4 flex-wrap">
              {/* Rating */}
              <div className="flex items-center gap-1">
                <img
                  className="w-4 h-4 flex-shrink-0"
                  alt="Star icon"
                  src="https://c.animaapp.com/mnx1h5hfns5K3g/img/icon-1.svg"
                />
                <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-gray-800 text-base tracking-[0] leading-6 whitespace-nowrap">
                  4.9
                </span>
                <span className="[font-family:'Open_Sans',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-5 whitespace-nowrap">
                  (18,920 reviews)
                </span>
              </div>
              {/* Students */}
              <div className="flex items-center gap-1">
                <img
                  className="w-4 h-4 flex-shrink-0"
                  alt="Students icon"
                  src="https://c.animaapp.com/mnx1h5hfns5K3g/img/icon-2.svg"
                />
                <span className="[font-family:'Open_Sans',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-5 whitespace-nowrap">
                  215,680 students
                </span>
              </div>
            </div>
          </div>
          {/* Pricing Section */}
          <div className="flex flex-col gap-0 w-full">
            <Separator className="mb-4" />
            {/* Course Price Row */}
            <div className="flex items-center justify-between w-full mb-4">
              <span className="[font-family:'Open_Sans',Helvetica] font-normal text-gray-500 text-base tracking-[0] leading-6 whitespace-nowrap">
                Course Price
              </span>
              <span className="[font-family:'Inter',Helvetica] font-medium text-gray-800 text-base tracking-[0] leading-6 whitespace-nowrap">
                ₹900.00 inc. tax
              </span>
            </div>
            <Separator className="mb-4" />
            {/* Total Amount Row */}
            <div className="flex items-center justify-between w-full">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-gray-800 text-lg tracking-[0] leading-7 whitespace-nowrap">
                Total Amount
              </span>
              <span className="[font-family:'Inter',Helvetica] font-bold text-[#0072de] text-2xl tracking-[0] leading-8 whitespace-nowrap">
                ₹900.00
              </span>
            </div>
          </div>
          {/* Continue to Payment Button */}
          <div className="w-full py-2">
            <Button
              onClick={() => navigate("/course-play")}
              className="w-full h-12 bg-[#0072de] hover:bg-[#005bb5] rounded-[10px] [font-family:'Open_Sans',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-5"
            >
              Continue to Payment
            </Button>
          </div>
          {/* Disclaimer */}
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-gray-500 text-sm text-center tracking-[0] leading-5 w-full">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
