import { IconFile } from './icon-file';


export interface FrameworkConfigSettings {
    showLanguageSelector?: boolean;
    showUserControls?: boolean;
    showStatusBar?: boolean;
    showStatusBarBreakpoint?: number;
    socialIcons?: Array<IconFile>;
}
