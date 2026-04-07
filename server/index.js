import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];

app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Name, email and password are required." });
  }

  const existing = users.find((user) => user.email === email.toLowerCase());
  if (existing) {
    return res.status(409).json({ error: "A user with that email already exists." });
  }

  const user = {
    id: Date.now().toString(),
    name,
    email: email.toLowerCase(),
    password,
  };
  users.push(user);

  return res.status(201).json({ message: "Registration successful.", user: { id: user.id, name: user.name, email: user.email } });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  const user = users.find((item) => item.email === email.toLowerCase() && item.password === password);
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  return res.json({ message: "Login successful.", user: { id: user.id, name: user.name, email: user.email } });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please provide name, email, and message." });
  }
  return res.json({ message: "Contact request received. We will reach out soon." });
});

app.get("/api/status", (req, res) => {
  return res.json({ status: "ok" });
});

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend API server running on http://localhost:${port}`);
});
