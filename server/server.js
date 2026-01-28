const express = require('express');
const app = express();

app.get('/api/water-quality', (req, res) => {
  res.json({ph: 7.2, tds: 120});
});

app.listen(5000);
