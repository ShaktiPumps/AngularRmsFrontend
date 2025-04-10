import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule as MatTooltipModule } from '@angular/material/tooltip';
import { ReportsRoutingModule, routes } from './reports-routing.module';
import { PerfectScrollbarModule } from 'app/shared/components/perfect-scrollbar';
@NgModule({
  
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatToolbarModule,
    MatTooltipModule,
    PerfectScrollbarModule,
  ], declarations: [],
  exports: []

})
export class ReportsModule { }
