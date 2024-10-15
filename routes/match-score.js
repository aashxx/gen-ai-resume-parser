const express = require('express');
const { generateScore } = require('../controllers/generate-score'); 

const router = express.Router();

router.post('/calculate-score', async (req, res) => {
    try {
        const { resume, jobDescription } = req.body;

        const matchScore = await generateScore(resume, jobDescription);

        res.status(200).json({ matchScore });
    } catch (error) {
        console.error('Error generating match score:', error);
        res.status(500).json({ error: 'Failed to generate match score.' });
    }
});

module.exports = router;