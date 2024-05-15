const router = require("express").Router();
const {
  userRegisterController,
  userErrorController,
} = require("../controllers/user.controller");

const {
  checkUserName,
  checkEmail,
  checkPassword,
  checkDOB,
  userErrorMiddleware,
} = require("../middlewares/user.middleware");

router.post(
  "/register",
  checkUserName(),
  checkEmail(),
  checkPassword(),
  checkDOB(),
  userErrorMiddleware,
  userRegisterController
);

// error handle
router.use(userErrorController);

module.exports = router;
