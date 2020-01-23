const express = require('express')
const app = express();
const mongoose=require('mongoose');
const userrouter=require('./conntroller/userDashboard');
const userdasrouter=require('./conntroller/usercontroller');
const port = 3000;
mongoose.connect('mongodb://localhost:27017/task-manager', {useNewUrlParser: true,useUnifiedTopology: true });

app.use(userdasrouter);
app.use(userrouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports=mongoose;