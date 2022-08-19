const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema(
  {
    newstitle: {
      type: String,
    },
    newsdetail: {
      type: String,
    },
    employee: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = News = mongoose.model("news", NewsSchema);
