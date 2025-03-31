import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-device-offline-dialog',
  styleUrl: './device-offline-dialog.component.scss',
  templateUrl: './device-offline-dialog.component.html',
})
export class DeviceOfflineDialogComponent {
  constructor(private dialogRef: MatDialogRef<DeviceOfflineDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
