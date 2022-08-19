const express = require("express");
const rounter = express.Router();

const { newsInsert, listNews } = require("../Controllers/news");

rounter.post("/update", newsInsert);

rounter.get("/listnew", listNews);

module.exports = rounter;
