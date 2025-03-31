import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

interface ApiResponse {
  status: boolean;
  message: string;
  response: any[];
}

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  private apiUrl = 'http://localhost:9880/RMS/Report/deviceReport';
  private cumulativeApiUrl = 'http://localhost:9880/RMS/Report/simhaCumu';
  
  private apiResponseSubject = new BehaviorSubject<any[]>([]);
  private apiResponseSubject1 = new BehaviorSubject<any>(null);


  apiResponse$1 = this.apiResponseSubject.asObservable();
  apiResponse$2 = this.apiResponseSubject1.asObservable();

  constructor(private http: HttpClient) {}

  private reportResponse: any;
  apiResponse: any;

  getData(requestData: any): void {
    this.http.post<ApiResponse>(this.apiUrl, requestData).subscribe({
      next: (response: ApiResponse | null) => {
        console.log('Full API Response:', response);
  
        if (response?.status && Array.isArray(response.response)) {
          const processedData = response.response.map((item) => {
            const mpvvolt = parseFloat(item.mpvvolt || '0');
            const mpvcurr = parseFloat(item.mpvcurr || '0');
            const inputPower = ((mpvvolt * mpvcurr) / 1000).toFixed(2);
            return {
              ...item,
              mdate: item.mdate ? item.mdate.split(' ')[0] : '',
              mtime: item.mdate ? item.mdate.split(' ')[1] : '',
              Input: inputPower,
            };
          });
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
      { prop: 'Input', name: 'Input Power (kW)' },
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

   getCumulativeData(requestData: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.cumulativeApiUrl, requestData);
  }
  
  fetchCumulativeData(requestData: any) {
    const formattedRequestData = {
      ...requestData,
      ClientIdList: Array.isArray(requestData.ClientIdList)
        ? requestData.ClientIdList.join(', ') // Convert to string
        : requestData.ClientIdList,
    };
  
    this.getCumulativeData(formattedRequestData).subscribe({
      next: (response) => {
        console.log('Cumulative API Response:', response);
        if (response?.status && Array.isArray(response.response)) {
          this.reportResponse = response.response;
          this.apiResponseSubject1.next(response.response);
        } else {
          console.warn('Unexpected cumulative API response structure', response);
          this.apiResponseSubject1.next([]);
        }
      },
      error: (error) => {
        console.error('Cumulative API Error:', error);
        this.apiResponseSubject1.next([]);
      },
    });
  }
  
  

  getCummuConf() {
    return [
      { prop: 'device', name: 'Device No' },
      { prop: 'dongle', name: 'Dongle No' },
      { prop: 'Date', name: 'Date' },
      { prop: 'CustomerName', name: 'Customer Name' },
      { prop: 'TodayEnergy', name: 'Today Energy' },
      { prop: 'Todayflow', name: 'Today flow' },
      { prop: 'todayTime', name: 'Today Time' },
    ];
  }
  getCummuAll() {
    return [
      {
        device: '7F-0135-0-13-06-23-0',
        dongle: '99-0135-0-13-06-23-0 ',
        Date: '2024-07-27',
        CustomerName: 'JAMNATION',
        TodayEnergy: '36.0',
        Todayflow: '8.6',
        todayTime: '4',
      },
      {
        device: '7F-0135-0-13-06-23-0',
        dongle: '99-0135-0-13-06-23-0 ',
        Date: '2024-07-26',
        CustomerName: 'JAMNATION',
        TodayEnergy: '36.0',
        Todayflow: '8.6',
        todayTime: '4',
      },
      {
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
