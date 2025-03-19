import { Component, ViewChild } from '@angular/core';
import { DatareportComponent } from './datareport/datareport.component';
import { CumulativeComponent } from './cumulative/cumulative.component';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatDatepicker, MatDateRangeInput } from '@angular/material/datepicker';
import { MatFormField,  MatPrefix, MatSuffix } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule as MatMenuModule } from '@angular/material/menu';

import { PerfectScrollbarModule } from 'app/shared/components/perfect-scrollbar';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { TablesService } from '../simha2/tables.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-simha',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, MatToolbarModule, SharedMaterialModule, PerfectScrollbarModule, FormsModule, ReactiveFormsModule, DatareportComponent, CumulativeComponent],
  templateUrl: './simha.component.html',
  styleUrl: './simha.component.scss'
})
export class SimhaComponent {
  displayedColumns: string[] = [];
  dataSource: any;

  basicForm: UntypedFormGroup;
  constructor(private tableService: TablesService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.displayedColumns = this.tableService.getDataConf().map((c) => c.prop)
    this.dataSource = new MatTableDataSource(this.tableService.getAll());
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
}
