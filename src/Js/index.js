const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
// const port = "https://localhost:3000"

const app = express();
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://riju:<password>@cluster1.doybfcn.mongodb.net/test", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
}, (err) => {
    if (err) {
        console.log("Error in connecting to database");
    } else {
        console.log("Connected to database");
    }
  }
);


app.listen(port, () => console.log(`Server started on port ${port}`));

// Path: src\Js\index.js
var person = [
    {
        name: "John",
        age: 31,
    },
    {
        name: "Riju",
        age: 30,
    },
    {
        name: "Raja",
        age: 29,
    }

];
person = JSON.stringify(person);
person = JSON.parse(person);

console.log(person.age);

async function getdata() {
  let result = await client.connect()
  

}
