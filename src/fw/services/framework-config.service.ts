import { Injectable } from '@angular/core';

import { IconFiles } from './icon-files';
import { FrameworkConfigSettings } from './framework-config-settings';


@Injectable()
export class FrameworkConfigService {
  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar =true;
  showStatusBarBreakpoint = 0;
  socialIcons = new Array<IconFiles>();

  configure(settings: FrameworkConfigSettings):void {
    Object.assign(this, settings);
  }
}
