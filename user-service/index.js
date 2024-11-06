
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, name: "John Doe" });
});




app.listen(port, () => {
  console.log(`User Service running on port ${port}`);
});
