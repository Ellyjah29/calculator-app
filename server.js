const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "public"
app.use(express.static("public"));

// Simple health route (optional but nice)
app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
