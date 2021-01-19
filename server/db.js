const Sequelize = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('journal-walkthrough', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});


sequelize
    .authenticate()
    .then(() => {
        console.log("connection has been established successfully.")
    })
    .catch((err)=> {
        console.error("unable to connect to the databases:", err);
    });

module.exports = sequelize;