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

// Create user
app.post("/api/users", (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    role: role || "user"
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Update user role
app.patch("/api/users/:id/role", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.role = req.body.role ?? user.role;
  res.json(user);
});

// Delete user
app.delete("/api/users/:id", (req, res) => {
  users = users.filter(u => u.id !== Number(req.params.id));
  res.status(204).send();
});

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


console.log('checking')

console.log('checking the git diff')

//so git diff is used to provide us the codes that have been added or deleted or in simple language the change in code in our any files of current repo