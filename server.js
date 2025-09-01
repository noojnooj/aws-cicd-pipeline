const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const root = __dirname;

app.use(express.static(root));
app.use((req, res, next) => {
  if (req.method !== 'GET') return next();
  res.sendFile(path.join(root, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://54.180.221.87:${PORT}`);
});