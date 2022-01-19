import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedService {


  private sharedInfoLoginSource = new BehaviorSubject<any>({ token: '', email: '' });
  public sharedInfoLogin = this.sharedInfoLoginSource.asObservable();

  constructor() {
    // this.msj = new Observable(subscriber => {
    //   console.log("Hello");
    //   subscriber.next(42);
    // });

    // this.countdown.subscribe(x => {
    //   console.log(x);
    // });
    // this.countdown.subscribe(x => {
    //   console.log(x);
    // });

  }

  updateSharedInfoLogin(info: any): void {
    this.sharedInfoLoginSource.next(info)
  }
}
