import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/userInfo';
  private pmUrl = 'http://localhost:8080/api/pmInfo';
  private adminUrl = 'http://localhost:8080/api/adminInfo';

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<string> {
    return this.http.get(this.userUrl, {responseType: 'text'});
  }

  getPmInfo(): Observable<string> {
    return this.http.get(this.pmUrl, {responseType: 'text'});
  }

  getAdminInfo(): Observable<string> {
    return this.http.get(this.adminUrl, {responseType: 'text'});
  }

}
