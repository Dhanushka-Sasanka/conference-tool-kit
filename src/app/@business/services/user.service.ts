
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginRequest} from '../model/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host: string = environment.baseUrl;


  constructor(private http: HttpClient) { }
// need a model
  public getAllUsers(): Observable<LoginRequest[] | HttpErrorResponse> {
    return this.http.get<LoginRequest[]>(`${this.host}/api/user`);
  }



}
