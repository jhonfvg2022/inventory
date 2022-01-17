import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

 
  items = new Array<any>();

  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url = 'http://localhost:3000/api/users';
    var token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoiMCIsImlhdCI6MTY0MjM5MTQ0NiwiZXhwIjoxNjQyNDc3ODQ2fQ.wJ258FGwXxRi0fWfK2y3_vZsauaB6OS7cwZ6xeIMtsk'
    const headerDict = {
      'Content-Type': 'text/html; charset=utf-8',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'authorization': token
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    this.http.get<any>(url, requestOptions).subscribe(data => {
      this.items = data.users;
      console.log(this.items);
    })
  }

  startEdit(): void {

  }
}
