import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user: Users= {email:"",password: ""}
  constructor(private us: UsersService,private router: Router) { }

  ngOnInit(): void {
  }
submitLogin(){
this.us.login(this.user)
.then((userData)=>{
  sessionStorage.setItem("username",JSON.stringify(userData.user.email))
  this.router.navigateByUrl("/dashboard")
})
.catch(()=>{
  alert("Wrong Email Or Password")
})
}
loginWithGoogle(){
this.us.loginWithGoogle()
.then((userData)=>{
  sessionStorage.setItem("username",JSON.stringify(userData.user.displayName))
  this.router.navigateByUrl("/dashboard")
})
.catch((err)=>{
  alert(err.message)
})
}
}
