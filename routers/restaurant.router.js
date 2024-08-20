const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controllers");
const {authJwt} = require("../middleware");

//Create a restaurant
//POST http://localhost:500/api/v1/restaurant
router.post("/",[authJwt.verifytoken, authJwt.isModOrAdmin], restaurantController.create);

//Get All restaurant
router.get("/", restaurantController.getAll)

//Get a restaurant by Id
router.get("/:id", [authJwt.verifytoken], restaurantController.getByid);

//update a restaurant
router.put(
    "/:id",
    [authJwt.verifytoken, authJwt.isModOrAdmin],
    restaurantController.update
);

//delete a restaurant
router.delete(
    "/:id",
    [authJwt.verifytoken, authJwt.isAdmin],
    restaurantController.delete
);
module.exports = router;
