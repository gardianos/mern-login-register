const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json({ extended: false}));


//Router
app.post("/api/register", (req, res) => {
console.log(req.body)

     res.json({message: "Data received"});
})

app.get("/api/users", (req, res) => {

})

const Port = 5001;

app.listen(Port, () =>{
    console.log("Server are running on Port" + Port)
})