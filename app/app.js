const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello from GitHub Actions CI/CD!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});