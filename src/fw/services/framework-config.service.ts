import { Injectable } from '@angular/core';

import { IconFile } from './icon-file';
import { FrameworkConfigSettings } from './framework-config-settings';


@Injectable()
export class FrameworkConfigService {
  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar =true;
  showStatusBarBreakpoint = 0;
  socialIcons = new Array<IconFile>();

  configure(settings: FrameworkConfigSettings):void {
    Object.assign(this, settings);
  }
}
