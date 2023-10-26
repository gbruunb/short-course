const express = require('express')
const app = express() 
const router = require('./routes/router')
const path = require('path')
const session = require('express-session');
const { connection } = require('./controllers/DBConnection')

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({ extended:false }));
app.use(router)
app.use(express.static(path.join(__dirname,'public')))


app.listen(5004, () => {
    console.log("Run server at port 5000");
})