// External Imports

const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
const loginRouter = require("./router/loginRouter");
const userRouter = require("./router/userRouter");
const inboxRouter = require("./router/inboxRouter");

// Internal imports

const app = express();
dotenv.config();

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("database connect successfully"))
  .catch((err) => console.log(err));

//   request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use("/", loginRouter);
app.use("/users", userRouter);
app.use("/inbox", inboxRouter);

// 404 not found handling
app.use(notFoundHandler);

// common error handling
app.use(errorHandler);

app.listen(process.env.APP_PORT, () => {
  console.log(`App listening to port ${process.env.APP_PORT}`);
});
