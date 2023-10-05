const express = require('express');
const QuestionSchema = require('../models/question');
const router = express.Router();

// Create new Question
router.post('/api/newQuestion', async (req, res) => {
    try {
        const data = req.body;

        const newQuestion = new QuestionSchema({
            name: data.name,
            title: data.title,
            question: data.question,
            tags: {
                tagOne: data.tags.tagOne,
                tagTwo: data.tags.tagTwo,
                tagThree: data.tags.tagThree
            },
            votes: {
                total: 0, // Initialize total votes to 0
                likes: 0,
                dislikes: 0
            }
        });

        const savedQuestion = await newQuestion.save();
        res.json(savedQuestion);
    } catch (error) {
        res.status(400).json({ error: "There is an error", details: error.message });
    }
});

// Get Questions
router.get('/api/allQuestions', async (req, res) => {
    try {
        const findQuestions = await QuestionSchema.find();
        res.json(findQuestions);
    } catch (error) {
        res.status(500).json({ error: "There was an error", details: error.message });
    }
});

// Single Question
router.get('/api/singleQuestion/:id', async (req, res) => {
    try {
        const findQuestion = await QuestionSchema.findById(req.params.id);
        res.json(findQuestion);
    } catch (error) {
        res.status(404).json({ error: "Question not found", details: error.message });
    }
});

//Update Question
// Update Question
router.patch('/api/updateQuestion/:id', async (req, res) => {
    try {
        const data = req.body;
        
        // Calculate Total Votes
        const totalLikes = Number(data.votes.likes);
        const totalDisikes = Number(data.votes.dislikes);

        const totalVotes = totalLikes + totalDisikes;

        const updatedQuestion = await QuestionSchema.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    name: data.name,
                    title: data.title,
                    question: data.question,
                    tags: {
                        tagOne: data.tags.tagOne,
                        tagTwo: data.tags.tagTwo,
                        tagThree: data.tags.tagThree
                    },
                    votes: {
                        total: totalVotes,
                        likes: data.votes.likes,
                        dislikes: data.votes.dislikes
                    }
                }
            },
            { new: true } // Set new: true to return the updated document
        );

        if (!updatedQuestion) {
            return res.status(404).json({ error: "Question not found" });
        }

        res.json(updatedQuestion);
    } catch (error) {
        res.status(400).json({ error: "There is an error", details: error.message });
    }
});


// Delete Question
router.delete('/api/deleteQuestion/:id', async (req, res) => {
    try {
        const deletedQuestion = await QuestionSchema.findByIdAndDelete(req.params.id);
        res.json(deletedQuestion);
    } catch (error) {
        res.status(404).json({ error: "Question not found", details: error.message });
    }
});

// Export the router
module.exports = router;
