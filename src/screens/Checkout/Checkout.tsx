import { useNavigate } from "react-router-dom";
import { BillingFormSection } from "./sections/BillingFormSection";
import { CareerJourneyHighlightSection } from "./sections/CareerJourneyHighlightSection";
import { OrderSummarySection } from "./sections/OrderSummarySection";

export const Checkout = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#f8f9fa]">
      {/* Top navigation bar */}
      <header className="w-full h-[81px] bg-white border-b border-border flex items-center px-6 shrink-0">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex h-12 items-center justify-center gap-2.5 px-5 py-4 bg-white rounded-lg lg:ml-[200px] cursor-pointer border-none hover:bg-gray-50 transition-colors"
        >
          <img
            className="w-5 h-5"
            alt="Icon"
            src="https://c.animaapp.com/mnx1h5hfns5K3g/img/icon-3.svg"
          />
          <span className="font-semibold text-accent-buttons-links [font-family:'Open_Sans',Helvetica] text-base tracking-[0] leading-6 whitespace-nowrap">
            Back
          </span>
        </button>
      </header>
      {/* Main content area */}
      <main className="flex flex-col w-full flex-1">
        {/* Two-column layout: BillingFormSection (left) + OrderSummarySection (right) */}
        <div className="flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-10 gap-8">
          {/* Left column - Billing Form */}
          <div className="flex-1">
            <BillingFormSection />
          </div>
          {/* Right column - Order Summary */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <OrderSummarySection />
          </div>
        </div>
        {/* Full-width Career Journey Highlight Section */}
        <div className="w-full">
          <CareerJourneyHighlightSection />
        </div>
      </main>
    </div>
  );
};
