const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = Employee = mongoose.model("employee", EmployeeSchema);
