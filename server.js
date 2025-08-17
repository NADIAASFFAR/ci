const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello CD World!');
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy', version: '1.0.0' });
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;