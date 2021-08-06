var Sequelize=require("sequelize");
var db=new Sequelize("brainly","root","wahyu355A" ,{
    dialect:"mysql",
    host:"localhost"
});

module.exports = db;