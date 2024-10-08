const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const QuestionDB = require('../models/Question');

// add a question
router.post('/', async (req, res) => {
    const questionData = new QuestionDB({
        title: req.body.title,
        body: req.body.body,
        tags: req.body.tags,
        user: req.body.user
    })

    await questionData.save().then((doc) => {
        res.status(201).send({
            status: true,
            // message: "Question added successfully",
            data: doc
        })
    }).catch((err) => {
        res.status(400).send({
            status: false,
            message: "Error adding question",
        })
    })
})


// get all questions
router.get("/", async (req, res) => {
    QuestionDB.aggregate([
        {
            $lookup: {
                from: "answers",
                let: { question_id: "$_id" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: ["$question_id", "$$question_id"],
                            },
                        },
                    },
                    {
                        $project: {
                            _id: 1,
                            // // user_id: 1,  not in chatgpt
                            user: 1,     
                            answer: 1,
                            created_at: 1,
                            // // question_id: 1 not in chatgpt
                        },
                    },
                ],
                as: "answerDetails",
            },
        },
        {
            $project: {
                _id: 1,          // Include the _id field
                title: 1,        // Include question title
                body: 1,         // Include question body
                tags: 1,         // Include question tags
                user: 1,         // Include user who posted the question
                created_at: 1,   // Include creation date of the question
                answerDetails: 1   
                // answerDetails: { $first: "$answerDetails" },
            },
        },
    ])
        .exec()
        .then((questionDetails) => {
            res.status(200).send(questionDetails);
        })
        .catch((e) => {
            console.log("Error: ", e);
            res.status(400).send({
                status: false,
                message: "Error fetching questions",
            });
        });
});


// get a question by id
router.get("/:id", async (req, res) => {
    try {
        QuestionDB.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(req.params.id) },
            },
            {
                $lookup: {
                    from: "answers",
                    let: { question_id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $eq: ["$question_id", "$$question_id"],
                                },
                            },
                        },
                        {
                            $project: {
                                _id: 1,
                                user: 1,     
                                answer: 1,
                                created_at: 1,
                                question_id: 1 
                            },
                        },
                    ],
                    as: "answerDetails",
                },
            },
            {
                $project: {
                    __v: 0,
                },
            },
        ])
            .exec()
            .then((questionDetails) => {
                res.status(200).send(questionDetails);
            })
            .catch((e) => {
                console.log("Error: ", e);
                res.status(400).send(e);
            });
    } catch (err) {
        console.log(err)
        res.status(400).send({
            message: "question not found",
        });
    }
 });


module.exports = router;