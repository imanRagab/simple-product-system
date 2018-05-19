import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // get data from api

  get(endPoint: string): Observable<any> {

    return this.http.get(this.apiUrl + endPoint);
  }
}
