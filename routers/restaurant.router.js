const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");

//Craete a restaurant
//POST http://localhost:500/api/v1/restaurant
router.post("/", restaurantController.create);

//Get a restaurant
router.get("/", restaurantController.getAll)

router.get("/", restaurantController.getBy);

module.exports = router;
