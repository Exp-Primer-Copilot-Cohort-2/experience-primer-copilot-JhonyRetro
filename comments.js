// Create web server    
// Create a web server using the express module
const express = require('express');
const app = express();
const port = 3000;

// Add the body-parser module to the project
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// Add the comments module to the project
const comments = require('./comments.js');

// Add the comments to the project
app.get('/comments', (req, res) => {
    res.send(comments.getComments());
});

app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.addComment(comment);
    res.send('Comment added');
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});