import {Component} from '@angular/core';
import {navItemsStudent} from '../../_nav';

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
}
