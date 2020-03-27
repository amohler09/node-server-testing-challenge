const express = require("express");

const foodsRouter = require('../foods/foods-router');

const server = express();

server.use(express.json());

server.use('/api/foods', foodsRouter);

server.get("/", (req, res) => {
    res.status(200).json({
        api: "up "
    });
});

module.exports = server;