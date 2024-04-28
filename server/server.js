require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");
const connectDB = require("./utils/db");

app.use(express.json());

app.use("/api/auth", authRouter);

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port : ${PORT}`);
  });
});
