import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private authService: AuthService, private message: NzMessageService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.authService.login(this.validateForm.value.email, this.validateForm.value.password).then(res => {
        if (res) {
          this.message.create('success', 'Inicio de sesión exitoso');
          console.log('submit', this.validateForm.value);          
        }
        else {
          this.message.create('error', 'Credenciales incorrectas');
        }
      });

      // const url = 'http://localhost:3000/api/login';     

      // this.http.post(url, { email: this.validateForm.value.email, password: this.validateForm.value.password }).subscribe(data => {
      //   console.log(data);
      // })

      // const url = 'http://localhost:3000/api/users';
      // var token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoiMCIsImlhdCI6MTY0MjM5MTQ0NiwiZXhwIjoxNjQyNDc3ODQ2fQ.wJ258FGwXxRi0fWfK2y3_vZsauaB6OS7cwZ6xeIMtsk'
      // const headerDict = {
      //   'Content-Type': 'text/html; charset=utf-8',
      //   'Accept': 'application/json',
      //   'Access-Control-Allow-Headers': 'Content-Type',
      //   'authorization': token
      // }
      // const requestOptions = {
      //   headers: new HttpHeaders(headerDict),
      // };
      // this.http.get(url, requestOptions).toPromise()
      //   .then(data => {
      //     console.log('submit', data);
      //   });
      //console.log('submit', this.validateForm.value);

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
