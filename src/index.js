const express = require('express');
const app = express();
const PORT = 5050;

app.get('/', (req, res) => {
    res.send('Hello from Express Server!')
});

app.listen(PORT, () => {
    console.log(`Server is running on htps://localhost:${PORT}`);
})