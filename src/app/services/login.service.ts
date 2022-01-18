import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private sharedService:SharedService) { }

  login(email:string,password:string): void {
    const url = 'http://localhost:3000/api/login'; 
    this.http.post(url, { email: email, password: password }).subscribe(data => {
      if(data.hasOwnProperty('token')){
        console.log(data);
        this.sharedService.setData();
        localStorage.setItem('token', JSON.stringify(data));        
      }
      else{
        localStorage.removeItem('token');
      } 
    }) 
  }
}
