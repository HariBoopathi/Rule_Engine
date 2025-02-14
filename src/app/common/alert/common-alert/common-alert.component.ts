import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-common-alert',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatDialogModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="alert-container">
      <div class="alert-header-info">
        <div class="alert-title">
            Info !!
        </div>
      </div>
      <div class="alert-content">
          <div class="alert-flexbox">
                
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
export class CommonAlertComponent {
  msg = "Are you sure, You want to delete ?"

  constructor(
    public dialogRef: MatDialogRef<CommonAlertComponent>,
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
