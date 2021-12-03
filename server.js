const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./.env" });

const server = require("./src/app");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"));

const port = process.env.PORT;

server.listen(port, () => console.log(`Server listening on port ${port}...`));
