import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginRequest} from '../@business/model/LoginRequest';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  signIn(request: LoginRequest): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'signin', request,
      {headers: new HttpHeaders({'Content-Type': 'application/json'})})
      .pipe(map((resp) => {
        sessionStorage.setItem('user', request.userName);
        sessionStorage.setItem('token', 'HTTP_TOKEN ' + resp.token);
        return resp;
      }));
  }

  signUp(request: Request): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'signup', request, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      responseType: 'text' as 'json'
    }).pipe(map((resp) => {
      return resp;
    }));
  }

  signOut() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');

    this.router.navigateByUrl('signin');
  }

  isUserSignedIn() {
    return sessionStorage.getItem('token') !== null;
  }

  getSignedInUser() {
    return sessionStorage.getItem('user') as string;
  }

  getToken() {
    return sessionStorage.getItem('token') as string;
  }

}
