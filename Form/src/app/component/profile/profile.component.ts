import { Component, OnInit } from '@angular/core';
import {UserService} from '../../ShareService/user.service'
import {Router} from '@angular/router'
import {UserModel} from '../../ShareService/UserModel'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  User : UserModel;
  constructor(private UserService:UserService , private Router:Router) { }

  ngOnInit() {

    this.profile();

  }

  profile(){

    
    this.UserService.profile().subscribe(
      res => {
        
        this.User = res['doc'];
    
      },
      err => { 
        console.log(err);
        
      })
  }


  onLogout(){
    this.Router.navigate(['/singin']);
  }
  

}
