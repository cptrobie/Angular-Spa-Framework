export interface MenuItem {
    icon: string,
    text: string,
    route: string,
    enabled: boolean,
    submenu: Array<MenuItem>
}