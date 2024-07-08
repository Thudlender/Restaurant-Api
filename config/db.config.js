require("dotenv").config();

module.exports = {
  HOST: "default",
  USER: "ep-nameless-haze-a49cw95m-pooler.us-east-1.aws.neon.tech",
  PASSWORD: "wkPyB0hYnag4",
  DB: "verceldb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};