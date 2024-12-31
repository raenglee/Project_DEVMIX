const express = require("express");
const app = express();
const port = 3000;

app.get("/api/account", (req, res) => {
  res.send({
    mid: 3,
    memberName: "김재형"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
  // host:${port}`);
});
