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
  jobDescription: Sequelize.STRING(1000),
  companyName: Sequelize.STRING,
  companyContact: Sequelize.STRING,
  appliedVia: Sequelize.STRING,
  status: Sequelize.STRING,
  remarks: Sequelize.STRING(1000),
  open: Sequelize.BOOLEAN,
  feedback: Sequelize.STRING(2000),
});

module.exports = Job;
