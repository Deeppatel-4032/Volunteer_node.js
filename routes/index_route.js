const express = require("express");
const router = express.Router();
const con = require("../controllers/controllers.js");

router.get("/", con.defaultCon);
router.post("/volunteerCon", con.volunteerCon);
router.get("/editVolCon/:id", con.editVolCon);
router.post("/updateVolCon/:id", con.updateVolCon);
router.get("/deleteVolCon/:id", con.deleteVolCon);

module.exports = router;

