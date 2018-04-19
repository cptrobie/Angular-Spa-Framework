import { MenuItem } from '../fw/services/menu-item';

/*
* If the menu contains a menuitem then the
*     submenu property must be set to null and 
*     the route property is set
* If the menu contains a popup menu then the
*     route is set to null and
*     the submenu contains at least one nested menuitem
*/
export let initialMenuItems: Array<MenuItem> = [
    {
        icon: 'dashboard',
        text: 'Dashboard',
        route: '/dashboard',
        enabled: true,
        submenu: null
    },
    {
        icon: 'globe',
        text: 'Countries',
        route: 'null',
        enabled: true,
        submenu: [
            {
                icon: 'triangle-right',
                text: 'Select',
                route: null,
                enabled: true,
                submenu: [
                    {
                        icon: 'bookmark',
                        text: 'USA',
                        route: 'country-detail/USA',
                        enabled: true,
                        submenu: null
                    },
                    {
                        icon: 'bookmark',
                        text: 'India',
                        route: 'country-detail/India',
                        enabled: true,
                        submenu: null
                    },
                    {
                        icon: 'bookmark',
                        text: 'Switzerland',
                        route: 'country-detail/Switzerland',
                        enabled: true,
                        submenu: null
                    }
                ]
            },
            {
                icon: 'bookmark',
                text: 'Top 3',
                route: 'country-list/3',
                enabled: true,
                submenu: null
            },
            {
                icon: 'bookmark',
                text: 'Top 10',
                route: 'country-list/10',
                enabled: true,
                submenu: null
            },
            {
                icon: 'bookmark',
                text: 'All',
                route: 'country-list/0',
                enabled: true,
                submenu: null
            }
        ]
    },
    {
        icon: 'tools',
        text: 'Maintenance',
        route: null,
        enabled: true,
        submenu: [
            {
                icon: 'note',
                text: 'Country List',
                route: 'country-maint',
                enabled: true,
                submenu: null
            },
            {
                icon: 'gear',
                text: 'Settings',
                route: '/settings',
                enabled: true,
                submenu: null
            }
        ]
    }
];