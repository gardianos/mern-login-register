const express = require('express');
const mongoose = require ('mongoose')
const app = express();
const User =  require('./models/user')

app.use(express.urlencoded({ extended: false}));
app.use(express.json({ extended: false}));

//Mongo db connection
const dbUrl = "mongodb+srv://gardian123:gardian123@cluster0.vilvj.mongodb.net/mern-app?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify:false
        })
        console.log("MongoDb is connected!")
    } catch (error) {
        console.log(error)
    }
}

connectDB()

//Router
app.post("/api/register", async (req, res) => {

    try {
        await User.create({
            name: req.body.userName,
            email: req.body.userEmail
        })
        res.json({message: "User registered!"});
    } catch (error) {
        res.json({message: "That email is already registered!"});
    }

    
})

app.get("/api/users", (req, res) => {

})

const Port = 5001;

app.listen(Port, () =>{
    console.log("Server are running on Port" + Port)
})