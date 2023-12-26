const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello fehemannn");
});

app.listen(5000)