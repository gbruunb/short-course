const { connection } = require("./DBConnection");

async function showCourseList(req,res) {
    // const api_key = '1c5166e56d04c863694b6e0930ea6e40'
    // const city = "Bangkok"
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}`
    // const response = await fetch(url);
    // const weatherData = await response.json();

    try {
        connection.query("SELECT * FROM course", (err, result, fields) => {
            if(err){
                console.log(err);
                return res.status(400).send
            }
            res.render('student/course-list', { courses: result })
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send
    }
}

function allCourse(req, res) {
    try {
        connection.query("SELECT * FROM course", (err, result, fields) => {
            if(err){
                console.log(err);
                return res.status(400).send
            }
            res.render('student/all-course', { courses: result })
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send
    }
}

function regCourseForm(req, res) {
    const course_id = req.params.course_id
    try {
        connection.query("SELECT * FROM course WHERE id = ?",[course_id], (err, result, fields) => {
            if(err){
                console.log(err);
                return res.status(400).send
            }
            connection.query("SELECT * FROM student WHERE course_id = ?",[course_id], (err, student, fields) => {
                if(err){
                    console.log(err);
                    return res.status(400).send
                }
                res.render('student/reg-course', { courses: result[0], student:  student})
            })
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send
    }
}

function regCourse (req, res) {
    const course_id = req.params.id
    const { name, nickname, student_id, years, contact, expect } = req.body
    try {
        connection.query("INSERT INTO student(name, nickname, student_id, years, contact, expect, course_id) VALUE(?,?,?,?,?,?,?)",[name, nickname, student_id, years, contact, expect, course_id], (err, result, fields) => {
            if(err){
                console.log(err);
                return res.status(400).send
            }
            res.render('success',{message:"ลงทะเบียนเรียนเรียบร้อย!"})
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send
    }
}

module.exports = { showCourseList, allCourse, regCourseForm, regCourse };
