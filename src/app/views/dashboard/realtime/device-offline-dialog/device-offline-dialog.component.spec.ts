import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceOfflineDialogComponent } from './device-offline-dialog.component';

describe('DeviceOfflineDialogComponent', () => {
  let component: DeviceOfflineDialogComponent;
  let fixture: ComponentFixture<DeviceOfflineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceOfflineDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeviceOfflineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
