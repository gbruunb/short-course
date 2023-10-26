const { connection } = require("./DBConnection");


function home(req, res) {
    try {
        connection.query("CREATE TABLE `student` (`id` int(11) NOT NULL,`course_id` int(11) NOT NULL,`name` varchar(255) NOT NULL,`nickname` varchar(255) NOT NULL,`student_id` varchar(255) NOT NULL,`years` varchar(255) NOT NULL,`contact` varchar(255) NOT NULL,`expect` varchar(255) NOT NULL,`timestamp` int(11) DEFAULT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;", (err, result, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send
            }
            
            res.render('home')
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send
    }
    res.render('home')
}

module.exports = { home }