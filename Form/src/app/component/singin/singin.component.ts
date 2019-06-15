import { Component, OnInit } from '@angular/core';
import {UserService} from '../../ShareService/user.service'
import {Router} from '@angular/router' //เวลาส่งข้อมูลไปหน้าอื่น

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(private UserService : UserService , private Router : Router) { }

  ngOnInit() {

  }

  OnSubmit(Singin){

    alert(JSON.stringify(Singin));
    
    this.UserService.singin(Singin).subscribe(
      
      res=>{ 
        
        alert(JSON.stringify(res));
        
        this.Router.navigate(['/profile']);
      
      });
  }

}
