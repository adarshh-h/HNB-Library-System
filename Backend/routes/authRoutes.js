const express = require("express");
const { librarianLogin, studentLogin, logout, checkSession, forgotPassword, verifyOtp } = require("../controllers/authController");

const router = express.Router();

router.post("/librarian-login", librarianLogin);
router.post("/student-login", studentLogin);
router.post("/logout", logout);
router.get("/check-session", checkSession);
router.post("/forgot-password", forgotPassword); // Request OTP
router.post("/verify-otp", verifyOtp); // Verify OTP & Reset Password

module.exports = router;