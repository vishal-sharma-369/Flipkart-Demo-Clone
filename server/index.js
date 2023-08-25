// You can use the import statements if you set type = module in package.json file . But i feel comfortable in this syntax that's why i am using this.
const express = require("express");
require("dotenv").config();
const { connection } = require("./database/db");
// const defaultData = require("./default");
const Router = require("./routes/route");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", Router);

const port = 4000;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
connection(username, password);
app.listen(port, () => {
  console.log("Server started listening at port: ", port);
});

// defaultData();
