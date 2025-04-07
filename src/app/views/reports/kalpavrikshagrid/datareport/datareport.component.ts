import { Component, OnInit} from '@angular/core';
import { KalpavrikshaService } from '../kalpavriksha.service';

@Component({
  selector: 'app-datareport',
  standalone: true,
  imports: [],
  templateUrl: './datareport.component.html',
  styleUrl: './datareport.component.scss'
})
export class DatareportComponent implements OnInit {
  reportData: any[] = [];

  constructor(private kalpavrikshaService : KalpavrikshaService){}

  ngOnInit(): void {
    this.fetchReportData();
  }

  fetchReportData(): void {
    this.kalpavrikshaService.getKalpGridReport().subscribe(
      (data) => {
        this.reportData = data;
        console.log('API Data:', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
