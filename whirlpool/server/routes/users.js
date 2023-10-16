const express = require('express')
const router = express()
const { User, validate } = require('../models/users')
const bcrypt = require("bcrypt")
const multer = require('multer')
const path = require('path')

//Multer Middleware Prep
const userImgStore = multer.diskStorage({
    destination: ( req, file, callBack ) => {
        callBack(null, path.join( __dirname, '../userImages'));
    },

    filename: ( req, file, callBack) => {
        console.log(file)
        callBack(null, Date.now() + path.extname(file.originalname));
    }
});

//Run Middleware
const uploadUserImage = multer({storage: userImgStore});

router.post("/", uploadUserImage.single('image'), async (req, res) => {
    try {
        const { error } = validate(req.body)
        if (error) {
            return res.status(400).send({ message: error.details[0].message })
        }
        const user = await User.findOne({ email: req.body.email })

        if (user) {
            return res.status(409)
            .send({ message: "User with given email already exist." })
        }

        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        await new User({ ...req.body, password: hashPassword }).save()
        res.status(201).send({ message: "User Created succefully" })
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})

router.get('/api/users:email', async (req, res) => {
    const findUser = await User.findByEmail(req.params.email)
    res.json(findUser)
})

router.put('/api/updateUserImg/:email', async(req, res) => {
    console.log(req.body)

    const findProduct = await User.updateOne(
        { email: req.params.email }, 
        {$set: {
           profilePic: req.body.profilePic
        }}
    )
    res.json(findUser)
})

//End
module.exports = router