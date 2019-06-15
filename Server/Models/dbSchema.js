//สร้าง schema เพื่อ เก็บ ลง Database

const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name : {type: String , required: true},
    lastname : {type: String , require: true},
    email : {type: String , require: true},
    password : {type: String , require: true}

},
{
    versionKey: false // ส่วนของ Version สามารถเอาออกได้ โดยการ Set = false
}
);



var UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel;