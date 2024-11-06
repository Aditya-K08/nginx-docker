const express = require('express');
const app = express();
const port = 3003;

app.get('/orders/:userId', (req, res) => {
  const userId = req.params.userId;
  res.json([{ orderId: 1, userId: userId, total: 100 }]);
});

app.listen(port, () => {
  console.log(`Order Service running on port ${port}`);
});
