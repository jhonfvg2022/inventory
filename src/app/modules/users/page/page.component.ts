import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from 'src/app/models/iuser';
import { AuthService } from 'src/app/services/auth.service';

import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<IUser> | null;
  sortDirections: NzTableSortOrder[];
  filterMultiple: boolean;
}


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {


  editCache: { [key: string]: { edit: boolean; user: IUser } } = {};
  users!: IUser[];

  emailCol: ColumnItem = {
    name: 'email',
    sortOrder: 'ascend',
    sortFn: (a: IUser, b: IUser) => a.email.localeCompare(b.email),
    sortDirections: ['ascend', 'descend'],
    filterMultiple: true
  }


  constructor(private usersService: UsersService, private authService: AuthService) {
    this.authService.protectedRoute();
  }

  ngOnInit(): void {
    this.usersService.getUser()
      .subscribe((data: IUser[]) => {
        this.users = data;
        this.updateEditCache();
      });

    this.usersService.addUser({
      "id": "123456789",
      "name": "jhon",
      "lastname": "valencia",
      "email": "jhonfredy@outlook.com",
      "phone": "3137255990",
      "group": "123456",
      "password": "123456",
      "photo": "",
      "rol": "users"
    }).subscribe((data: IUser) => {
      console.log("add:", data);
    });
  }

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.users.findIndex(item => item.id === id);
    this.editCache[id] = {
      user: { ...this.users[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.users.findIndex(item => item.id === id);
    Object.assign(this.users[index], this.editCache[id].user);
    this.editCache[id].edit = false;
  }

  deleteUser(id: string): void {

  }

  updateEditCache(): void {
    this.users.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        user: { ...item }
      };
    });
  }

  //Col

  listCol: ColumnItem[] = [
    {
      name: 'email',
      sortOrder: 'ascend',
      sortFn: (a: IUser, b: IUser) => a.email.localeCompare(b.email),
      sortDirections: ['ascend', 'descend'],
      filterMultiple: true
    },
    {
      name: 'email',
      sortOrder: 'ascend',
      sortFn: (a: IUser, b: IUser) => a.email.localeCompare(b.email),
      sortDirections: ['ascend', 'descend'],
      filterMultiple: true
    }
  ]

}
