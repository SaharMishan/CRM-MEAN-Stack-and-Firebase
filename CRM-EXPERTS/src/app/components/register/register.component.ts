import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

user: Users = {email:"",password:""}

  constructor(private us: UsersService,private router: Router,) { }

  ngOnInit(): void {

  }
register(){
  this.us.register(this.user)
    .then(()=>{
alert("Register successfully")
this.router.navigateByUrl("/login")
    })
    .catch((error)=>{
      alert(error.message)
    })
  }
}

