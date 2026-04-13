import * as React from "react";
import { cn } from "../../lib/utils";
import { Separator } from "./separator";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ChatMessage {
  id: string | number;
  /** "user" messages render right-aligned; "assistant" messages render left-aligned */
  type: "user" | "assistant";
  /** Message text. Pass `null` for a typing indicator (assistant only). */
  text: string | null;
  /** Timestamp label shown below the message */
  time?: string | null;
}

export interface ChatWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Widget title displayed in the header */
  title?: string;
  /** Subtitle displayed below the title */
  subtitle?: string;
  /** Messages to render in the conversation area */
  messages?: ChatMessage[];
  /** Placeholder text for the reply input */
  placeholder?: string;
  /** Assistant display name shown above assistant bubbles */
  assistantName?: string;
  /** Assistant avatar URL */
  assistantAvatar?: string;
  /** Callback fired when the user submits a message */
  onSend?: (text: string) => void;
  /** Primary brand colour — applied to header & user bubbles */
  brandColor?: string;
  /** Whether the widget is open / visible */
  open?: boolean;
  /** Called when the user clicks the close button */
  onClose?: () => void;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

const TypingDots = () => (
  <div className="inline-flex items-center gap-2 px-[15px] py-2.5 bg-[#f1f7ff] rounded-[0px_10px_10px_10px]">
    <span className="w-[15px] h-[15px] bg-[#c6deff] rounded-full animate-pulse" />
    <span className="w-[15px] h-[15px] bg-[#c6deff] rounded-full animate-pulse [animation-delay:150ms]" />
    <span className="w-[15px] h-[15px] bg-[#c6deff] rounded-full animate-pulse [animation-delay:300ms]" />
  </div>
);

// ─── Main Component ──────────────────────────────────────────────────────────

const ChatWidget = React.forwardRef<HTMLDivElement, ChatWidgetProps>(
  (
    {
      className,
      title = "ICS Chat",
      subtitle = "Get Help 24x7",
      messages = [],
      placeholder = "Reply ...",
      assistantName = "Assistant",
      assistantAvatar,
      onSend,
      brandColor = "#0072de",
      open = true,
      onClose,
      ...props
    },
    ref,
  ) => {
    const [input, setInput] = React.useState("");
    const messagesEndRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (input.trim() && onSend) {
        onSend(input.trim());
        setInput("");
      }
    };

    if (!open) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex flex-col items-start w-[450px] rounded-lg shadow-lg overflow-hidden font-['Open_Sans',Helvetica]",
          className,
        )}
        {...props}
      >
        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="w-full rounded-t-lg" style={{ backgroundColor: brandColor }}>
          <div className="flex flex-col w-full items-start gap-5 p-[30px] bg-white/[0.01] backdrop-blur-[25px]">
            <div className="flex items-start justify-between w-full">
              <div className="inline-flex flex-col items-start gap-[5px]">
                <h2 className="font-bold text-white text-3xl leading-normal tracking-normal">
                  {title}
                </h2>
                <p className="font-normal text-white text-base leading-7 whitespace-nowrap">
                  {subtitle}
                </p>
              </div>
              {onClose && (
                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Messages Area ───────────────────────────────────────── */}
        <div className="flex flex-col items-start gap-[35px] p-[30px] w-full bg-white overflow-y-auto max-h-[400px]">
          {messages.map((message) => {
            // ── User bubble ──
            if (message.type === "user") {
              return (
                <div
                  key={message.id}
                  className="flex flex-col items-end gap-[5px] w-full"
                >
                  <div
                    className="flex justify-end rounded-[10px_0px_10px_10px] items-start gap-2 px-[15px] py-2.5 max-w-[319px]"
                    style={{ backgroundColor: brandColor }}
                  >
                    <p className="flex-1 font-normal text-white text-base leading-6">
                      {message.text}
                    </p>
                  </div>
                  {message.time && (
                    <div className="flex items-center">
                      <span className="font-normal text-[#0d082c66] text-sm leading-normal">
                        {message.time}
                      </span>
                    </div>
                  )}
                </div>
              );
            }

            // ── Assistant typing indicator ──
            if (message.type === "assistant" && message.text === null) {
              return (
                <div
                  key={message.id}
                  className="flex items-start gap-2.5 w-full"
                >
                  {assistantAvatar ? (
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      alt={assistantName}
                      src={assistantAvatar}
                    />
                  ) : (
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                      style={{ backgroundColor: brandColor }}
                    >
                      {assistantName.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="flex flex-col items-start gap-[5px] max-w-[285px]">
                    <span className="font-semibold text-[#0d082c] text-base leading-normal">
                      {assistantName}
                    </span>
                    <TypingDots />
                  </div>
                </div>
              );
            }

            // ── Assistant message ──
            return (
              <div
                key={message.id}
                className="flex items-start gap-2.5 w-full"
              >
                {assistantAvatar ? (
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    alt={assistantName}
                    src={assistantAvatar}
                  />
                ) : (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
                    style={{ backgroundColor: brandColor }}
                  >
                    {assistantName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="flex flex-col items-start gap-[5px] max-w-[285px]">
                  <span className="font-semibold text-[#0d082c] text-base leading-normal">
                    {assistantName}
                  </span>
                  <div className="flex w-full bg-[#f1f7ff] rounded-[0px_10px_10px_10px] items-start gap-2 px-[15px] py-2.5">
                    <p className="flex-1 font-normal text-[#0d082b] text-base leading-6">
                      {message.text}
                    </p>
                  </div>
                  {message.time && (
                    <div className="flex items-center justify-end w-full">
                      <span className="font-normal text-[#0d082c66] text-sm leading-normal">
                        {message.time}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* ── Divider ─────────────────────────────────────────────── */}
        <Separator className="bg-black/5" />

        {/* ── Footer / Input Area ─────────────────────────────────── */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between px-[30px] py-5 w-full bg-white rounded-b-lg"
        >
          <div className="inline-flex items-center gap-4 flex-1">
            <svg
              className="w-6 h-6 shrink-0 text-[#0d082c99]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              className="flex-1 bg-transparent font-['Source_Sans_Pro',Helvetica] font-normal text-base text-[#0d082c] placeholder:text-[#0d082c99] outline-none"
            />
          </div>
          <button
            type="submit"
            className="shrink-0 ml-4 transition-colors"
            style={{ color: brandColor }}
            aria-label="Send message"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </div>
    );
  },
);
ChatWidget.displayName = "ChatWidget";

export { ChatWidget };
