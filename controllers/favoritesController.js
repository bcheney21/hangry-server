
const router = require("express").Router();
const { User } = require("../models/User");

router.get("/:userid/favorites", (req, res) => {
    console.log(req.params.userid)
    res.json({message: req.params.userid})
})

module.exports = router