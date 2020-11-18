import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url='https://booky-backend.netlify.app/.netlify/functions/users-login';
  constructor(private _http:HttpClient) { }


  career(userData){
    return this._http.post<any>(this._url,userData);
  }

  getCareer():Observable<any>{
    return this._http.get<any[]>(this._url);
}
}