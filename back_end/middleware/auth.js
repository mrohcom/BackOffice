const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    const token = req.headers["authtoken"];

    if (!token) {
      return res.status(401).send("No Token");
    }

    const decodeed = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // req.user = decodeed.user;
    console.log(decodeed);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send("Token Invaid!!");
  }
};
