const express = require('express');
const cors = require('cors');

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/ai', require('./routes/match-score'));

app.get('/', (req, res) => {
    res.send('Zenith Bliss');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});