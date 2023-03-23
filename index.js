const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors")
const pinRoute = require("./routes/pins")
const userRoute = require("./routes/users")

dotenv.config();

app.use(cors())
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("MongoDB Connected!")
}).catch((err) => console.log(err));

app.use("/api/pins",pinRoute);
app.use("/api/users",userRoute);

app.listen(process.env.PORT,()=>{
  console.log("Backend Server is running");
})
