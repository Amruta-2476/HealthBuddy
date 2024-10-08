const express = require('express');
const router = express.Router();
const questionRouter = require('./Question');
const answerRouter = require('./Answers');

router.get('/', (req, res) => {
    res.send('welcome to healthbuddy');
});

router.use('/question', questionRouter);
router.use('/answer', answerRouter);

module.exports = router;