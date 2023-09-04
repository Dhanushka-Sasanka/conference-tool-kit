import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../@business/services/notification.service';
import {AuthenticationService} from '../../auth/authentication.service';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {NotificationType} from '../../@business/enum/notificaiton-type.enum';
import {UserLoginRequest} from '../../@business/model/UserLoginRequest';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  error: any;
  loggingData: any;

  constructor(private authentication: AuthenticationService,
              private notificationService: NotificationService,
              private router: Router,
              private auth: AuthService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userName': new FormControl(null, Validators.required),
      'userPwd': new FormControl(null, Validators.required)
    });
  }

  loginAction() {
    const username = this.loginForm.get('userName').value;
    const password = this.loginForm.get('userPwd').value;
    const user = new UserLoginRequest();
    user.userName = username;
    user.userPwd = password;
      console.log(user);
    if (username === 'Admin' && password === '1234') {
      this.router.navigateByUrl('/chair/dashboard');
    } else if (username === 'Student' && password === '1234') {
      this.router.navigateByUrl('/student/dashboard');
    } else {
      this.notificationService.notify(NotificationType.ERROR, 'Not a valid user.');
    }
    // this.authentication.login(user).subscribe((response) => {
    //
    //     console.log(response);
    //     this.loggingData = response;
    //     this.authentication.saveToken(this.loggingData.access_token);
    //     const tempUser = new UserLoginRequest();
    //     // tempUser.email = this.loggingData.user;
    //     // this.authentication.addUserToLocalCache(tempUser);
    //     // this.auth.changeUserDetails(tempUser);
    //     // this.auth.changeAuthStatus(true);
    //
    //   },
    //   error => {
    //     this.handleError(error);
    //   });
  }

  handleError(error: any) {

    this.error = error.errors;
    alert(this.error);
    this.notificationService.notify(NotificationType.ERROR, this.error.message);

  }

}
