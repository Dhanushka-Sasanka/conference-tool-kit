import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from '../@business/model/User';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public host: string = environment.baseUrl;
  public loggedInUserName!: string;
  public user: Observable<User>;
  // private jwtHelper = new JwtHelperService();
  private token!: string;

  // constructor(private http: HttpClient) {
  // }
  //
  // public login(user: UserLoginRequest): Observable<HttpResponse<any> | HttpErrorResponse> {
  //     return this.http.post<HttpResponse<any> | HttpErrorResponse>(`${this.host}/api/auth/login`, user);
  // }
  //
  // public register(userSignIn: SignInRequest): Observable<HttpResponse<any> | HttpErrorResponse> {
  //   return this.http.post<HttpResponse<any> | HttpErrorResponse>(`${this.host}/api/auth/register`, userSignIn);
  // }
  //
  // public logOut(): void {
  //   this.token = '';
  //   this.loggedInUserName = '';
  //   localStorage.removeItem('user');
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('users');
  // }
  //
  // public saveToken(token: string): void {
  //   this.token = token;
  //   localStorage.setItem('token', this.token);
  // }
  //
  // public loadToken(): void {
  //   // tslint:disable-next-line:no-non-null-assertion
  //   this.token = localStorage.getItem('token')!;
  // }
  //
  // public getToken(): string {
  //   return this.token;
  // }
  //
  // public addUserToLocalCache(user: LoggedUser): void {
  //   localStorage.setItem('user', JSON.stringify(user));
  // }
  //
  // public getUserFromLocalCache(): LoggedUser {
  //   // tslint:disable-next-line:no-non-null-assertion
  //   return JSON.parse(localStorage.getItem('user')!);
  // }
  //
  // // public isLoggedIn(): boolean {
  // //   this.loadToken();
  // //   if (this.token != null && this.token !== '') {
  // //     if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
  // //       if (this.jwtHelper.isTokenExpired(this.token)) {
  // //         this.loggedInUserName = this.jwtHelper.decodeToken(this.token).sub;
  // //         return true;
  // //       }
  // //     }
  // //   } else {
  // //     this.logOut();
  // //     return false;
  // //   }
  // //   return false;
  // // }
  //
  // isValid() {
  //   this.loadToken();
  //   const token = this.getToken();
  //   // console.log("token", token);
  //   if (token) {
  //     const payload = this.payload(token);
  //     if (payload) {
  //       // console.log(payload);
  //       // console.log(this.iss);
  //       // console.log(Object.values(this.iss).indexOf(payload.iss) > -1);
  //       return (Object.values(this.iss).indexOf(payload.iss) > -1) ? true : false;
  //     }
  //   }
  //   return false;
  // }

  // payload(token: string) {
  //   const payload = token.split('.')[1];
  //   // console.log(payload);
  //   return this.decode(payload);
  // }
  //
  // decode(payload: any) {
  //   return JSON.parse(atob(payload));
  // }
  //
  // loggedIn() {
  //   // console.log(this.isValid());
  //   return this.isValid();
  // }
  private iss = {
    login: `${this.host}/api/auth/login`,
    register: `${this.host}/api/auth/register`
  };
  private userSubject: BehaviorSubject<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    console.log(this.userSubject.value);
    return this.userSubject.value;
  }

  login(userName: string, userPwd: string) {
    return this.http.post<any>(`${environment.baseUrlAuth}signin`, {userName, userPwd})
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }


}
