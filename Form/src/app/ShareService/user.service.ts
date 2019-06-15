import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; /**พึ่งเพิ่มเข้ามา*/
import {UserModel} from './UserModel' /**พึ่งเพิ่มเข้ามา*/


@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserModel;

  private baseUri : String = "http://localhost:8081"

  private headers = new HttpHeaders().set('Content-type','application/json')


  constructor(private http:HttpClient) { }

  //จัดการ Api

  //1.function singup : เก็บข้อมูลลง Db
  singup(UserModel:UserModel){

    return this.http.post<any>(this.baseUri+'/singup',UserModel,{headers:this.headers});

  }


  singin(UserModel:UserModel){

    return this.http.post(this.baseUri+'/singin',UserModel,{responseType: 'text'});

  }

 
  profile(){

    return this.http.get(this.baseUri+'/profile')

  }
}
