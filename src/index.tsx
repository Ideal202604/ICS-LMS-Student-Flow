import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "./screens/Contact";
import { Courses } from "./screens/Courses";
import { HomePage } from "./screens/HomePage";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { About } from "./screens/About";
import { CoursesDetails } from "./screens/CourseDetails";
import { Checkout } from "./screens/Checkout";
import { CoursePlay } from "./screens/CoursePlay";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses/:courseSlug" element={<CoursesDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/course-play" element={<CoursePlay />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
