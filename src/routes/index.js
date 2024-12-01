const express = require("express");
const { register, login } = require("../controllers/authController");
const { listUsers, getUserDetails } = require("../controllers/userController");
const { authenticateToken, isAdmin } = require("../middleware/authMiddleware");
const { check, validationResult } = require("express-validator");

const router = express.Router();

// Registration route with validation
router.post(
  "/register",
  [
    check("name").notEmpty().withMessage("Name is required"),
    check("email").isEmail().withMessage("Invalid email format"),
    check("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    check("role").isIn(["Admin", "Staff"]).withMessage("Role must be Admin or Staff"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  register
);

// Login route
router.post("/login", login);

// List users (Admin only)
router.get("/users", authenticateToken, isAdmin, listUsers);

// Get user details (Admin or user accessing their own details)
router.get("/users/:id", authenticateToken, getUserDetails);

module.exports = router;
