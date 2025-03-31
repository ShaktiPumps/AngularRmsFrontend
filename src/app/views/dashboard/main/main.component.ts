import { Component, OnInit, OnDestroy } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';
import { LayoutService } from 'app/shared/services/layout.service';
import { MatSnackBar as MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtAuthService } from 'app/shared/services/auth/jwt-auth.service';
import { User } from 'app/shared/models/user.model';
import { interval, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: egretAnimations,
})
export class MainComponent implements OnInit, OnDestroy {
  // onlineDevices: number = 19929;
  // offlineDevices: number = 5466;
  // disconnectedDevices: number = 323994;
  // allDevices: number = 349398;
  // faultDevices: number = 1022;
  
  onlineDevices: number;
  offlineDevices: number;
  disconnectedDevices: number;
  allDevices: number;
  faultDevices: number;
  globalDataService: any;

  dailyTrafficChartBar: any;
  monthlyTrafficChartBar: any;
  dailyBandwithUsage: any;
  trafficGrowthChart: any;

  countryTrafficStats = [
    {
      country: 'US',
      visitor: 14040,
      pageView: 10000,
      download: 1000,
      bounceRate: 30,
      flag: 'flag-icon-us',
    },
    {
      country: 'India',
      visitor: 12500,
      pageView: 10000,
      download: 1000,
      bounceRate: 45,
      flag: 'flag-icon-in',
    },
    {
      country: 'UK',
      visitor: 11000,
      pageView: 10000,
      download: 1000,
      bounceRate: 50,
      flag: 'flag-icon-gb',
    },
    {
      country: 'Brazil',
      visitor: 4000,
      pageView: 10000,
      download: 1000,
      bounceRate: 30,
      flag: 'flag-icon-br',
    },
    {
      country: 'Spain',
      visitor: 4000,
      pageView: 10000,
      download: 1000,
      bounceRate: 45,
      flag: 'flag-icon-es',
    },
    {
      country: 'Mexico',
      visitor: 4000,
      pageView: 10000,
      download: 1000,
      bounceRate: 70,
      flag: 'flag-icon-mx',
    },
    {
      country: 'Russia',
      visitor: 4000,
      pageView: 10000,
      download: 1000,
      bounceRate: 40,
      flag: 'flag-icon-ru',
    },
  ];
  
  constructor(
    private jwtAuth: JwtAuthService,
    private http: HttpClient,
    private layout: LayoutService,
    private snack: MatSnackBar
  ) {}

// 7F-0135-0-13-06-23-0

  ngOnInit() {
    
    this.getdata();

    this.refreshSubscription = interval(10000)
      .pipe(switchMap(async () => this.getdata()))
      .subscribe();

    //  setTimeout(() => {
    //   this.layout.publishLayoutChange({
    //     sidebarColor: 'dark-blue',
    //     topbarColor: 'dark-blue',
    //     footerColor: 'dark-blue',
    //     matTheme: "egret-navy-dark"
    //   });
    //   this.snack.open('Layout updated!', 'OK', { duration: 1500 });
    // });

    this.dailyTrafficChartBar = {
      legend: {
        show: false,
      },
      grid: {
        left: '8px',
        right: '8px',
        bottom: '0',
        top: '0',
        containLabel: true,
      },
      tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, .8)',
      },
      xAxis: [
        {
          type: 'category',
          data: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          // data: ["1", "2", "3", "4", "5", "6", "7"],
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            color: '#fff',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            show: false,
            formatter: '${value}',
          },
          min: 0,
          max: 100000,
          interval: 25000,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
            interval: 'auto',
          },
        },
      ],

      series: [
        {
          name: 'Online',
          data: [35000, 69000, 22500, 60000, 50000, 50000, 30000],
          label: { show: false, color: '#0168c1' },
          type: 'bar',
          barWidth: '8',
          color: '#f6be1a',
          smooth: true,
          itemStyle: {
            barBorderRadius: 10,
          },
        },
      ],
    };
    this.monthlyTrafficChartBar = {
      tooltip: {
        trigger: 'axis',

        axisPointer: {
          animation: true,
        },
      },
      grid: {
        left: '0',
        top: '4%',
        right: '0',
        bottom: '0',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sept',
          'Oct',
          'Nov',
          'Dec',
        ],
        axisLabel: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            show: false,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 200,
        interval: 50,
        axisLabel: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'Visit',
          type: 'line',
          smooth: true,
          data: [
            140, 135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95, 115, 95,
            126, 125, 145, 115, 140, 135, 95, 115, 95, 126, 93, 145, 115, 140,
            135, 95,
          ],
          symbolSize: 8,
          showSymbol: false,
          lineStyle: {
            opacity: 0,
            width: 0,
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
          name: 'Sales',
          type: 'line',
          smooth: true,
          data: [
            50, 70, 65, 84, 75, 80, 70, 50, 70, 65, 104, 75, 80, 70, 50, 70, 65,
            94, 75, 80, 70, 50, 70, 65, 86, 75, 80, 70, 50, 70,
          ],
          symbolSize: 8,
          showSymbol: false,
          lineStyle: {
            opacity: 0,
            width: 0,
          },
          itemStyle: {
            borderColor: '#e91f63',
          },
          areaStyle: {
            color: '#e91f63',
            opacity: 1,
          },
        },
      ],
    };

    this.dailyBandwithUsage = {
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      color: ['#00a65a', '#fcc02e', '#e91f63', '#f44336'],
      tooltip: {
        show: true,
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      xAxis: [
        {
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],

      series: [
        {
          name: 'Sessions',
          type: 'pie',
          radius: ['50%', '85%'],
          center: ['50%', '50%'],
          avoidLabelOverlap: false,
          hoverOffset: 5,
          stillShowZeroSum: false,
          label: {
            normal: {
              show: false,
              position: 'center',
              textStyle: {
                fontSize: '13',
                fontWeight: 'normal',
              },
              formatter: '{a}',
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '15',
                fontWeight: 'normal',
                color: 'white',
              },
              formatter: '{b} \n{c} ({d}%)',
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 235,
              name: 'online',
            },
            {
              value: 105,
              name: 'connected',
            },
            {
              value: 410,
              name: 'disconnected',
            },
            { value: 148, name: 'fault' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    this.trafficGrowthChart = {
      tooltip: {
        trigger: 'axis',

        axisPointer: {
          animation: true,
        },
      },
      grid: {
        left: '0',
        top: '0',
        right: '0',
        bottom: '0',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['0', '1', '2', '3', '4'],
        axisLabel: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            show: false,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 200,
        interval: 50,
        axisLabel: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'Visit',
          type: 'line',
          smooth: false,
          data: [0, 40, 140, 90, 160],
          symbolSize: 8,
          showSymbol: false,
          lineStyle: {
            opacity: 0,
            width: 0,
          },
          itemStyle: {
            borderColor: '#fcc02e',
          },
          areaStyle: {
            color: '#f44336',
            opacity: 1,
          },
        },
      ],
    };
  }

  private ApiUrl = 'http://localhost:9880/RMS/dashboard';
  private refreshSubscription: Subscription;
  private headers = new HttpHeaders().set('Authorization','Bearer ' + this.jwtAuth.getJwtToken);
  private currentUser: User = this.jwtAuth.getUser();
  private clientIdListString: string = Array.isArray(this.currentUser.clientIdList) ? this.currentUser.clientIdList.join(','): '';

  getdata() {
    console.log(this.jwtAuth.getUser(),'main OnOff calling and token : ', this.clientIdListString );

    this.http.post<ApiResponse>(`${this.ApiUrl}/DeviceOnOff`,
        { cliientList: this.currentUser.clientIdList },
        { headers: this.headers }
      )
      .subscribe({
        next: (resp) => {
          console.log('API response: ', resp.response);
          this.allDevices = resp.response.All;
          this.disconnectedDevices = resp.response.Disconnected;
          this.offlineDevices = resp.response.Offline;
          this.onlineDevices = resp.response.online;
          this.faultDevices = resp.response.fault;
          // this.globalDataService.setGlobalData(resp);  // Store user data globally
        },
        error: (error) => {
          console.error('Login failed:', error);
        },
        complete: () => {
          console.log('Request completed');
        },
      });
  }

  ngOnDestroy() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }
}

export interface ApiResponse {
  response: any;
  status: string;
  message: string;
}
