import { Component, OnInit } from '@angular/core';
//Service
import { UserService } from "../services/user.service";
@Component({
  selector: 'app-verifiy-email',
  templateUrl: './verifiy-email.component.html',
  styleUrls: ['./verifiy-email.component.css']
})
export class VerifiyEmailComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
