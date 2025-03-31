import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarModule } from 'app/shared/components/perfect-scrollbar';
import { MatTableModule as MatTableModule } from '@angular/material/table';
import { TablesService } from '../tables.service';
import { MatTableDataSource as MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-datareport',
  standalone: true,
  imports: [PerfectScrollbarModule, MatTableModule, MatPaginator],
  templateUrl: './datareport.component.html',
  styleUrl: './datareport.component.scss',
  animations: [
    trigger('animate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class DatareportComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>();
  columnConfig: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private tableService: TablesService) {}

  ngOnInit() {
    this.columnConfig = this.tableService.getDataConf();
    this.displayedColumns = this.tableService
      .getDataConf()
      .map((col) => col.prop);
    this.tableService.apiResponse$1.subscribe((data) => {
      if (!data || !Array.isArray(data) || data.length === 0) {
        console.warn('No data returned from API');
        this.dataSource.data = [];
      }
      else {
        this.dataSource.data = data;
      }
    });
    this.tableService.getData({});
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
