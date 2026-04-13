import React, { useState, useEffect } from "react";
import { ChatWidget, type ChatMessage } from "./chat-widget";

const chatMessages: ChatMessage[] = [
  { id: 1, type: "user", text: "Hello, how are you doing?", time: "08:15 AM" },
  { id: 2, type: "assistant", text: "I\u2019m doing well, thank you! How can I help you today?", time: "08:16 AM" },
  { id: 3, type: "user", text: "I have a question about the return policy for a product I purchased.", time: "Just Now" },
  { id: 4, type: "assistant", text: null, time: null },
];

export const FloatingChatButtons = (): JSX.Element => {
  const [chatOpen, setChatOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-50">
      {chatOpen && (
        <ChatWidget
          title="ICS Chat"
          subtitle="Get Help 24x7"
          messages={chatMessages}
          assistantAvatar="https://c.animaapp.com/mnwu5sfyzRwXn5/img/ellipse-1-1.png"
          open={chatOpen}
          onClose={() => setChatOpen(false)}
          onSend={(text) => console.log("Sent:", text)}
          className="shadow-[0px_30px_60px_#0072de26] animate-fade-in"
        />
      )}
      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`w-[60px] h-[60px] transition-all duration-300 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        aria-label="Scroll to top"
      >
        <img
          className="w-[60px] h-[60px]"
          alt="Scroll to top"
          src="https://c.animaapp.com/mnwxk5sdBr2leB/img/frame-73.svg"
        />
      </button>
      <div className="flex flex-col items-center gap-4">
        <a
          href="https://wa.me/919890451547"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <img
            className="w-14 h-14 drop-shadow-lg"
            alt="WhatsApp"
            src="https://c.animaapp.com/mnmyaijxgewU4q/img/group-40187.png"
          />
        </a>
        <button
          onClick={() => setChatOpen((prev) => !prev)}
          className="w-14 h-14 rounded-full bg-[#0072de] flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          aria-label="Toggle chat"
        >
          <svg
            className="w-7 h-7 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
