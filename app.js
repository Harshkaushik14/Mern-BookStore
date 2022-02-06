const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use("/", (req, res , next)=>{
  res.send("Starting");
})

mongoose
  .connect(
    "mongodb+srv://admin:GoJK4nFMGDDGGAW6@cluster0.63hwa.mongodb.net/BOOK-STORE?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));





