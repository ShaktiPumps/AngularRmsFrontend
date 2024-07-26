import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarModule } from 'app/shared/components/perfect-scrollbar';
import { MatTableModule as MatTableModule } from '@angular/material/table';
import { TablesService } from '../tables.service';
import { MatTableDataSource as MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-datareport',
  standalone: true,
  imports: [PerfectScrollbarModule,MatTableModule,MatPaginator],
  templateUrl: './datareport.component.html',
  styleUrl: './datareport.component.scss'
})
export class DatareportComponent  implements OnInit {

  displayedColumns: string[] = [];
  dataSource: any;
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
