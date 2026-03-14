import express from "express";
// this is production branch
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


events {
  # event 
}

http {
    server {
      listen 80;
      server_name aws.dotdazzle.in;

      location / {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
      }
    }
}
