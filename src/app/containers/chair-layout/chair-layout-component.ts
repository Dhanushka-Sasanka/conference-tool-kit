
import {Component } from '@angular/core';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-chair-dashboard',
  templateUrl: './chair-layout.component.html'
})
export class ChairLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
