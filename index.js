// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8080";

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.status(200).send("WMM");
  });

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
  });

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });