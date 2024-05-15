const { body, validationResult } = require("express-validator");

const checkUserName = () =>
  body("username")
    .trim()
    .notEmpty()
    .escape()
    .withMessage("Username is required")
    .isLength({ min: 5 })
    .withMessage("Username must have at least 5 characters");

const checkEmail = () =>
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is missing")
    .isEmail()
    .withMessage("Not a valid email");

const checkPassword = () =>
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password must not empty")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters");

const checkDOB = () =>
  body("dob")
    .trim()
    .notEmpty()
    .withMessage("DOB must not be empty")
    .isISO8601()
    .toDate()
    .withMessage("DOB mus be valid ISO date");

const userErrorMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  const errorMessages = errors.array().map((err) => err.msg);

  if (!errors.isEmpty()) {
    next(new Error(errorMessages.join(", ")));
  } else {
    next();
  }
};

module.exports = {
  checkUserName,
  checkEmail,
  checkPassword,
  checkDOB,
  userErrorMiddleware,
};
