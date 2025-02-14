import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-alert',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="alert-container">
      <div class="alert-header">
        <div class="alert-title">
            Alert !!
        </div>
        <div class="close-button">
            <button mat-icon-button class="close" (click)="close()">
              <ion-icon name="close-outline"></ion-icon>
            </button>
        </div>
      </div>
      <div class="alert-content">
          <div class="alert-flexbox">
              <div class="alert-icon">
                <ion-icon src="assets/svg/delete.svg"></ion-icon>
              </div>
              <div class="alert-description-content">
                <p class="alert-description">
                  {{msg}}
                </p>
                <div class="alert-buttons">
                    <button mat-raised-button (click)="delete()">
                        Yes
                    </button>
                    <a class="secondary-button ml-2" mat-button (click)="noDelete()">
                        No
                    </a>
                </div>
              </div>
          </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DeleteAlertComponent implements OnInit {
  msg = "Are you sure, You want to delete ?"
  
  constructor(
    public dialogRef: MatDialogRef<DeleteAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
      if(data.msg !== '') {
        this.msg = data.msg
      }
  }

  ngOnInit(): void {
      
  }

  close() {
    this.dialogRef.close();
  }

  delete() {
    this.dialogRef.close(true)
  }

  noDelete() {
    this.dialogRef.close(false)
  }

}
