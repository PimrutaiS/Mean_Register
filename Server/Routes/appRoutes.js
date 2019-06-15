//ส้ราง Router ใช้สำหรับจัดการกับ Api ที่ยิงเข้ามา

var express = require('express');

var router = express.Router();

var bodyparser = require('body-parser');


//เรียกใช้ db Schema 
var UserModel = require('../Models/dbSchema');

router.use(bodyparser.json()); //จำเป็นต้องเรียกมาใช้

//1.Fn เก็บข้อมูล ลง Database
router.post('/singup' , (req , res , next)=>{

    var   name = req.body.name; 
    var   lastname = req.body.lastname;
    var   email = req.body.email;
    var   password = req.body.password;

    var query2 = {email : email }

    UserModel.find(query2, (err,doc)=>{ 

        if ( doc.length > 0){ //เช็คว่ามีข้อมูลหรือเปล่า ถ้ามี จะแจ้งว่า : มีข้อมูลอยู่แล้ว
            res.json({result : "มีข้อมูลอยู่แล้ว" }); 
        }
        else { //ถ้าไม่มี จะลงในนี้

            UserModel.create(req.body, (err , doc)=>{

            if(err) { //ถ้า Error
               
                res.json({result : "Fail" });

            }

            //ถ้าไม่ Error ให้ส่งแบบนี้กลับไป

            res.json({result : "Sucess" , "Name : ":name , "Lastname : ":lastname , "Email : ":email , "Password : ":password });

            res.end();
            
            });
        
        };

    });

});


router.post('/singin' , (req , res , next)=>{

    var   email = req.body.email;
    var   password = req.body.password;

    var query1 = {email:email , password:password};

    UserModel.find(query1, (err,doc)=>{

        if ( !doc.length > 0){

            res.send("รหัสผ่าน หรือ Email ไม่ถูกต้อง");

          }
        else{

            res.send("ยินดีต้อนรับเข้าสู่ระบบค่ะ");
            //Set ค่าที่ค้างอยู่ เพื่อเริ่มรับข้อมูลใหม่       

        }

    });
});


router.get('/profile' , (req , res , next) => {
/*
    UserModel.findOne({ email : req.email},
        
        (err,doc)=>{
            
            if (!doc){
                res.json({result : 'fail'})
            }
            else
            {  
                res.json({result : "Success" ,doc});
                res.end();
            }
        });    
      
  */

    UserModel.find((err,doc)=>{

        res.json({result : "Success" , doc});
        res.end();

    });

});


module.exports = router;