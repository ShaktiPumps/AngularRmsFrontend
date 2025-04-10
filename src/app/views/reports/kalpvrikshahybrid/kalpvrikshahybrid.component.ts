import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { TodoItem, TagItem } from 'app/shared/models/todo.model';
import { Subject } from 'rxjs';
import { MatMenuModule as MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { PerfectScrollbarModule } from 'app/shared/components/perfect-scrollbar';
import { DatareportComponent } from './datareport/datareport.component';
import { CumulativeComponent } from './cumulative/cumulative.component';
import { KalphybridService } from './service/kalphybrid.service';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-kalpvrikshahybrid',
  standalone: true,
  imports: [
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    SharedMaterialModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    DatareportComponent,
    CumulativeComponent,
  ],
  templateUrl: './kalpvrikshahybrid.component.html',
  styleUrl: './kalpvrikshahybrid.component.scss',
})

export class KalpvrikshahybridComponent implements OnInit, OnDestroy {
  searchTerm: string;
  test: string;
  tagList: TagItem[];
  tagMap: Map<number, string> = new Map<number, string>();
  isMasterToggled: boolean = false;
  toggledItemNumber: number = 0;
  unsubscribeAll: Subject<any> = new Subject();
  basicForm: UntypedFormGroup;
  minEndDate: Date | null = null;

  constructor(
    private cdr: ChangeDetectorRef,
    private kalService: KalphybridService,
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.tagMap.clear();
    this.basicForm = this.fb.group(
      {
        deviceNo: ['', Validators.required],
        startDate: [new Date(), Validators.required],
        endDate: [new Date(), Validators.required],
      },
      { validators: this.endDateAfterStartDateValidator }
    );

    this.basicForm.get('startDate')?.valueChanges.subscribe((startDate) => {
      this.minEndDate = startDate;
      this.basicForm.get('endDate')?.updateValueAndValidity();
    });
  }

  endDateAfterStartDateValidator(group: AbstractControl): ValidationErrors | null {
    const start = group.get('startDate')?.value;
    const end = group.get('endDate')?.value;

    if (!start || !end) return null;

    return moment(end).isBefore(moment(start)) ? { endBeforeStart: true } : null;
  }

  ngOnDestroy() {
    this.unsubscribeAll.next(1);
    this.unsubscribeAll.complete();
  }

  onSearch() {
    if (this.basicForm.invalid) {
      this.basicForm.markAllAsTouched();
      console.log('Form is invalid. Errors:', this.basicForm.errors);
      return;
    }
    console.log('Form Submitted:', this.basicForm.value);
    const formData = this.basicForm.value;

    const formattedDeviceNo = formData.deviceNo;
    const formattedStartDate = moment(formData.startDate).format('MM/DD/YYYY');
    const formattedEndDate = moment(formData.endDate).format('MM/DD/YYYY');
    const formattedDeviceType = formData.deviceNo.substring(0, 2);

    const requestData = {
      DeviceNo: formattedDeviceNo,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      deviceType: formattedDeviceType,
      ClientIdList: this.kalService.getClientIdList(),
    };

    this.kalService.getKalpHybridData(requestData).subscribe({
      next: (response) => {
        if (response?.message === 'Failed') {
          this.snackBar.open('IMEI is duplicate in device no', 'Close', {
            duration: 4000,
            verticalPosition: 'top',
          });
        }
  
        if (response?.status && Array.isArray(response.response)) {
          const processedData = response.response.map((item) => ({
            ...item,
            Date: item.Date ? item.Date.split(' ')[0] : '',
            Time: item.Time ? item.Time.split(' ')[1] : '',
          }));
  
          this.kalService.apiResponseSubject.next(processedData);
        } else {
          this.kalService.apiResponseSubject.next([]);
        }
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  

    this.kalService.getKalpHybridData(requestData);
    this.kalService.getKalpHybridCumulative(requestData);
  }
}
