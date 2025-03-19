import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'app/shared/models/user.model';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

interface ApiResponse {
  status: boolean;
  message: string;
  response: any[];
}

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  private apiUrl = 'http://localhost:9880/RMS/Device/deviceReport';

  private apiResponseSubject = new BehaviorSubject<any>(null);

  apiResponse$ = this.apiResponseSubject.asObservable();

  constructor(private http: HttpClient) {}
  private reportResponse: any;
  // reportResponse:any;
  apiResponse: any;

  getData(requestData: any): void {
    this.http.post<ApiResponse>(this.apiUrl, requestData).subscribe({
      next: (response: ApiResponse | null) => {
        console.log('Full API Response:', response);

        if (response.status && Array.isArray(response.response)) {
          const processedData = response.response.map((item) => ({
            ...item,
            mdate: item.mdate ? item.mdate.split(' ')[0] : '',
            mtime: item.mdate ? item.mdate.split(' ')[1] : '',
          }));
          // console.log('Processed Data for Table:', processedData);
          this.apiResponseSubject.next(processedData);
        } else {
          console.warn('Unexpected API response structure', response);
        }
      },
      error: (error) => {
        console.error('API Error:', error);
      },
    });
  }

  getDataConf() {
    return [
      { prop: 'mdeviceNo', name: 'Device No' },
      { prop: 'mdate', name: 'Date' },
      { prop: 'mtime', name: 'Time' },
      { prop: 'customerName', name: 'Customer Name' },
      { prop: 'mmonthOfDate', name: 'Software Version' },
      { prop: 'myearOfDate', name: 'M66 Version' },
      { prop: 'moperatingFreq', name: 'Operating Frequency (Hz)' },
      { prop: 'moperatingVolt', name: 'Operating Voltage (V)' },
      { prop: 'mmotorCurr', name: 'Motor Current (A)' },
      { prop: 'mrpm', name: 'Motor RPM (RPM)' },
      { prop: 'mlpm', name: 'Flow of Water (LPM)' },
      { prop: 'r4', name: 'PV Voltage (V)' },
      { prop: 'r5', name: 'PV Current (A)' },
      // { prop: 'Input', name: 'Input Power (kW)' },
      { prop: 'mfaultBit', name: 'Fault Bit' },
      { prop: 'minvmodTemp', name: 'INV Module Temp (°C)' },
      { prop: 'mhstemp', name: 'VFD Temp (°C)' },
      { prop: 'r3', name: 'Today VFD Energy (kWh)' },
    ];
  }

  getAll() {
    if (!this.reportResponse) {
      console.warn('No data available. Call getData() first.');
      return null;
    }
    console.log('Returning API Data:', this.reportResponse);
    return this.reportResponse;
  }
  getCummuConf() {
    return [
      // { prop: 'id' },
      { prop: 'device', name: 'device' },
      { prop: 'dongle', name: 'dongle' },
      { prop: 'Date', name: 'Date' },
      { prop: 'CustomerName', name: 'CustomerName' },
      { prop: 'TodayEnergy', name: 'TodayEnergy' },
      { prop: 'Todayflow', name: 'Todayflow' },
      { prop: 'todayTime', name: 'todayTime' },
    ];
  }
  getCummuAll() {
    return [
      {
        // 'id': 1,
        device: '7F-0135-0-13-06-23-0',
        dongle: '99-0135-0-13-06-23-0 ',
        Date: '2024-07-27',
        CustomerName: 'JAMNATION',
        TodayEnergy: '36.0',
        Todayflow: '8.6',
        todayTime: '4',
      },
      {
        // 'id': 2,
        device: '7F-0135-0-13-06-23-0',
        dongle: '99-0135-0-13-06-23-0 ',
        Date: '2024-07-26',
        CustomerName: 'JAMNATION',
        TodayEnergy: '36.0',
        Todayflow: '8.6',
        todayTime: '4',
      },
      {
        // 'id': 3,
        device: '7F-0135-0-13-06-23-0',
        dongle: '99-0135-0-13-06-23-0 ',
        Date: '2024-07-25',
        CustomerName: 'JAMNATION',
        TodayEnergy: '36.0',
        Todayflow: '8.6',
        todayTime: '4',
      },
      {
        // 'id': 4,
        device: '7F-0135-0-13-06-23-0',
        dongle: '99-0135-0-13-06-23-0 ',
        Date: '2024-07-24',
        CustomerName: 'JAMNATION',
        TodayEnergy: '36.0',
        Todayflow: '8.6',
        todayTime: '4',
      },
      {
        // 'id': 5,
        device: '7F-0135-0-13-06-23-0',
        dongle: '99-0135-0-13-06-23-0 ',
        Date: '2024-07-23',
        CustomerName: 'JAMNATION',
        TodayEnergy: '36.0',
        Todayflow: '8.6',
        todayTime: '4',
      },
      {
        // 'id': 6,
        device: '7F-0135-0-13-06-23-0',
        dongle: '99-0135-0-13-06-23-0 ',
        Date: '2024-07-22',
        CustomerName: 'JAMNATION',
        TodayEnergy: '36.0',
        Todayflow: '8.6',
        todayTime: '4',
      },
      {
        // 'id': 7,
        device: '7F-0135-0-13-06-23-0',
        dongle: '99-0135-0-13-06-23-0 ',
        Date: '2024-07-21',
        CustomerName: 'JAMNATION',
        TodayEnergy: '36.0',
        Todayflow: '8.6',
        todayTime: '4',
      },
    ];
  }
}
