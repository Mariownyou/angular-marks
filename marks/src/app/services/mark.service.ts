import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://api.dnevnik.ru/v2';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'Access-Token': ''
  })
};

@Injectable({
  providedIn: 'root'
})
export class MarkService {

  login: String
  password: String
  token: String

  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {
    const data = {
      "client_id": "1d7bd105-4cd1-4f6c-9ecc-394e400b53bd",
      "client_secret": "5dcb5237-b5d3-406b-8fee-4441c3a66c99",
      "username": this.login,
      "password": this.password,
      "scope": "Schools,Relatives,EduGroups,Lessons,marks,EduWorks,Avatar,EducationalInfo,CommonInfo,ContactInfo,FriendsAndRelatives,Files,Wall,Messages",
    }
    return this.http.post(`${baseUrl}/authorizations/bycredentials`, data, httpOptions)
  }

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/users/me`);
  }
}
