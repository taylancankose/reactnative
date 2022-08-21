const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");

const authRouter = require("./routers/authRouter");
const User = require("./models/User.js");

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://teco:teco@cluster0.qmtutqd.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  });

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

// Server connection
const port = 3000;
app.listen(port, () => {
  console.log(`Server Running on PORT: ${port}`);
});
