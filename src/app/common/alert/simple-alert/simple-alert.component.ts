import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-simple-alert',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './simple-alert.component.html',
  styleUrls: ['./simple-alert.component.scss']
})
export class SimpleAlertComponent {
  msg = ""

  constructor(
    public dialogRef: MatDialogRef<SimpleAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.msg !== '') {
      this.msg = data.msg
    }
  }

  ngOnInit(): void {

  }

  close() {
    this.dialogRef.close();
  }

  delete(val?: any) {
    this.dialogRef.close(val);
    // if(val) {
    //   this.dialogRef.close()
    // } else {
    //   this.dialogRef.close(true)
    // }
  }

  noDelete() {
    this.dialogRef.close(false)
  }
}
