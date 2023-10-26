const { connection } = require("./DBConnection");
var randomStr = require("randomstring");

function createCourseForm(req, res) {
  res.render("lecturer/create-course");
}

function addCourse(req, res) {
  const {
    lec_name,
    lec_nickname,
    role,
    date,
    time,
    course_name,
    des,
    device,
    tool,
    more,
    contact,
    content,
    picture
  } = req.body;
  const secret_key = randomStr.generate(30);
  try {
    connection.query(
      "INSERT INTO course(lec_name, lec_nickname, role, date, time, course_name, des, device, tool, more, contact, content, secret_key, picture) VALUE(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        lec_name,
        lec_nickname,
        role,
        date,
        time,
        course_name,
        des,
        device,
        tool,
        more,
        contact,
        content,
        secret_key,
        picture
      ],
      (err, result, fields) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }

        return res.render("lecturer/secret-key", { secret_key: secret_key });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
}

function verifyID(req, res) {
  const id = req.params.id;
  res.render("lecturer/verify-id", { course_id: id });
}

function editCourseForm(req, res) {
  const id = req.params.id;
  try {
    connection.query(
      "SELECT * FROM course WHERE id = ?",
      [id],
      (err, result, fields) => {
        if (err) {
          console.log(err);
          return res.status(400).send;
        }
        if (req.body.secret_key === result[0].secret_key) {
          res.render("lecturer/edit-course", { detail: result[0] });
        } else {
          res.render("lecturer/cannot-access");
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send;
  }
}

function editCourse(req, res) {
  const {
    lec_name,
    lec_nickname,
    role,
    date,
    time,
    course_name,
    des,
    device,
    tool,
    more,
    contact,
    content,
    picture
  } = req.body;
  const id = req.params.id
  try {
    connection.query(
      "UPDATE course SET lec_name = ?, lec_nickname = ?, role = ?, date = ?, time = ?, course_name = ?, des = ?, device = ?, tool = ?, more = ?, contact = ?, content = ?, picture = ? WHERE id = ?",
      [
        lec_name,
        lec_nickname,
        role,
        date,
        time,
        course_name,
        des,
        device,
        tool,
        more,
        contact,
        content,
        picture,
        id,
      ],
      (err, result, fields) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }

        return res.render('success',{message:"อัปเดตคอร์สเรียบร้อย!"})
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
}
function deleteCourse(req, res) {
  const id = req.params.id
  const { name, course_name, description } = req.body;
  try {
    connection.query(
      "DELETE FROM course WHERE id = ?",
      [id],
      (err, result, fields) => {
        if (err) {
          console.log("insert error");
          return res.status(400).send();
        }
        return res.render('success',{message:"ลบคอร์สเรียบร้อย!"})
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
}

module.exports = {
  createCourseForm,
  addCourse,
  editCourseForm,
  editCourse,
  deleteCourse,
  verifyID,
};
