const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    question: { type: String, required: true },
    tags: {
        tagOne: { type: String, required: false },
        tagTwo: { type: String, required: false },
        tagThree: { type: String, required: false },
    },
    votes: {
        total: { type: Number, required: true },
        likes: { type: Number, required: true },
        dislikes: { type: Number,  required: true },
    }
})

module.exports = mongoose.model("Question", questionSchema)