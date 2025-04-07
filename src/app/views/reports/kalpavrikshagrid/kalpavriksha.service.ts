import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KalpavrikshaService {
  private apiUrl = 'http://localhost:9880/RMS/Report/kalpGridReport';

  constructor(private http: HttpClient) {}

  getKalpGridReport(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
