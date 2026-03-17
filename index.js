import express from "express";

// this is dev directory
const app = express(); 
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

