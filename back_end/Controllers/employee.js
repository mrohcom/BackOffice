const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Employee = require("../Models/employee");

exports.register = async (req, res) => {
  try {
    // res.send("Everthing Is Okay Controller");

    //Check User
    const { username, password } = req.body;
    let employee = await Employee.findOne({ username });
    if (employee) {
      // console.log(employee);
      //return res.status(400).send("Employee Already");
      return res.json({ result: "not" });
    }
    //console.log(employee);

    // Insert to database
    employee = new Employee({
      username,
      password,
    });

    // Encrypt Password
    const salt = await bcrypt.genSalt(10);
    employee.password = await bcrypt.hash(password, salt);

    // Insert to database
    await employee.save();

    //res.send("Register is Okay");
    res.json({ result: "ok", mesage: JSON.stringify(employee) });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    let employee = await Employee.findOneAndUpdate({ username }, { new: true });

    if (employee && employee.enabled) {
      const isMatch = await bcrypt.compare(password, employee.password);
      //res.send(isMatch);
      if (!isMatch) {
        return res.status(400).send("Password Invalid");
      }
      //PayLoad

      const payload = {
        user: employee.username,
      };

      // Generate Token

      jwt.sign(
        payload,
        process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.JWT_EXPIRES_IN },
        (err, token) => {
          if (err) throw err;
          res.json({
            result: "ok",
            token: token,
            mesage: JSON.stringify(payload),
          });
          //res.json({ token, payload });
        }
      );
    } else {
      return res.status(400).send("User Not Found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error Login");
  }
};

exports.listEmployee = async (req, res) => {
  try {
    res.send("Everthing Is Okay listEmployee");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.editEmployee = async (req, res) => {
  try {
    res.send("Everthing Is Okay editEmployee");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    res.send("Everthing Is Okay deleteEmployee");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
