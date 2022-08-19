const express = require("express");
const rounter = express.Router();

const {
  register,
  listEmployee,
  editEmployee,
  deleteEmployee,
  login,
} = require("../Controllers/employee");

rounter.post("/register", register);

rounter.post("/login", login);

rounter.get("/auth", listEmployee);

rounter.put("/auth", editEmployee);

rounter.delete("/auth", deleteEmployee);

module.exports = rounter;
