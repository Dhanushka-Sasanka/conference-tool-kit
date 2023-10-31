import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../auth/authentication.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {Role} from '../../@business/enum/role-type';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';


  constructor(private formBuilder: FormBuilder,
              // private route: ActivatedRoute,
              // private routeSnapshot: ActivatedRouteSnapshot,
              // private router: Router,
              /*private authenticationService: AuthenticationService*/
  ) {
    // redirect to home if already logged in
    /*if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
    }*/
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      userPwd: ['', Validators.required]
    });
  }

  loginAction() {
    /**
     // const username = this.loginForm.get('userName').value;
     // const password = this.loginForm.get('userPwd').value;
     // const user = new UserLoginRequest();
     // user.userName = username;
     // user.userPwd = password;
     // console.log(user);
     // if (username === 'Admin' && password === '1234') {
    //   this.router.navigateByUrl('/chair/dashboard');
    // } else if (username === 'Student' && password === '1234') {
    //   this.router.navigateByUrl('/student/dashboard');
    // } else {
    //   this.notificationService.notify(NotificationType.ERROR, 'Not a valid user.');
    // }
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
    //   }); **/

    // this.notificationService.notify(NotificationType.ERROR, this.error.message);
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    /*this.authenticationService.login(this.f.userName.value, this.f.userPwd.value)
      .subscribe(response => {
          console.log(response);
          console.log(this.route.snapshot.queryParams['returnUrl']);
          // get return url from query parameters or default to home page
          let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          const roleList = response['roles'];
          console.log(roleList);
          if (response['roles'] !== undefined) {
            // for (const roleEle of roleList) {

            const roleOnly = roleList.split('_');
            // roleOnly[1];

            if (roleList[0] === 'ROLE_ADMIN' && this.routeSnapshot.data.role.indexOf(Role.Admin)) {
              returnUrl = '/chair/dashboard';
            }
            if (roleList[0] === 'ROLE_DEV') {
              returnUrl = '/student/dashboard';
            }
            // }
          }
          this.router.navigateByUrl(returnUrl);
        },
        error => {
          this.error = error,
            this.loading = false;
        }
      );*/
  }
}
