import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface IToken {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string = '';
  private infoLoginSource = new BehaviorSubject<any>({ token: '', email: '' });
  public infoLogin = this.infoLoginSource.asObservable();

  constructor(private http: HttpClient, private route: Router) { }

  async login(email: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      const url = 'http://localhost:3000/api/login';
      this.http.post<IToken>(url, { email: email, password: password }).subscribe(data => {
        if (data.hasOwnProperty('token')) {
          console.log(data);
          this.token = data.token;
          this.infoLoginSource.next({ token: data.token, email: email });
          this.route.navigate(['/home']);
          resolve(true);
        }
        else {
          this.token = '';
          this.infoLoginSource.next({ token: '', email: '' });
          resolve(false);
        }
      })
    })
  }

  logout(): void {
    this.token = '';
    this.infoLoginSource.next({ token: '', email: '' });
    this.route.navigate(['/auth']);
  }

  protectedRoute(): void {
    if (!this.token) {
      this.route.navigate(['/home']);
    }
  }

}
