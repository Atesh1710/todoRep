//mongodb+srv://admin1:admin1@atesh.crc1i.mongodb.net/?retryWrites=true&w=majority
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser")
const todoRoutes = require("./routes/todoRoute");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://admin1:admin1@atesh.crc1i.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

  app.use("/api/todos",todoRoutes);

  app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
  })
