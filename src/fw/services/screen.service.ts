import { HostListener, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ScreenService {
  private resizeSource = new Subject<null>();
  resize$ = this.resizeSource.asObservable();

  // Breakpoint follow Bootstrap 4 media query sizing in pixels
  xtraLargeBreakpoint = 1200; // >= 1200
  largeBreakpoint = 992; // >= 992 && < 1200
  mediumBreakpoint = 768; // >= 768 && < 992
  smallBreakpoint = 576; // >= 576 && < 768
  // XtraSmall is < 576
  screenWidth = 1000;
  screenHeight = 800;

  constructor() {
    try {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      window.addEventListener('resize', (event) => this.onResize(event));
    }
    catch (e) {
      // we're going with default screen dimensions
    }

  }

  isXtraLarge(): boolean {
    return this.screenWidth >= this.xtraLargeBreakpoint;
  }
  isLarge(): boolean {
    return (this.screenWidth >= this.largeBreakpoint && this.screenWidth < this.xtraLargeBreakpoint);
  }
  isMedium(): boolean {
    return (this.screenWidth >= this.mediumBreakpoint && this.screenWidth < this.largeBreakpoint);
  }
  isSmall(): boolean {
    return (this.screenWidth >= this.smallBreakpoint && this.screenWidth < this.mediumBreakpoint);
  }
  isXtraSmall(): boolean {
    return this.screenWidth < this.smallBreakpoint;
  }

  onResize($event): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.resizeSource.next(); // any Subject subscriber will get notified of screen size change
  }

}
