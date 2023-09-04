
import {Component } from '@angular/core';
import {navItems, navItemsChair} from '../../_nav';

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
}
