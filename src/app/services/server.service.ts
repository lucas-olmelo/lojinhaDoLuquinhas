import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'https://reqres.in/api/users';

  public postUser(user: any): Observable<any> {
    return this.httpClient.post(this.url, user);
  }

  public getUsers(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
