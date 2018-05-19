import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  // get data from api

  get(endPoint: string): Observable<any> {

    return this.http.get(this.apiUrl + endPoint);
  }

  // post data to api

  post(endPoint: string, data: object): Observable<any> {

    return this.http.post(this.apiUrl + endPoint, data, this.httpOptions);
  }

  // delete data from api

  delete(endPoint: string): Observable<any> {

    return this.http.delete(this.apiUrl + endPoint, this.httpOptions);
  }

}
