const connectDB = require("./db/connect");
const express = require("express");
const app = express();
require("dotenv").config();
const notFound = require("./middleware/not-found.js");
const errorHandleMiddleWare = require("./middleware/error-handler");
const tasks = require("./routes/tasks");

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandleMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening port ${port}`));
  } catch (error) {}
};

start();
