const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Connect to MongoDB (replace with your MongoDB URI)
mongoose.connect('mongodb://mongodb-service:27017/mydb', { useNewUrlParser: true });

app.get('/', (req, res) => {
  res.send('Hello from Node.js + MongoDB!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});