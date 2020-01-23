const mongoose=require('mongoose');

const UserSchema = mongoose.model('userdetail',{
    name:  String,
    password: String,
    authtoken:   String,
    email: String,
    createdDate: { type: Date, default: Date.now },
    hidden: Boolean,
     profilePic: { data: Buffer, contentType: String }    
  });

module.exports=User;
