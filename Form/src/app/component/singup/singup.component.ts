import { Component, OnInit } from '@angular/core';
import {UserService} from '../../ShareService/user.service'
import {Router} from '@angular/router' //เวลาส่งข้อมูลไปหน้าอื่น

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private UserService : UserService , private Router : Router) { }

  ngOnInit() {

   

  }


  OnSubmit(SingUp){

    //สร้างตัวแปรเพื่อเก็บ Data : SingUp

    //let data = {name : "pimrutai" , lastname : "suwanchaum" , email : "mook_pimrutai@hotmail.com" , password : "sakura32986" }

    alert(JSON.stringify(SingUp));
    
    this.UserService.singup(SingUp).subscribe(
      
      res=>{ 
        
        alert(JSON.stringify(res));

        this.Router.navigate(['/singin']);

    });

  }
}
  

