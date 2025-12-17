//git checkout -b 'asok' is used to create a branch called asok and lets us switch to this branch
import express from "express";

const app = express();
app.use(express.json());

// Fake database
let users = [
  { id: 1, name: "Alex", email: "alex@test.com", role: "admin" },
  { id: 2, name: "Sam", email: "sam@test.com", role: "user" }
];

// Middleware: request logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Get all users
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

// Get user by ID
app.get("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});
