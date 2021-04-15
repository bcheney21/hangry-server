
const router = require("express").Router();
const User = require("../models/User");

router.get("/:userid/favorites", (req, res) => {
    console.log(req.params.userid)
    res.json({message: req.params.userid})
})

router.post("/:userid/:favorite", async (req, res) => {
    const restaurant = req.params.favorite
    const userid = req.params.userid
    const foundUser = await User.findById(userid)
    foundUser.favRestaurants.push({name: restaurant})
    const updatedUser = foundUser.save()
    res.status(200).json({updatedUser})
    // const addedRestaurant = await 
})
module.exports = router