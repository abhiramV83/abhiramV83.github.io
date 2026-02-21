import express from 'express';

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Start server
app.listen(8080, () => {
    console.log("Server started on http://localhost:8080");
});

// GET APIs
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/home", (req, res) => {
    res.send("This is home API");
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ]);
});

// POST API
app.post("/users", (req, res) => {
    const newUser = req.body; // expects JSON data
    res.json({
        message: "User added successfully",
        user: newUser
    });
});