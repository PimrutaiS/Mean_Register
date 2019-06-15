import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SingupComponent} from './component/singup/singup.component' //1.Page Sing Up
import {SinginComponent} from './component/singin/singin.component' //2.Page Sing in
import {ProfileComponent} from './component/profile/profile.component' //1.Page Profile


const routes: Routes = [
  
  {path : "singup" , component: SingupComponent},

  {path : "singin" , component: SinginComponent},

  {path : "profile", component: ProfileComponent},

  {path: "" , redirectTo: '/singin' , pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
