const dotenv = require("dotenv");
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION!! Shutting down...");
  process.exit(1);
});

dotenv.config({ path: "./.env" });

const app = require("./src/app");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"));

const port = process.env.PORT;

const server = app.listen(port, () =>
  console.log(`Server listening on port ${port}...`)
);

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLE REJECTION!! Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});

console.log(x);
