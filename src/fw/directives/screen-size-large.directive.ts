import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ScreenService } from '../services/screen.service';


@Directive({ selector: '[screenSizeLarge]' })
export class ScreenSizeLargeDirective implements OnDestroy {
  private hasView = false;
  private scrnSubscribe: Subscription;

  constructor(private viewContainer: ViewContainerRef,
    private template: TemplateRef<Object>,
    private scrnSvc: ScreenService) {

    this.scrnSubscribe = scrnSvc.resize$.subscribe(() => this.onResize());

  }

  @Input()
  set screenSizeLarge(condition) {
    // ignore the passed condition and set it based on screen size
    condition = this.scrnSvc.screenWidth >= this.scrnSvc.largeBreakpoint;

    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if (!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }

  ngOnDestroy() {
    this.scrnSubscribe.unsubscribe();
  }

  onResize() {
    // trigger the setter
    this.screenSizeLarge = false;
  }
}
