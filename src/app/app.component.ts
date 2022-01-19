import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  stateLogin: any = { token: '', email: '' };

  constructor(private authService:AuthService) {
    this.authService.infoLogin.subscribe(infoLogin => {
      this.stateLogin = infoLogin;     
    })
  }

  logout():void{
    this.authService.logout();
  }
}
