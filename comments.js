//Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const comments = require('./comments.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

// View comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add comments
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  fs.writeFile(path.join(__dirname, 'comments.json'), JSON.stringify(comments), (err) => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      res.json(comments);
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});