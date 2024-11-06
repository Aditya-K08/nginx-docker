const express = require('express');
const app = express();
const port = 3002;

app.get('/products', (req, res) => {
  res.json([{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }]);
});

app.listen(port, () => {
  console.log(`Product Service running on port ${port}`);
});
