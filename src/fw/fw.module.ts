import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContentComponent } from './content/content.component';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { TopActionBarComponent } from './top-action-bar/top-action-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { BottomStatusBarComponent } from './bottom-status-bar/bottom-status-bar.component';
import { OcticonDirective } from './directives/octicon.directive';
import { ScreenService } from './services/screen.service';
import { ScreenSizeLargeDirective } from './directives/screen-size-large.directive';
import { ScreenSizeMediumDirective } from './directives/screen-size-medium.directive';
import { ScreenSizeSmallDirective } from './directives/screen-size-small.directive';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { RegisterComponent } from './users/register/register.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule 
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    HeaderBarComponent,
    TopActionBarComponent,
    FooterBarComponent,
    BottomStatusBarComponent,
    OcticonDirective,
    ScreenSizeLargeDirective,
    ScreenSizeMediumDirective,
    ScreenSizeSmallDirective,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    SignInComponent,
    RegisterComponent
  ],
  providers: [
    FrameworkConfigService,
    MenuService,
    ScreenService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FwModule { }
