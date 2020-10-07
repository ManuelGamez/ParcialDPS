import { Component, OnInit } from '@angular/core';
//Service
import { UserService } from "../services/user.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
