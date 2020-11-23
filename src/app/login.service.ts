import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url='https://booky-backend.netlify.app/.netlify/functions/users-login';
  url='https://booky-backend.netlify.app/.netlify/functions/users-signup';

  constructor(private _http:HttpClient) { }


  signup(userData){
    return this._http.post<any>(this.url,userData);
  }

  signin(user:any):Observable<any>{
    return this._http.post<any[]>(this._url,user);
}
}