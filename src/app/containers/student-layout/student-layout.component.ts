import {Component} from '@angular/core';
import {navItemsStudent} from '../../_nav';
import {AuthenticationService} from '../../auth/authentication.service';

@Component({
  selector: 'app-dashbard',
  templateUrl: './student-layout.component.html'
})
export class StudentLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItemsStudent;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  constructor(private authenticationService: AuthenticationService) {
  }

  logout() {
    this.authenticationService.logout();
  }
}
