const express=require("express");
const app=express();
const user=require("./route/user")
const morgan=require("morgan");
const bodyParser=require("body-parser");
const path=require('path')
const session = require('express-session');

// sesion
app.use(session({secret: 'ssshhhhh'}));
// =====

app.engine('ejs', require('ejs-locals'));
app.use(express.static(path.join(__dirname,'static')))
app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/",user);

// index page
// app.get('/', function(req, res) {
//     res.render('pages/index');
//   })

// app.get('/kate', function(req, res) {
//    res.render('pages/kate');
// })

// app.use((req,res,next) => {
//         res.status(200).json({
//             massage:"ressful"
//         })
//     })

module.exports=app;    