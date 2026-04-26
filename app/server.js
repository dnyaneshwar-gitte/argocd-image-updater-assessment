const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Argo CD Image Updater Assessment - Version v1.0.0");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});