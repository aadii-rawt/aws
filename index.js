import express from "express";

// this is dev directory
const app = express(); 
app.get("/", (req, res) => {
  res.send("hello world docker working..");
});


app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from the API!" });
});


app.get("/api/test", (req, res) => {
  res.json({ message: "docker running on new vm" });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

