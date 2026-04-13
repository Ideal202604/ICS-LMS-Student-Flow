import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Courses } from "./screens/Courses";
import { HomePage } from "./screens/HomePage";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { LmsStudentFlow } from "./screens/LmsStudentFlow/LmsStudentFlow";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/lms-student-flow" element={<LmsStudentFlow />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
