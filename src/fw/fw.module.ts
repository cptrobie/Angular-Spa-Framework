import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content/content.component';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { TopActionBarComponent } from './top-action-bar/top-action-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { BottomStatusBarComponent } from './bottom-status-bar/bottom-status-bar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    HeaderBarComponent,
    TopActionBarComponent,
    FooterBarComponent,
    BottomStatusBarComponent

  ],
  providers: [
    FrameworkConfigService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FwModule { }
