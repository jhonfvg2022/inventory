import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  loginState: boolean = false;
  emailLogin: string = '';
  stateLogin: any = { token: '', email: '' };

  constructor(private sharedService: SharedService, private authService:AuthService) {
    this.sharedService.sharedInfoLogin.subscribe(infoLogin => {
      this.stateLogin = infoLogin;
      console.log(infoLogin);
    })
  }

  logout():void{
    this.authService.logout();
  }
}
