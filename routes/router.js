const express = require("express");
const router = express.Router();

const MainController = require("../controllers/MainController");
const LecturerController = require("../controllers/LecturerController");
const StudentController = require("../controllers/StudentController");

router.get("/", MainController.home);

router.get("/create-course-form", LecturerController.createCourseForm);
router.get("/course-list", StudentController.showCourseList);
router.get("/all-course", StudentController.allCourse);
router.post("/edit-course/:id", LecturerController.editCourseForm);

router.get("/verify-id/:id", LecturerController.verifyID);

router.post("/add-course", LecturerController.addCourse);
router.post("/update-course/:id", LecturerController.editCourse);
router.get("/delete-course/:id", LecturerController.deleteCourse);

router.get("/reg/:course_id", StudentController.regCourseForm);
router.post("/reg-course/:id", StudentController.regCourse);

router.get("/about",(req,res) => {
    res.render('about')
})


module.exports = router;
