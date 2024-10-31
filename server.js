const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hallo von Ameni! hallo world!');
});

app.get('/error', (req, res) => {
    process.exit(1);
});

app.listen(5000, () => {
    console.log('Server started on port 5000')})