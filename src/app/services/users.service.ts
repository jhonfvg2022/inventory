import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IUser } from '../models/iuser';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlBase: string = "http://localhost:3000/api/";

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUser(): Observable<IUser[]> {    
    const headers = { 'content-type': 'application/json', 'authorization': 'Bearer ' + this.authService.token, 'filters':'{}' }    
    return this.http.get<IUser[]>(this.urlBase + 'users', { 'headers': headers });
  }


  addUser(userInfo: IUser): Observable<IUser> {   
    const headers = { 'content-type': 'application/json', 'authorization': 'Bearer ' + this.authService.token }
    const body = JSON.stringify(userInfo);
    console.log(body);
    return this.http.post<IUser>(this.urlBase + 'addUser', body, { 'headers': headers });
  };

}
