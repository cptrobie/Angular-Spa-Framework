import { Component } from '@angular/core';

import { FrameworkConfigService } from '../fw/services/framework-config.service';
import { FrameworkConfigSettings } from '../fw/services/framework-config-settings';


@Component({
  selector: 'pls-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
 // provisioning of injected FrameworkConfigService
 constructor (private fcs: FrameworkConfigService) {
   let config: FrameworkConfigSettings = {
     socialIcons: [
       { imageFile:'assets/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com' },
       { imageFile:'assets/social-google-bw.png', alt: 'Google +', link: 'http://www.google.com' },
       { imageFile:'assets/social-twitter-bw.png', alt: 'Twitter', link: 'http://www.twitter.com' }
     ],
     showLanguageSelector: true,
     showUserControls: true,
     showStatusBar: true,
     showStatusBarBreakpoint:800
   };

   fcs.configure(config);

 }

}
