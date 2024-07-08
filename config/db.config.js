require("dotenv").config();

module.exports = {
  HOST: "ep-nameless-haze-a49cw95m-pooler.us-east-1.aws.neon.tech",
  USER: "default",
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