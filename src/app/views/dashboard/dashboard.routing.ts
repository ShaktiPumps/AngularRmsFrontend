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
import { SettingParaComponent } from './setting-para/setting-para.component';

export const DashboardRoutes: Routes = [
 {
    path: '',
    component: MainComponent,
  },
  {
    path: 'realtime',
    component: RealtimeComponent,
  },  
  {
    path: 'settingpara',
    component: SettingParaComponent
  }
  // {
  //   path: 'settingpara',
  //   loadComponent: () => import('./setting-para/setting-para.component').then(m => m.SettingParaComponent) // ✅ Correct way to load standalone component
  // }
];
