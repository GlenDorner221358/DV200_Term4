require('dotenv/config');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path'); // Import path module

const QuestionRoutes = require('./routes/questions');
const CommentRoutes = require('./routes/comments');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

// Used with React()
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(QuestionRoutes);
app.use(CommentRoutes);

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/questionImages", express.static("questionImages"));

app.use('/userImages', express.static("userImages"));

app.use(userRoutes);
app.use(authRoutes);

// Connect to DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Christian:bRn0i9dgeXmpBZ56@cluster0.cfltisk.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Whirlpool' // Collection Name
}).then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log("No connection. Error: " + err);
});

// Serve static assets if in production (for Heroku deployment)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
    });
}

// start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log("Server Started On Port: ", PORT);
});
