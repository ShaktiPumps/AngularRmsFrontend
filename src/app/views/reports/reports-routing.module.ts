import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Simha2Component } from './simha2/simha2.component';
import { SimhaComponent } from './simha/simha.component';
import { SunShaktiComponent } from './sun-shakti/sun-shakti.component';
import { KalpvrikshahybridComponent } from './kalpvrikshahybrid/kalpvrikshahybrid.component';

export const routes: Routes = [
  // {
  //   path:'faultReport',
  //   // component:,
  // },
  {
    path: 'simha2',
    component: Simha2Component,
  },
  {
    path: 'simha',
    component: SimhaComponent,
  },
  {
    path: 'sunShakti',
    component: SunShaktiComponent,
  },
  {
    path: 'kalpvrikshahybrid',
    component: KalpvrikshahybridComponent,
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

