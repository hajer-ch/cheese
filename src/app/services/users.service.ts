import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }
  userURL = 'http://localhost:3000';
  signup(user:any){
    return this.httpClient.post<{message:string}>(`${this.userURL}/signup`, user);
  }

  login(user:any){
    return this.httpClient.post<{message:string, user:any}>(`${this.userURL}/login`, user);
  }
}
