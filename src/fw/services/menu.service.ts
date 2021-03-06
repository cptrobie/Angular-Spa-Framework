import { Injectable } from '@angular/core';

import { MenuItem } from './menu-item';


@Injectable()
export class MenuService {
  items: Array<MenuItem>;
  isVertical = false;
  showingLeftSideMenu = false;

  toggleLeftSideMenu() : void {
    this.isVertical = true;
    this.showingLeftSideMenu = !this.showingLeftSideMenu;
  }

  toggleMenuOrientation() {
    this.isVertical = !this.isVertical;
  }
}
