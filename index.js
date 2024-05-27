const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the root route!');
});

app.get('/api', (req, res) => {
  res.send('hello world');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
