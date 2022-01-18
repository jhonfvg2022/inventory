import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



interface IShared {
  data: string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  datos: IShared = { data: "test" };
  datos2: IShared = { data: "test" };
  msj!: Observable<any>;
  count: number = 0;


  private countdownSource = new BehaviorSubject<string>("hola");
  public countdown = this.countdownSource.asObservable();

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

  setData(): void {
    this.countdownSource.next("jhon")    
  }
}
