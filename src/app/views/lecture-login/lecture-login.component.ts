import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture-login',
  templateUrl: './lecture-login.component.html',
  styleUrls: ['./lecture-login.component.css']
})
export class LectureLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // loginAction() {
  //
  //   this.submitted = true;
  //
  //   // stop here if form is invalid
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //
  //   this.loading = true;
  //   this.authenticationService.login(this.f.userName.value, this.f.userPwd.value)
  //     .subscribe(response => {
  //         console.log(response);
  //         console.log(this.route.snapshot.queryParams['returnUrl']);
  //         // get return url from query parameters or default to home page
  //         let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  //         const roleList = response['roles'];
  //         console.log(roleList);
  //         if (response['roles'] !== undefined) {
  //           for (const roleEle of roleList) {
  //             // if (roleEle === 'ROLE_ADMIN') {
  //             //   returnUrl = '/chair/dashboard';
  //             // }
  //             if (roleEle === 'ROLE_DEV') {
  //               returnUrl = '/student/dashboard';
  //             }
  //           }
  //         }
  //         this.router.navigateByUrl(returnUrl);
  //       },
  //       error => {
  //         this.error = error,
  //           this.loading = false;
  //       }
  //     );
  // }

}
