import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/iuser';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = "http://localhost:3000/api/users";
  token: any;
  stateLogin: any = { token: '', email: '' };

  constructor(private http: HttpClient,private sharedService: SharedService) { 
    this.sharedService.sharedInfoLogin.subscribe(infoLogin => {
      this.stateLogin = infoLogin;
      console.log(infoLogin);
    })
  }

  getUser(): Observable<IUser[]> {
    //this.token = JSON.parse(localStorage.getItem('token') || '{}');
    //console.log(this.token);
    //var token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoiMCIsImlhdCI6MTY0MjM5MTQ0NiwiZXhwIjoxNjQyNDc3ODQ2fQ.wJ258FGwXxRi0fWfK2y3_vZsauaB6OS7cwZ6xeIMtsk'
    const headerDict = {
      'Content-Type': 'text/html; charset=utf-8',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'authorization': 'Bearer ' + this.stateLogin.token
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get<IUser[]>(this.url, requestOptions);
  }
}
