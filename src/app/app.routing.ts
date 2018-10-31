import { Routes } from '@angular/router';

import { LoginComponent } from './layouts/auth/login.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

export const AppRoutes: Routes = [ {
  path: '',
  redirectTo: '/login',
  pathMatch: 'full',
}, {
      path: 'login',
      component: LoginComponent
    }
    , {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
        path: '',
        loadChildren: './menu_components/dashboard/dashboard.module#DashboardModule'
    },
    {
      path: 'kyc',
      loadChildren: './menu_components/user/kyc/kyc.module#KycModule'
  }
  ]
}
      ];
