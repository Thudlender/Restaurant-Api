const {DataType, DataTypes} = require("sequelize");
const sequelize = require("./db");
//defind DB Schema
const Restaurant = sequelize.define("restaurant",  {
    id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
name:{
    type:DataTypes.STRING,
    allowNull: false,
},
type:{
    type:DataTypes.STRING,
    allowNull: false,
},
imageUrl:{
    type:DataTypes.STRING,
    allowNull: false,
},
});

// if true it will reset after new run dev
Restaurant.sync({ force: true })
    .then(()=>{
        console.log("table created or already exist");
    })
    .catch((error) => {
        console.log("Error creating table:", error);
    });

module.exports = Restaurant;