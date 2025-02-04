const express = require("express");
const env = require("dotenv").config();
// middlewares
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const app = express();

app.use(express.json());
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening at port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
