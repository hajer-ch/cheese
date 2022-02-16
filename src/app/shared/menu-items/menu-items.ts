import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'admin',
        name: ' Home',
        type: 'link',
        icon: 'ti-home',
        test:'home'
      }
    ],
  },
  {
    label: 'UI Element',
    main: [
      {
        state: 'admin',
        name: 'Actions',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'add-cheese',
            name: 'add-cheese',
            path:'add-cheese',
            type: 'link',
            icon: 'ti-crown',
          },
          {
            state: 'admin',
            name: 'add-recipe',
            type: 'link',
        icon: 'ti-crown',
        test: 'add-recipe'
          }
        ]
      },
      // {
      //   state: 'admin',
      //   name: 'add-cheese',
      //   type: 'link',
      //   icon: 'ti-crown',
      //   test: 'add-cheese'
      // }
    ]
  },
  {
    label: 'Forms',
    main: [
      {
        state: 'forms',
        name: 'Form Components',
        type: 'link',
        icon: 'ti-layers'
      }
    ]
  },
  {
    label: 'Tables',
    main: [
      {
        state: 'admin',
        name: 'Bootstrap Table',
        type: 'link',
        icon: 'ti-receipt',
        // link:'bootstrap-table'
      }
    ]
  },
  {
    label: 'Map',
    main: [
      {
        state: 'map',
        name: 'Maps',
        type: 'link',
        icon: 'ti-map-alt'
      }
    ]
  },
  {
    label: 'Pages',
    main: [
      {
        state: 'auth',
        short_label: 'A',
        name: 'Authentication',
        type: 'sub',
        icon: 'ti-id-badge',
        children: [
          {
            state: 'login',
            type: 'link',
            name: 'Login',
            target: true
          }, {
            state: 'registration',
            type: 'link',
            name: 'Registration',
            target: true
          }
        ]
      }
    ]
  },
  {
    label: 'Other',
    main: [
      {
        state: '',
        name: 'Menu Levels',
        type: 'sub',
        icon: 'ti-direction-alt',
        children: [
          {
            state: '',
            name: 'Menu Level 2.1',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.2',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.2.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.2.2',
                target: true
              }
            ]
          }, {
            state: '',
            name: 'Menu Level 2.3',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.4',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.4.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.4.2',
                target: true
              }
            ]
          }
        ]
      }, {
        state: 'simple-page',
        name: 'Simple Page',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
