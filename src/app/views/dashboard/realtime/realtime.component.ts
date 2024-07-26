import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef, signal } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { egretAnimations } from "app/shared/animations/egret-animations";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatSlideToggle } from '@angular/material/slide-toggle';
// import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { interval, Subscription } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'PV Voltage', weight: 330.10, symbol: 'V'},
  {position: 2, name: 'PV Current', weight: 0.00, symbol: 'V'},
  {position: 3, name: 'Operating Voltage', weight: 0.00, symbol: 'V'},
  {position: 4, name: 'Motor Current', weight: 9.0122, symbol: 'A'},
  {position: 5, name: 'Operating Frequency', weight: 10.811, symbol: 'HZ'},
  {position: 6, name: 'Motor Power', weight: 12.0107, symbol: 'KW'},
  {position: 7, name: 'Motor RPM', weight: 14.0067, symbol: 'RPM'},
  {position: 8, name: 'Water Flow', weight: 15.9994, symbol: 'LPM'},
  {position: 9, name: 'Today Energy', weight: 18.9984, symbol: 'KWH'},
  {position: 10, name: 'Total Energy', weight: 20.1797, symbol: 'KWH'},
];




@Component({
  selector: 'app-realtime',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatIconModule, MatFormField,NgxEchartsModule ,MatSlideToggle],
  templateUrl: './realtime.component.html',
  styleUrl: './realtime.component.scss',
  animations: egretAnimations
})



export class RealtimeComponent implements OnInit, AfterViewInit  {
  data = [
    {
      timestamp: '11-06-24 09:45:17',
      value: 310.10,
    },{
      timestamp: '11-06-24 09:45:23',
      value: 300.10,
    },{
      timestamp: '11-06-24 09:45:28',
      value: 330.10,
    },{
      timestamp: '11-06-24 09:45:35',
      value: 340.10,
    },{
      timestamp: '11-06-24 09:45:42',
      value: 360.10,
    },{
      timestamp: '11-06-24 09:45:48',
      value: 300.10,
    },{
      timestamp: '11-06-24 09:45:55',
      value: 350.10,
    },{
      timestamp: '11-06-24 09:46:02',
      value: 370.10,
    },{
      timestamp: '11-06-24 09:46:10',
      value: 330.10,
    }
  ]
  
  currDate: Date = new Date();

  displayedColumns: string[] = [ 'name', 'weight', 'symbol'];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;
  monthlyTrafficChartBar: any;
  
  constructor(private cdr: ChangeDetectorRef,
    private snack: MatSnackBar,
    private router: Router 
  ) { }

//   private intervalSubscription: Subscription;
// realvalue = false;
// realtime(realData){
//   this.realvalue = !this.realvalue;
//   if(this.realvalue){
//     this.fetchData(realData);
//     this.intervalSubscription =interval(5000).subscribe(() => this.fetchData(realData));

//   } else{
//     if (this.intervalSubscription) {
//       this.intervalSubscription.unsubscribe();
//     }
//   }
  
// }

  fetchData(gdata) {
    console.log('fetching', gdata[0].timestamp);
    // (data) => {

    
      // Process your data here and update chartData and chartLabels
      const newData = gdata.map(item => item.value);
      const newData2 = gdata.map(item => this.getRandomInt(250, 300)); // Adjust according to your API response
      const newLabels = gdata.map(item => item.timestamp); // Adjust according to your API response
      console.log('fetching func', newLabels);
      // this.monthlyTrafficChartBar.xAxis.data = newLabels;
      // this.monthlyTrafficChartBar.series[0].data = newLabels;
      this.monthlyTrafficChartBar = {
        tooltip: {
          trigger: "axis",
    
          axisPointer: {
            animation: true
          }
        },
        grid: {
          left: "0",
          top: "4%",
          right: "0",
          bottom: "0"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: newLabels,
          axisLabel: {
            show: false
          },
          axisLine: {
            lineStyle: {
              show: false
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          min: 100,
          max: 400,
          interval: 50,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: "Current",
            type: "line",
            smooth: true,
            data: newData,
            symbolSize: 8,
            showSymbol: false,
            lineStyle: {
              opacity: 0,
              width: 0
            },
            itemStyle: {
              borderColor: "#f6be1a"
            },
            areaStyle: {
              color: "#f6be1a",
              opacity: 1
            }
          },
          {
            name: "WaterFlow",
            type: "line",
            smooth: true,
            data: newData2,
            symbolSize: 8,
            showSymbol: false,
            lineStyle: {
              opacity: 0,
              width: 0
            },
            itemStyle: {
              borderColor: "#e91f63"
            },
            areaStyle: {
              color: "#256fa9",
              opacity: 1
            }
          }
        ]
      };
    // };
    this.data.push({
        timestamp: '11-06-24 09:46:17',
        value: this.getRandomInt(250, 400),
      }
    );
    this.data.shift();
  }

getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


  ngOnInit() {
    
    this.fetchData(this.data);
    interval(3000).subscribe(() => this.fetchData(this.data));
    setTimeout(() => {
    this.dataSource = ELEMENT_DATA;
    this.cdr.detectChanges()
    console.log(this.router.url);
  })
  // this.monthlyTrafficChartBar = {
  //   tooltip: {
  //     trigger: "axis",

  //     axisPointer: {
  //       animation: true
  //     }
  //   },
  //   grid: {
  //     left: "0",
  //     top: "4%",
  //     right: "0",
  //     bottom: "0"
  //   },
  //   xAxis: {
  //     type: "category",
  //     boundaryGap: false,
  //     data: [  // Keys
  //       "Jan",
  //       "Feb",
  //       "Mar",
  //       "Apr",
  //       "May",
  //       "Jun",
  //       "Jul",
  //       "Aug",
  //       "Sept",
  //       "Oct",
  //       "Nov",
  //       "Dec"
  //     ],
  //     axisLabel: {
  //       show: false
  //     },
  //     axisLine: {
  //       lineStyle: {
  //         show: false
  //       }
  //     },
  //     axisTick: {
  //       show: false
  //     },
  //     splitLine: {
  //       show: false
  //     }
  //   },
  //   yAxis: {
  //     type: "value",
  //     min: 0,
  //     max: 200,
  //     interval: 50,
  //     axisLabel: {
  //       show: false
  //     },
  //     axisLine: {
  //       show: false
  //     },
  //     axisTick: {
  //       show: false
  //     },
  //     splitLine: {
  //       show: false
  //     }
  //   },
  //   series: [
  //     {
  //       name: "Visit",
  //       type: "line",
  //       smooth: true,
  //       data: [
  //         140,
  //         135,
  //         95,
  //         115,
  //         95,
  //         126,
  //         93,
  //         145,
  //         115,
  //         140,
  //         135,
  //         95,
  //         115,
  //         95,
  //         126,
  //         125,
  //         145,
  //         115,
  //         140,
  //         135,
  //         95,
  //         115,
  //         95,
  //         126,
  //         93,
  //         145,
  //         115,
  //         140,
  //         135,
  //         95
  //       ],
  //       symbolSize: 8,
  //       showSymbol: false,
  //       lineStyle: {
  //         opacity: 0,
  //         width: 0
  //       },
  //       itemStyle: {
  //         borderColor: "#f6be1a"
  //       },
  //       areaStyle: {
  //         color: "#f6be1a",
  //         opacity: 1
  //       }
  //     },
  //     {
  //       name: "Sales",
  //       type: "line",
  //       smooth: true,
  //       data: [
  //         50,
  //         70,
  //         65,
  //         84,
  //         75,
  //         80,
  //         70,
  //         50,
  //         70,
  //         65,
  //         145,
  //         75,
  //         80,
  //         70,
  //         50,
  //         70,
  //         65,
  //         94,
  //         75,
  //         80,
  //         70,
  //         50,
  //         70,
  //         65,
  //         86,
  //         75,
  //         80,
  //         70,
  //         50,
  //         70
  //       ],
  //       symbolSize: 8,
  //       showSymbol: false,
  //       lineStyle: {
  //         opacity: 0,
  //         width: 0
  //       },
  //       itemStyle: {
  //         borderColor: "#e91f63"
  //       },
  //       areaStyle: {
  //         color: "#256fa9",
  //         opacity: 1
  //       }
  //     }
  //   ]
  // };
}
  ngAfterViewInit() {
    
  }

}
