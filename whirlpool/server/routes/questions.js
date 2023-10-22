const express = require('express');
const QuestionSchema = require('../models/question');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Multer Middleware Prep
const questionImgStore = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, path.join(__dirname, '../questionImages'));
    },
    filename: (req, file, callBack) => {
        callBack(null, Date.now() + path.extname(file.originalname));
    }
});

// Run Middleware
const uploadQuestionImage = multer({ storage: questionImgStore });

// Create new Question
router.post('/api/newQuestion', uploadQuestionImage.single('image'), async (req, res) => {
    try {
        const data = req.body;

        const newQuestion = new QuestionSchema({
            name: data.name,
            title: data.title,
            question: data.question,
            image: req.file.filename,
            tags: {
                tagOne: data.tags.tagOne,
                tagTwo: data.tags.tagTwo,
                tagThree: data.tags.tagThree
            },
            image: req.file.filename, // Save the filename of the uploaded image
            votes: {
                total: 0, // Initialize total votes to 0
                likes: 0,
                dislikes: 0
            }
        });

        await newQuestion.save();
        res.status(201).send({ message: "Question created successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
});

// Get Questions
router.get('/api/allQuestions', async (req, res) => {
    try {
        let findQuestions;
        if (req.query.tag) {
            findQuestions = await QuestionSchema.find({
                $or: [
                    { 'tags.tagOne': req.query.tag },
                    { 'tags.tagTwo': req.query.tag },
                    { 'tags.tagThree': req.query.tag }
                ]
            });
        } else {
            findQuestions = await QuestionSchema.find();
        }
        res.json(findQuestions);
    } catch (error) {
        res.status(500).json({ error: "There was an error", details: error.message });
    }
});

// Single Question by ID
router.get('/api/singleQuestion/:id', async (req, res) => {
    try {
        const question = await QuestionSchema.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ error: "Question not found" });
        }
        res.json(question);
    } catch (error) {
        res.status(500).json({ error: "There was an error", details: error.message });
    }
});

//Update Question
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
                    image: req.file.filename,
                    tags: {
                        tagOne: data.tags.tagOne,
                        tagTwo: data.tags.tagTwo,
                        tagThree: data.tags.tagThree
                    },
                    votes: {
                        total: totalVotes,
                        likes: totalLikes,
                        dislikes: totalDisikes
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


// Delete Question by id
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
