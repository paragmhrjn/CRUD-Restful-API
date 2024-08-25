const express = require("express");
const mongoose = require("mongoose");
const app = express()


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get("/", (req, res) => {
    res.send("Hello from Node API Server");
});

mongoose.connect("mongodb+srv://chandraparag:ocL54Z00LaAQjzLc@crud-restful.oc28p.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Crud-restful")
.then(() =>{
    console.log("Connected to MongoDB");
})
.catch(()=>{
    console.log("Error connecting to MongoDB");
}
)