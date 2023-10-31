
import {Component } from '@angular/core';
import {navItems, navItemsChair} from '../../_nav';
import {AuthenticationService} from '../../auth/authentication.service';

@Component({
  selector: 'app-chair-dashboard',
  templateUrl: './chair-layout.component.html'
})
export class ChairLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItemsChair;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  constructor(private authenticationService: AuthenticationService) {
  }

  logout() {
    this.authenticationService.logout();
  }
}
