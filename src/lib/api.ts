/**
 * In-Memory Backend API Service
 * No database — all data lives in memory for the session.
 */

// ─── Types ───
export interface User {
  id: string;
  fullName: string;
  email: string;
  password: string;
  role: "learner" | "teacher";
  createdAt: string;
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export interface EnrollmentRecord {
  id: string;
  userId: string | null;
  courseTitle: string;
  couponCode: string;
  totalAmount: string;
  billingName: string;
  billingEmail: string;
  billingPhone: string;
  createdAt: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

// ─── In-Memory Store ───
const users: User[] = [];
const contactSubmissions: ContactSubmission[] = [];
const enrollments: EnrollmentRecord[] = [];
let currentUser: User | null = null;

function generateId(): string {
  return Math.random().toString(36).substring(2, 12) + Date.now().toString(36);
}

/** Simulate network latency */
function delay(ms = 400): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

// ─── Auth API ───

export async function registerUser(data: {
  fullName: string;
  email: string;
  password: string;
  role?: "learner" | "teacher";
}): Promise<ApiResponse<User>> {
  await delay();
  const { fullName, email, password, role } = data;

  if (!fullName.trim()) return { success: false, error: "Full name is required." };
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { success: false, error: "Valid email is required." };
  if (password.length < 6)
    return { success: false, error: "Password must be at least 6 characters." };

  const exists = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (exists) return { success: false, error: "An account with this email already exists." };

  const user: User = {
    id: generateId(),
    fullName: fullName.trim(),
    email: email.trim().toLowerCase(),
    password,
    role: role || "learner",
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  currentUser = user;
  return { success: true, data: user };
}

export async function loginUser(data: {
  email: string;
  password: string;
}): Promise<ApiResponse<User>> {
  await delay();
  const { email, password } = data;

  if (!email.trim()) return { success: false, error: "Email is required." };
  if (!password.trim()) return { success: false, error: "Password is required." };

  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (!user) return { success: false, error: "Invalid email or password." };

  currentUser = user;
  return { success: true, data: user };
}

export function getCurrentUser(): User | null {
  return currentUser;
}

export function logoutUser(): void {
  currentUser = null;
}

// ─── Contact API ───

export async function submitContactForm(data: {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): Promise<ApiResponse<ContactSubmission>> {
  await delay();
  const { fullName, email, phone, subject, message } = data;

  if (!fullName.trim()) return { success: false, error: "Full name is required." };
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { success: false, error: "Valid email is required." };
  if (!subject.trim()) return { success: false, error: "Subject is required." };
  if (!message.trim()) return { success: false, error: "Message is required." };

  const submission: ContactSubmission = {
    id: generateId(),
    fullName: fullName.trim(),
    email: email.trim(),
    phone: phone.trim(),
    subject: subject.trim(),
    message: message.trim(),
    submittedAt: new Date().toISOString(),
  };
  contactSubmissions.push(submission);
  return { success: true, data: submission };
}

// ─── Enrollment / Checkout API ───

export async function processCheckout(data: {
  billingName: string;
  billingEmail: string;
  billingPhone: string;
  courseTitle: string;
  couponCode?: string;
  totalAmount: string;
}): Promise<ApiResponse<EnrollmentRecord>> {
  await delay(600);
  const { billingName, billingEmail, billingPhone, courseTitle, totalAmount, couponCode } = data;

  if (!billingName.trim()) return { success: false, error: "Full name is required." };
  if (!billingEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(billingEmail))
    return { success: false, error: "Valid email is required." };
  if (!billingPhone.trim()) return { success: false, error: "Phone number is required." };

  const enrollment: EnrollmentRecord = {
    id: generateId(),
    userId: currentUser?.id || null,
    courseTitle,
    couponCode: couponCode || "",
    totalAmount,
    billingName: billingName.trim(),
    billingEmail: billingEmail.trim(),
    billingPhone: billingPhone.trim(),
    createdAt: new Date().toISOString(),
  };
  enrollments.push(enrollment);
  return { success: true, data: enrollment };
}

export async function validateCoupon(code: string): Promise<ApiResponse<{ discount: number; label: string }>> {
  await delay(300);
  const validCoupons: Record<string, { discount: number; label: string }> = {
    SAVE10: { discount: 10, label: "10% OFF" },
    LEARN20: { discount: 20, label: "20% OFF" },
    ICS50: { discount: 50, label: "50% OFF" },
  };
  const coupon = validCoupons[code.toUpperCase().trim()];
  if (!coupon) return { success: false, error: "Invalid coupon code." };
  return { success: true, data: coupon };
}

// ─── Course API ───

export interface CourseInfo {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
}

const allCourses: CourseInfo[] = [
  {
    slug: "digital-marketing-using-ai",
    title: "Digital Marketing Using AI",
    category: "Accredited Programs",
    description: "Explore top-tier, up-to-date online courses designed by industry professionals to accelerate your career in technology and creative fields.",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-5.png",
    originalPrice: "\u20B920,000",
    discountedPrice: "\u20B915,000",
    discount: "25% OFF",
  },
  {
    slug: "research-writing-ai",
    title: "Research Writing & AI: Beginner to Advanced",
    category: "Accredited Programs",
    description: "Explore top-tier, up-to-date online courses designed by industry professionals to accelerate your career in technology and creative fields.",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-4.png",
    originalPrice: "\u20B920,000",
    discountedPrice: "\u20B915,000",
    discount: "25% OFF",
  },
  {
    slug: "digital-marketing-using-ai-2",
    title: "Digital Marketing Using AI",
    category: "Accredited Programs",
    description: "Explore top-tier, up-to-date online courses designed by industry professionals to accelerate your career in technology and creative fields.",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-5.png",
    originalPrice: "\u20B920,000",
    discountedPrice: "\u20B915,000",
    discount: "25% OFF",
  },
  {
    slug: "digital-marketing-using-ai-3",
    title: "Digital Marketing Using AI",
    category: "Accredited Programs",
    description: "Explore top-tier, up-to-date online courses designed by industry professionals to accelerate your career in technology and creative fields.",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-5.png",
    originalPrice: "\u20B920,000",
    discountedPrice: "\u20B915,000",
    discount: "25% OFF",
  },
  {
    slug: "research-writing-ai-2",
    title: "Research Writing & AI",
    category: "Accredited Programs",
    description: "Explore top-tier, up-to-date online courses designed by industry professionals to accelerate your career in technology and creative fields.",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-4.png",
    originalPrice: "\u20B920,000",
    discountedPrice: "\u20B915,000",
    discount: "25% OFF",
  },
  {
    slug: "digital-marketing-using-ai-4",
    title: "Digital Marketing Using AI",
    category: "Accredited Programs",
    description: "Explore top-tier, up-to-date online courses designed by industry professionals to accelerate your career in technology and creative fields.",
    image: "https://c.animaapp.com/mnmyaijxgewU4q/img/rectangle-9796-5.png",
    originalPrice: "\u20B920,000",
    discountedPrice: "\u20B915,000",
    discount: "25% OFF",
  },
];

export async function fetchCourses(): Promise<ApiResponse<CourseInfo[]>> {
  await delay(200);
  return { success: true, data: allCourses };
}

export async function fetchCourseBySlug(slug: string): Promise<ApiResponse<CourseInfo>> {
  await delay(200);
  const course = allCourses.find((c) => c.slug === slug);
  if (!course) return { success: false, error: "Course not found." };
  return { success: true, data: course };
}

// ─── Admin / Debug Helpers ───
export function getStats() {
  return {
    totalUsers: users.length,
    totalContacts: contactSubmissions.length,
    totalEnrollments: enrollments.length,
    currentUser: currentUser ? { id: currentUser.id, email: currentUser.email, fullName: currentUser.fullName } : null,
  };
}
