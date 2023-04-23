const express = require("express");
const mongoose = require("mongoose")
const db = require("./db");
const Pizza = require('./models/pizzaModel')

const app = express();

app.use(express.json());
const pizzaRoute = require('./routes/pizzaRoute')
const userRoute = require('./routes/userRoute')


app.use('/api/pizzas/',pizzaRoute)
app.use('/api/users/',userRoute)

app.get("/",(req,res)=>{
res.send("Server is Running", +port)
});


const port = process.env.PORT || 8000;

// if(process.env.NODE_ENV ="production"){
//     app.use(express.static("mern/build"));
//     const path = require("path");
//     app.get("*",(req,res) =>{
//         res.sendFile(path.resolve(__dirname,'mern','build','index.html')
//         );
//     })
// }

app.listen(port , ()=> `Server is running on port`);