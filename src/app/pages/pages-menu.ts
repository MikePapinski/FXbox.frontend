/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NbMenuItem } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PagesMenu {

  getMenu(): Observable<NbMenuItem[]> {
    const dashboardMenu: NbMenuItem[] = [
      {
        title: 'LIVE Activity',
        icon: 'wifi-outline',
        link: '/pages/dashboard',
        home: true,
        children: undefined,
      },
     
    ];

    const menu: NbMenuItem[] = [
      {
        title: 'TRADING',
        group: true,
      },
      {
        title: 'Brokers',
        icon: 'briefcase-outline',
        children: [
          {
            title: 'Add',
            link: '/pages/layout/add',
          },
          {
            title: 'List',
            link: '/pages/layout/list',
          },
        ],
      },
      {
        title: 'Agent',
        icon: 'cube-outline',
        children: [
          {
            title: 'Status',
            link: '/pages/forms/status',
          },
        ],
      },
    ];

    return of([...dashboardMenu, ...menu]);
  }
}
