import { Routes } from '@angular/router';

// import { AnalyticsComponent } from './analytics/analytics.component';
// import { DashboardDarkComponent } from './dashboard-dark/dashboard-dark.component';
// import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';
// import { DefaultDashboardComponent } from './default-dashboard/default-dashboard.component';
import { UserRoleGuard } from 'app/shared/guards/user-role.guard';
// import { LearningManagementComponent } from './learning-management/learning-management.component';
import { MainComponent } from './main/main.component';
import { config } from 'config';
import { RealtimeComponent } from './realtime/realtime.component';

export const DashboardRoutes: Routes = [

  // {
  //   path: '',
  //   component: MainComponent,
  //   // data: { title: 'Analytics', breadcrumb: 'Analytics' }
    
  // },{
  //   path: '',
  //   // component: MainComponent,
  //   // data: { title: 'Analytics', breadcrumb: 'Analytics' }
  //   children: [{
  //     path: 'realtime',
  //     component: RealtimeComponent,
  //     data: { title: 'RealtimeComponent', breadcrumb: 'Realtime' }
  //   }]
  // }

  {
    path: '',
    component: MainComponent,
    // data: { title: 'Learning management', breadcrumb: 'Learning management' }
  },
  {
    path: 'realtime',
    component: RealtimeComponent,
    // data: { title: 'Dashboard', breadcrumb: 'RealTime' }
  },
  // {
  //   path: 'analytics-alt',
  //   component: AnalyticsAltComponent,
  //   data: { title: 'Analytics Alternative', breadcrumb: 'Analytics Alternative' }
  // },
  // {
  //   path: 'crypto',
  //   component: CryptocurrencyComponent,
  //   data: { title: 'Cryptocurrency', breadcrumb: 'Cryptocurrency' }
  // },
  // {
  //   path: 'dark',
  //   component: DashboardDarkComponent,
  //   data: { title: 'Dark Cards', breadcrumb: 'Dark Cards' }
  // }

  
];
