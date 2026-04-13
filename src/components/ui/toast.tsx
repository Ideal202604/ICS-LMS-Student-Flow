import { useEffect, useState } from "react";

export interface ToastMessage {
  id: string;
  type: "success" | "error" | "info";
  message: string;
}

let toastListeners: Array<(toasts: ToastMessage[]) => void> = [];
let toasts: ToastMessage[] = [];

function notifyListeners() {
  toastListeners.forEach((fn) => fn([...toasts]));
}

export function showToast(type: "success" | "error" | "info", message: string, duration = 4000) {
  const id = Math.random().toString(36).substring(2, 10);
  toasts = [...toasts, { id, type, message }];
  notifyListeners();
  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id);
    notifyListeners();
  }, duration);
}

export function ToastContainer(): JSX.Element {
  const [items, setItems] = useState<ToastMessage[]>([]);

  useEffect(() => {
    toastListeners.push(setItems);
    return () => {
      toastListeners = toastListeners.filter((fn) => fn !== setItems);
    };
  }, []);

  if (items.length === 0) return <></>;

  return (
    <div className="fixed top-6 right-6 z-[99999] flex flex-col gap-3 max-w-[400px]">
      {items.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-lg border animate-slide-in-right ${
            toast.type === "success"
              ? "bg-green-50 border-green-200 text-green-800"
              : toast.type === "error"
              ? "bg-red-50 border-red-200 text-red-800"
              : "bg-blue-50 border-blue-200 text-blue-800"
          }`}
        >
          <span className="text-lg">
            {toast.type === "success" ? "\u2705" : toast.type === "error" ? "\u274C" : "\u2139\uFE0F"}
          </span>
          <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-sm leading-5">
            {toast.message}
          </span>
        </div>
      ))}
    </div>
  );
}
