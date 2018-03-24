import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    HeaderBarComponent
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FwModule { }
