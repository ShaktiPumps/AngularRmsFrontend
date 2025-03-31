import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private sharedData = new BehaviorSubject<any>(null);
  private baseUrl = 'http://localhost:9880/RMS/Device';

  private cumulativeUrl = 'http://localhost:9880/RMS/Report/simhaCumu';
  private cumulativeData = new BehaviorSubject<any>(null);
  cumulativeData$ = this.cumulativeData.asObservable(); 
  

  
  constructor(private http: HttpClient) {}
  
  getData(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/ParameterList?DeviceNo=AA-0001-0-01-01-22-0`
    );
  }
  fetchCumulativeData(): Observable<any> {
    return this.http.get(this.cumulativeUrl);
  }

  setCumulativeData(data: any) {
    this.cumulativeData.next(data);
  }
  
  readParameter(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/settingParam`, formData);
  }
  
  setParameter(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/settingParam`, formData);
  }
  
  setSharedData(data: any) {
    this.sharedData.next(data);
  }
  
  getSharedData(): Observable<any> {
    return this.sharedData.asObservable();
  }
}
