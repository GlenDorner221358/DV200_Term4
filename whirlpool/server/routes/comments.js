const express = require('express');
const CommentSchema = require('../models/comment');
const router = express.Router();

// Get all comments
router.get('/api/allComments', async (req, res) => {
    try {
        const findComments = await CommentSchema.find();
        res.json(findComments);
    } catch (error) {
        res.status(500).json({ error: "There was an error", details: error.message });
    }
});

// Get comments by questionTitle
// router.get('/api/allComments', async (req, res) => {
//     try {
//         const findQuestions = await QuestionSchema.find();
//         res.json(findQuestions);
//     } catch (error) {
//         res.status(500).json({ error: "There was an error", details: error.message });
//     }
// });

// Create new Comment
router.post('/api/newComment', async (req, res) => {
    try {
        const data = req.body;
        const newComment = new CommentSchema({
            questionTitle: data.title,
            name: data.name,
            comment: data.comment,
            likes: 0,
        });

        const savedComment = await newComment.save();
        res.json(savedComment);
    } catch (error) {
        res.status(400).json({ error: "There is an error", details: error.message });
    }
});