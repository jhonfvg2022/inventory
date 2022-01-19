import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private sharedService: SharedService, private route: Router) { }
  async login(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const url = 'http://localhost:3000/api/login';
      this.http.post(url, { email: email, password: password }).subscribe(data => {
        if (data.hasOwnProperty('token')) {
          console.log(data);
          var json= JSON.stringify(data);
          var temp =JSON.parse(json)
          this.sharedService.updateSharedInfoLogin({ token: temp.token, email: email });          
          //localStorage.setItem('token', JSON.stringify(data));
          this.route.navigate(['/home']);
          resolve(true);
        }
        else {
          //localStorage.removeItem('token');
          resolve(false);
        }
      })
    })
  }

  logout(): void {
    //localStorage.setItem('token', '');
    this.sharedService.updateSharedInfoLogin({ token: '', email: '' });
    this.route.navigate(['/auth']);
  }
}
