import * as React from "react";
import { cn } from "../../lib/utils";

export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The image src URL */
  src: string;
  /** Alt text for the image */
  alt?: string;
  /** Show a close/dismiss button in the top-right corner */
  onClose?: () => void;
  /** Custom close button icon URL; defaults to the standard X button */
  closeIconSrc?: string;
  /** Height class for the image container (Tailwind h-* value), defaults to h-[260px] */
  heightClass?: string;
  /** Round only the top corners (e.g. for card headers). When false, rounds all corners. */
  topRoundedOnly?: boolean;
  /** Additional classes forwarded to the image element */
  imageClassName?: string;
  /** Rating badge value – when provided, a rating chip is overlaid on the bottom-right */
  rating?: string;
  /** Icon src used inside the rating badge */
  ratingIconSrc?: string;
  /** Overlay content rendered on top of the image */
  children?: React.ReactNode;
}

/**
 * ImageCard – a flexible image container with optional close button, rating badge,
 * and arbitrary overlay children. Inspired by the Figma image-header reference.
 *
 * @example
 * // Simple course thumbnail with rating
 * <ImageCard
 *   src="/course.png"
 *   alt="Course thumbnail"
 *   rating="4.5"
 *   ratingIconSrc="/star.svg"
 *   onClose={() => {}}
 * />
 */
export const ImageCard = React.forwardRef<HTMLDivElement, ImageCardProps>(
  (
    {
      src,
      alt = "",
      onClose,
      closeIconSrc = "https://c.animaapp.com/mnydfbipZa7Gkm/img/button.svg",
      heightClass = "h-[260px]",
      topRoundedOnly = false,
      imageClassName,
      rating,
      ratingIconSrc = "https://c.animaapp.com/mnx35q56jSrTot/img/frame-6.svg",
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden",
          heightClass,
          topRoundedOnly ? "rounded-t-2xl rounded-b-none" : "rounded-2xl",
          className,
        )}
        {...props}
      >
        {/* Main image */}
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover",
            topRoundedOnly ? "rounded-t-2xl rounded-b-none" : "rounded-2xl",
            imageClassName,
          )}
        />

        {/* Close / dismiss button */}
        {onClose && (
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow transition-colors focus:outline-none focus:ring-2 focus:ring-[#0072de]"
          >
            <img src={closeIconSrc} alt="Close" className="w-8 h-8" />
          </button>
        )}

        {/* Rating badge */}
        {rating && (
          <div className="absolute bottom-[11px] right-[11px] flex w-[70px] h-8 items-center gap-2 px-[5px] bg-white rounded-lg shadow-sm">
            <img src={ratingIconSrc} alt="Rating" className="w-4 h-4" />
            <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#1a365d] text-lg leading-7 whitespace-nowrap">
              {rating}
            </span>
          </div>
        )}

        {/* Arbitrary overlay content */}
        {children && (
          <div className="absolute inset-0 flex items-end pointer-events-none">
            {children}
          </div>
        )}
      </div>
    );
  },
);

ImageCard.displayName = "ImageCard";
