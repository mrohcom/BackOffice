const News = require("../Models/news");

exports.newsInsert = async (req, res) => {
  try {
    const { newstitle, newsdetail } = req.body;
    news = new News({
      newstitle,
      newsdetail,
    });
    await news.save();
    const newsV2 = await News.find().sort({ createdAt: -1 }).exec();
    res.send(newsV2);
  } catch (err) {
    console.log(err);
    res.send("BAD");
  }
};

exports.listNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 }).exec();
    // res.json({ result: JSON.stringify(news) });
    res.send(news);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
