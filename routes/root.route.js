const { rootGetController } = require("../controllers/root.controller");

const router = require("express").Router();

router.get("/", rootGetController);

module.exports = router;
