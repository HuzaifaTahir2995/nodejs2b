const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'files')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'files', 'index.html'));
});

app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'files', 'users.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});