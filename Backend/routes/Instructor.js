const router = require("express").Router();

const {
  verifyInstructor,
  createInstructor,
  instructorLogin,
} = require("../controllers/instructor/instructorManage");
const {
  updateProfile,
  updateInstructorCourse,
  fetchInstructorCourse,
} = require("../controllers/instructor/instructorActions");
const instructorAuth = require("../middlewares/instructor/instructorAuth");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT, { expiresIn: "1d" });
};

router.post("/signup", createInstructor);

router.post("/verify", verifyInstructor);

router.post("/login", instructorLogin);

router.post("/update-profile", instructorAuth, updateProfile);

router.post("/update-course", instructorAuth, updateInstructorCourse);

router.get("/fetch-course", instructorAuth, fetchInstructorCourse);

module.exports = router;
