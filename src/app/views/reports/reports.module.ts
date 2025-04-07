import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule as MatTooltipModule } from '@angular/material/tooltip';
import { ReportsRoutingModule, routes } from './reports-routing.module';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'app/shared/components/perfect-scrollbar';
import { KalpavrikshagridComponent } from './kalpavrikshagrid/kalpavrikshagrid.component';

@NgModule({
  
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatToolbarModule,
    MatTooltipModule,
    KalpavrikshagridComponent,
    PerfectScrollbarModule,
    RouterModule.forChild(routes)
  ], declarations: [],
  exports: []

})
export class ReportsModule { }
