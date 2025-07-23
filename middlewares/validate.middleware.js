const { body, validationResult } = require("express-validator");

exports.validateNote = [
  body("title").notEmpty().withMessage("Title is required"),
  body("content").notEmpty().withMessage("Content is required"),
  body("author").notEmpty().withMessage("Author is required"),
  body("completed").isBoolean().withMessage("Completed must be a boolean"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
