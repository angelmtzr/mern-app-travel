const express = require("express");
const router = express.Router();

const usersRouter = require("./users");

//!router.use('/', (req, res) => res.json({message: "WELCOME TO THE BACKEND"}))
router.use('/users', usersRouter);


module.exports = router;