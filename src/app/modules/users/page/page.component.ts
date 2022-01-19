import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from 'src/app/models/iuser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  users!: IUser[];
  constructor(private usersService: UsersService, private authService: AuthService) {
    this.authService.protectedRoute();
  }
  ngOnInit(): void {
    this.usersService.getUser()
      .subscribe((data: IUser[]) => {
        this.users = data;
      });
  }
}
