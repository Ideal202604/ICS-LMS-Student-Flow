import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Courses } from "./screens/Courses";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Courses />
  </StrictMode>,
);
