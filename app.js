const express = require("express");
const bodyParser = require("body-parser");
const { slotBookRoutes, basePath } = require("./modules/slotBook/slotBookRoutes");

const app = express();

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("I am a server");
});

app.use(basePath, slotBookRoutes);

app.use((req, res, next) => {
    const error = new Error("Route Not found.. to");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: { message: error.message } });
});

module.exports = app;
