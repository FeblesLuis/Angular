import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();    
  }

  getUsers() {
    this.userService.getUsers().subscribe({ //De obtener usuarios quiero la data de ellos del link del Json
      next: (data) => { //Reciben un objeto, en este caso la data del json
        console.log(data);
        this.userService.users = data;        
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }
}