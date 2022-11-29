import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
username!:string | null
  constructor(private us: UsersService,private router: Router) { }

  ngOnInit(): void {
    this.username = JSON.parse(sessionStorage.getItem("username")!)
  }
logOut(){
  this.us.logOut().then(()=>{
    sessionStorage.removeItem("username");
    this.router.navigateByUrl("/login");
    this.username = null
  })
}
}
