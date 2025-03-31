import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef, signal } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormField } from '@angular/material/form-field';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DataService } from 'app/shared/services/data.service';
import { FormsModule } from '@angular/forms';
import { DeviceOfflineDialogComponent } from './device-offline-dialog/device-offline-dialog.component';
import { MatDialog } from '@angular/material/dialog';
// import {
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexDataLabels,
//   ApexPlotOptions,
//   ApexYAxis,
//   ApexXAxis,
//   ApexFill,
//   ApexTitleSubtitle,
// } from 'ng-apexcharts';
// import { interval, Subscription } from 'rxjs';
// import { NgChartsModule } from 'ng2-charts';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'PV Voltage', weight: 330.1, symbol: 'V' },
  { position: 2, name: 'PV Current', weight: 0.0, symbol: 'V' },
  { position: 3, name: 'Operating Voltage', weight: 0.0, symbol: 'V' },
  { position: 4, name: 'Motor Current', weight: 9.0122, symbol: 'A' },
  { position: 5, name: 'Operating Frequency', weight: 10.811, symbol: 'HZ' },
  { position: 6, name: 'Motor Power', weight: 12.0107, symbol: 'KW' },
  { position: 7, name: 'Motor RPM', weight: 14.0067, symbol: 'RPM' },
  { position: 8, name: 'Water Flow', weight: 15.9994, symbol: 'LPM' },
  { position: 9, name: 'Today Energy', weight: 18.9984, symbol: 'KWH' },
  { position: 10, name: 'Total Energy', weight: 20.1797, symbol: 'KWH' },
];

@Component({
  selector: 'app-realtime',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    NgxEchartsModule,
    HttpClientModule,
    FormsModule,
    NgApexchartsModule,
  ],
  templateUrl: './realtime.component.html',
  styleUrl: './realtime.component.scss',
  animations: egretAnimations,
})
export class RealtimeComponent implements OnInit, AfterViewInit {
  data = [
    {
      timestamp: '11-06-24 09:45:17',
      value: 0.4,
    },
    {
      timestamp: '11-06-24 09:45:17',
      value: 0.6,
    },
    {
      timestamp: '11-06-24 09:45:17',
      value: 0.2,
    },
    {
      timestamp: '11-06-24 09:45:17',
      value: 0.8,
    },
  ];
  // data: any[] = [];
  monthlyTrafficChartBar: any;
  dataSource: any;
  deviceDetails: any = {};
  isLoading: boolean = true;
  error: string | null = null;
  displayResponse: any[] = [];
  displayColumns: string[] = ['name', 'value', 'unit'];

  apiData: any = null;
  currDate: string | null = null;
  defaultDate: Date = new Date();
  intervalId: any;
  productStatus: string = '';
  pstatusColor: string = '';

  deviceNumber: string = '';
  isDeviceOnline: boolean = false;
  
  constructor(
    private cdr: ChangeDetectorRef,
    private snack: MatSnackBar,
    private router: Router,
    private http: HttpClient,
    private dataService: DataService,
    private snackBar : MatSnackBar,
    private dialog: MatDialog
  ) {}

  searchDevice() {
    if (!this.deviceNumber || this.deviceNumber.trim() === '') {
      this.snack.open('Please enter a device number', 'OK', { duration: 3000 });
      return;
    }

    console.log('Searching for device:', this.deviceNumber);
    this.fetchDeviceDisplayComponent(this.deviceNumber);
  }

  toggleApiCall(event: any) {
    if (event.target.checked) {
      this.fetchDeviceRealTimeComponent();
      this.intervalId = setInterval(
        () => this.fetchDeviceRealTimeComponent(),
        10000
      );
    } else {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  }

  updateChart() {
    const newData = this.data.map((item) => parseFloat(item.value.toFixed(2)));

    this.monthlyTrafficChartBar = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        formatter: (params) => {
          let result = `<b>Value</b><br/>`;
          params.forEach((item) => {
            result += `<span style="display:inline-block;width:10px;height:10px;background-color:${item.color};border-radius:50%;margin-right:5px;"></span>`;
            result += `${item.seriesName}: <b>${parseFloat(item.value).toFixed(
              2
            )}</b><br/>`;
          });
          return result;
        },
      },
      grid: {
        left: '3%',
        top: '10%',
        right: '3%',
        bottom: '5%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: new Array(newData.length).fill(''),
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
      },
      yAxis: {
        type: 'value',
        // min: -1, // Set min to -2
        max: 1,
        interval: 0.2,
        axisLabel: {
          show: true,
          formatter: (value) => value.toFixed(1),
        },
        axisLine: {
          show: true,
          lineStyle: { color: '#aaa' },
        },
        axisTick: { show: true },
        splitLine: {
          show: true,
          lineStyle: { type: 'dashed' },
        },
      },
      series: [
        {
          name: 'Current',
          type: 'line',
          smooth: true,
          data: newData,
          symbolSize: 8,
          showSymbol: false,
          lineStyle: {
            opacity: 1,
            width: 2,
            color: '#f6be1a',
          },
          itemStyle: {
            borderColor: '#f6be1a',
          },
          areaStyle: {
            color: '#f6be1a',
            opacity: 1,
          },
        },
        {
          name: 'WaterFlow',
          type: 'line',
          smooth: true,
          symbolSize: 8,
          showSymbol: false,
          lineStyle: {
            opacity: 1,
            width: 2,
            color: '#256fa9',
          },
          itemStyle: {
            borderColor: '#256fa9',
          },
          areaStyle: {
            color: '#256fa9',
            opacity: 1,
          },
        },
      ],
    };
  }

  // 7F-0135-0-13-06-23-0

  fetchDeviceDisplayComponent(deviceNumber: string) {
    this.isLoading = true;
    this.error = null;

    this.http
      .get<any>(
        `http://localhost:9880/RMS/Device/realTimeDisplay?DeviceNo=${this.deviceNumber}`
      )
      .subscribe(
        (response) => {
          console.log("API Response:", response); 
          this.deviceDetails = response.deviceDetails;

          if (response.status && response.displayResponse?.length > 0) {
            this.isDeviceOnline = true;

            if (Array.isArray(response)) {
              this.displayResponse = response.map((item) => ({
                mpname: item.mpname,
                value: item.mpindex,
                unit: item.unit,
              }));
            } else if (response && Array.isArray(response.displayResponse)) {
              this.displayResponse = response.displayResponse.map((item) => ({
                mpname: item.mpname,
                value: item.mpindex,
                unit: item.unit,
              }));
            } else {
              console.error('Unexpected API response format:', response);
            }``
          }else if (response.message === "Failed" || response.message.includes("offline")) {
            this.isDeviceOnline = false;
            console.warn("Device is Offline");
            this.dialog.open(DeviceOfflineDialogComponent, {
              width: '400px',
              disableClose: true,
            });
          } else {
            this.isDeviceOnline = false;
          }
          this.cdr.detectChanges();
        },
        (error) => {
          console.error('Error fetching API data:', error);
          this.isDeviceOnline = false;
        }
      );
  }

  fetchDeviceRealTimeComponent() {
    this.isLoading = true;
    this.error = null;

    this.http
      .get<any>(
        `http://localhost:9880/RMS/Device/DataMonitor?DeviceNo=${this.deviceNumber}`
      )
      .subscribe(
        (response) => {
          if (response.status && response.realTimeResponse?.length > 0) {
            const realTimeData = response.realTimeResponse[0];
            console.log('Realtime API Response:', realTimeData);

            const pvShow = response.pvShow;
            const timestamp = new Date(realTimeData.rmdate).toLocaleString();
            const RMPVVolt = parseFloat(realTimeData.rmpvvolt) || 0;
            const RMPVCurr = parseFloat(realTimeData.rmpvcurr) || 0;
            const RMINVModTemp = parseFloat(realTimeData.rminvmodTemp) || 0;
            const RMDSPTemp = parseFloat(realTimeData.rmdsptemp) || 0;

            const calculatedValue: number = pvShow
              ? RMPVVolt * RMPVCurr + RMINVModTemp * RMDSPTemp
              : RMPVVolt * RMPVCurr;

            this.data.push({
              timestamp: timestamp,
              value: calculatedValue,
            });

            if (this.data.length > 10) {
              this.data.shift();
            }

            this.updateChart();
            this.cdr.detectChanges();
          }
          if (response && response.realTimeResponse?.length > 0) {
            const realTimeData = response.realTimeResponse[0];
            this.currDate = realTimeData.rmdate
              ? new Date(realTimeData.rmdate).toLocaleString()
              : this.defaultDate.toISOString();
            this.productStatus = response.productStatus || '';
            this.pstatusColor = response.pstatusColor || '';

            this.cdr.detectChanges();

            const apiMapping: { [key: string]: string } = {
              M1: 'rmlatitude',
              M2: 'rmlongitude',
              M3: 'rmdayOfDate',
              M4: 'rmmonthOfDate',
              M5: 'rmyearOfDate',
              M6: 'rmhourOfTime',
              M7: 'rmminOfTime',
              M8: 'rmstatusOfProduct',
              M9: 'rmoperatingFreq',
              M10: 'rmoperatingVolt',
              M11: 'rmmotorCurr',
              M12: 'rmrpm',
              M13: 'rmlpm',
              M14: 'rmpvvolt',
              M15: 'rmpvcurr',
              M16: 'rmfaultBit',
              M17: 'rminvmodTemp',
              M18: 'rmhstemp',
              M19: 'rmdsptemp',
              M20: 'rmsingalStr',
              M21: 'r1',
              M22: 'r2',
              M23: 'r3',
              M24: 'r4',
              M25: 'r5',
              M26: 'rmremark[0]',
              M27: 'rmremark[1]',
              M28: 'rmremark[2]',
              M29: 'rmremark[3]',
              M30: 'rmremark[4]',
              M31: 'rmremark[5]',
              M32: 'rmremark[6]',
              M33: 'rmremark[7]',
              M34: 'rmremark[8]',
              M35: 'rmremark[9]',
              M36: 'rmremark[10]',
              M37: 'rmremark[11]',
              M38: 'rmremark[12]',
              M39: 'rmremark[13]',
              M40: 'rmremark[14]',
              M41: 'rmremark[15]',
              M42: 'rmremark[16]',
              M43: 'rmremark[17]',
              M44: 'rmremark[18]',
              M45: 'rmremark[19]',
              M46: 'rmremark[20]',
              M47: 'rmremark[21]',
              M48: 'rmremark[22]',
              M49: 'rmremark[23]',
              M50: 'rmremark[24]',
            };
            this.apiData = {};

            Object.keys(apiMapping).forEach((key) => {
              const mappedKey = apiMapping[key];
              const value = realTimeData[mappedKey];

              const element = document.getElementById(key);
              if (element) {
                element.innerText = value !== undefined ? value : 'N/A';
              }
            });

            this.cdr.detectChanges();

            console.log('Updated Table Data:', realTimeData);
          }
        },
        (error) => {
          console.error('Error fetching API data:', error);
        }
      );
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  navigateToSettingPara() {
    this.dataService.getData().subscribe(
      (response) => {
        this.dataService.setSharedData(response); // Save data in service
        this.router.navigate(['/dashboard/settingpara']); // Navigate to new component
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  }

  ngOnInit(): void {
    // this.dataSource = ELEMENT_DATA;
    // this.cdr.detectChanges();
    // this.fetchDeviceDisplayComponent();
    // this.fetchDeviceRealTimeComponent();
  }
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngAfterViewInit() {}
}
