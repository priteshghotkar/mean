const express = require('express');
const bodyParser =require('body-parser');
const app = express();
app.use(bodyParser.json());
const userdasrouter=require('./conntroller/usercontroller');
const port = 3000;
const Usermodel=require('./models/userModel');
const mongoose=require('mongoose');
//const userrouter=require('./conntroller/userDashboard');
mongoose.connect('mongodb://localhost:27017/task-manager', {useNewUrlParser: true,useUnifiedTopology: true });
//app.use(userdasrouter);
app.use(userdasrouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports=mongoose;