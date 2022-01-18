import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory';


  message: string = "Iniciar Sesión"
  constructor(private sharedService: SharedService) {
    this.sharedService.countdown.subscribe(x=>{
      this.message=x;
    })
   }

  
}
