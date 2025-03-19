import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarModule } from 'app/shared/components/perfect-scrollbar';
import { MatTableModule as MatTableModule } from '@angular/material/table';
import { MatTableDataSource as MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TablesService } from '../../simha2/tables.service';
@Component({
  selector: 'app-cumulative',
  standalone: true,
  imports: [PerfectScrollbarModule,MatTableModule,MatPaginator],
  templateUrl: './cumulative.component.html',
  styleUrl: './cumulative.component.scss'
})
export class CumulativeComponent implements OnInit  {
  constructor(private tableService: TablesService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [];
  dataSource: any;

  ngOnInit() {
    this.displayedColumns = this.tableService.getCummuConf().map((c) => c.prop)
    this.dataSource = new MatTableDataSource(this.tableService.getCummuAll());
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
