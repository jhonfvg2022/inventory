import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/iuser';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = "http://localhost:3000/api/users";

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUser(): Observable<IUser[]> {
    const headerDict = {
      'Content-Type': 'text/html; charset=utf-8',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'authorization': 'Bearer ' + this.authService.token
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get<IUser[]>(this.url, requestOptions);
  }
}
