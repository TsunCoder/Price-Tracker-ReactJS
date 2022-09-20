const categoryController = require("../controllers/categoryController");
const router = require("express").Router();


router.get("/", categoryController.getCategory);

module.exports = router;
