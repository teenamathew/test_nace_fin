const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");

// const postsRoutes = require("./routes/posts");

const app = express();

mongoose
  .connect(
    // change for server
    "mongodb://localhost:27017/nace_fin_users",
    // "mongodb+srv://snavtechnologies:vJGopMl7eK6gzmnS@cluster0-naiyg.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true }
  ) 
  .then(() => { 
    console.log("Connected to MongoDB!");
  })
  .catch(() => {
    console.log("Connection to MongoDB failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, x-auth, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD"
  );
  next();
});

// app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
