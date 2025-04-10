import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarModule } from 'app/shared/components/perfect-scrollbar';
import { MatTableModule as MatTableModule } from '@angular/material/table';
import { KalphybridService } from '../service/kalphybrid.service';
import { MatTableDataSource as MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { KALP_HYBRID_COLUMN_CONFIG } from '../column-config';

@Component({
  selector: 'app-datareport',
  standalone: true,
  imports: [PerfectScrollbarModule, MatTableModule, MatPaginator],
  templateUrl: './datareport.component.html',
  styleUrl: './datareport.component.scss',
})
export class DatareportComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>();
  columnConfig: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private kalpService: KalphybridService) {}

  getValue(row: any, prop: string) {
    const match = prop.match(/^(.+?)\\[(\\d+)\\]$/);
    if (match) {
      const [_, key, index] = match;
      return row[key]?.[+index] ?? '';
    }
    return row[prop] ?? '';
  }

  ngOnInit() {
    this.kalpService.apiResponse$.subscribe((data) => {
      // console.log('🚀 API Response Received:', data);
      if (!data || !Array.isArray(data) || data.length === 0) {
        this.dataSource.data = [];
        return;
      }

      this.columnConfig = KALP_HYBRID_COLUMN_CONFIG.filter((col) => {
        if (col.prop.includes('[')) {
          const match = col.prop.match(/^(.+?)\\[(\\d+)\\]$/);
          if (!match) return false;
          const [_, arrayName, indexStr] = match;
          return Array.isArray(data[0][arrayName]) && data[0][arrayName].length > +indexStr;
        }
        return data[0].hasOwnProperty(col.prop);
      });

      this.displayedColumns = this.columnConfig.map((col) => col.prop);
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
