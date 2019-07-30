import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isExpanded = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  menus: any = [
    {
      heading: 'Todos',
      icon: 'assignment',
      link: 'todo',
      active: true
    }
  ];
  constructor(private breakpointObserver: BreakpointObserver) { }

  public getMenuState(currentMenu) {
    return currentMenu.active ? 'down' : 'up';
  }
  public toggleMenu(currentMenu) {
    this.menus.forEach(menu => {
      if (menu === currentMenu) {
        currentMenu.active = !currentMenu.active;
      } else {
        menu.active = false;
      }
    });
  }
}
