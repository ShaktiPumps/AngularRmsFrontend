import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private sharedData = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('http://localhost:9880/RMS/Device/ParameterList?DeviceNo=AA-0001-0-01-01-22-0');
  }

  setSharedData(data: any) {
    this.sharedData.next(data);
  }

  getSharedData(): Observable<any> {
    return this.sharedData.asObservable();
  }
}
