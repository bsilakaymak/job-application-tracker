const Sequelize = require("sequelize");
const db = require("../util/database");

const Job = db.define("job", {
  jobId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  jobTitle: Sequelize.STRING,
  jobDescription: Sequelize.STRING,
  companyName: Sequelize.STRING,
  companyContact: Sequelize.STRING,
  appliedVia: Sequelize.STRING,
  status: Sequelize.STRING,
  remarks: Sequelize.STRING,
  open: Sequelize.BOOLEAN,
  feedback: Sequelize.STRING,
});

module.exports = Job;
