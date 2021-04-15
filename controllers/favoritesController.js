
const router = require("express").Router();
const { User } = require("../models/User");

router.get("/:userid/favorites", (req, res) => {
    console.log(req.params.userid)
    res.json({message: req.params.userid})
})

router.put("/:userid/:favorite", async (req, res) => {
    const restaurant = req.params.favorite
    const userid = req.params.userid
    const updatedUser = await User.find(
        { _id: userid},
        {$set: {favRestaurants: restaurant}})
    res.status(200).json({updatedUser})
    // const addedRestaurant = await 
})
module.exports = router