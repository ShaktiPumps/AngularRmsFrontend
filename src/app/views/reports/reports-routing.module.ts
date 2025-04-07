import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Simha2Component } from './simha2/simha2.component';
import { SimhaComponent } from './simha/simha.component';
import { SunShaktiComponent } from './sun-shakti/sun-shakti.component';
import { KalpavrikshagridComponent } from './kalpavrikshagrid/kalpavrikshagrid.component';
import { MainComponent } from '../dashboard/main/main.component';

export const routes: Routes = [
  // {
  //   path:'faultReport',
  //   // component:,
  // },
  {
    path: 'simha2',
    component: Simha2Component,
    // data: { title: 'Simha Reports', breadcrumb: 'Simha Reports' }
  },
  {
    path: 'simha',
    component: SimhaComponent,
    // data: { title: 'Simha Reports', breadcrumb: 'Simha Reports' }
  },
  {
    path: 'sunShakti',
    component: SunShaktiComponent,
    // data: { title: 'Simha Reports', breadcrumb: 'Simha Reports' }
  },
  {
    path: 'kalpavrikshagrid',
    component: KalpavrikshagridComponent

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }

// export const ReportsRoutingModule: Routes = [

//   // {
//   //   path: '',
//   //   component: MainComponent,
//   //   // data: { title: 'Analytics', breadcrumb: 'Analytics' }
    
//   // },{
//   //   path: '',
//   //   // component: MainComponent,
//   //   // data: { title: 'Analytics', breadcrumb: 'Analytics' }
//   //   children: [{
//   //     path: 'realtime',
//   //     component: RealtimeComponent,
//   //     data: { title: 'RealtimeComponent', breadcrumb: 'Realtime' }
//   //   }]
//   // }



//   // {
//   //   path: 'analytics-alt',
//   //   component: AnalyticsAltComponent,
//   //   data: { title: 'Analytics Alternative', breadcrumb: 'Analytics Alternative' }
//   // },
//   // {
//   //   path: 'crypto',
//   //   component: CryptocurrencyComponent,
//   //   data: { title: 'Cryptocurrency', breadcrumb: 'Cryptocurrency' }
//   // },
//   // {
//   //   path: 'dark',
//   //   component: DashboardDarkComponent,
//   //   data: { title: 'Dark Cards', breadcrumb: 'Dark Cards' }
//   // }

  
// ];

