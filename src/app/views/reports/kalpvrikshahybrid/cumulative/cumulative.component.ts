import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarModule } from 'app/shared/components/perfect-scrollbar';
import { MatTableModule as MatTableModule } from '@angular/material/table';
import { KalphybridService } from '../service/kalphybrid.service';
import { MatTableDataSource as MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-cumulative',
  standalone: true,
  imports: [PerfectScrollbarModule, MatTableModule, MatPaginator],
  templateUrl: './cumulative.component.html',
  styleUrl: './cumulative.component.scss'
})
export class CumulativeComponent implements OnInit{
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>();
  columnConfig: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private kalpService: KalphybridService){}

  ngOnInit() {
    this.kalpService.apiResponse$2.subscribe((data) => {
      if (!data || !Array.isArray(data) || data.length === 0) {
        // console.warn('No data returned from API');
        this.dataSource.data = [];
      } else {
        const firstRow = data[0];
        this.columnConfig = Object.keys(firstRow).map((key) => ({
          name: key,
          prop: key,
        }));
        this.displayedColumns = this.columnConfig.map((col) => col.prop);
        
        this.dataSource.data = data;
      }
    });

    // this.kalpService.getKalpHybridCumulative({});
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
