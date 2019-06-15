
var mongoose = require('mongoose'); //import mongoose เพื่อ จัดการควบคุม Field

mongoose.connect('mongodb://127.0.0.1/Pimrutai_DB',{ useNewUrlParser:true}); //Pimrutai_DB = Name Database

mongoose.connection.on('connected', function(){ //ถ้าเปิดสำเร็จจะเข้า log นี้

    console.log('Mongoose default connection open');

});

mongoose.connection.on('error', function(err){

    console.log('Mongoose default connection err : '+ err);

});


mongoose.connection.on('disconnected', function(){

    console.log('Mongoose defualt connection disconnected');

});
