import { CUSTOM_ELEMENTS_SCHEMA, Component,Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-logout-alert',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="alert-container">
      <div class="alert-header">
        <div class="alert-title">
            Logout !!
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
              <svg width="44" height="41" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.391 30.9884H35.868C35.6274 30.9884 35.4019 31.0885 35.2516 31.2649C34.9008 31.6701 34.5249 32.0611 34.129 32.4329C32.5098 33.9749 30.5918 35.2037 28.4811 36.0514C26.2944 36.93 23.9441 37.3808 21.5703 37.3768C19.1699 37.3768 16.8446 36.9286 14.6596 36.0514C12.5489 35.2037 10.6309 33.9749 9.01168 32.4329C7.38955 30.8962 6.09611 29.0748 5.20299 27.0696C4.27587 24.991 3.80981 22.7836 3.80981 20.5C3.80981 18.2164 4.28088 16.0091 5.20299 13.9305C6.09502 11.9234 7.37795 10.1166 9.01168 8.56715C10.6454 7.01773 12.5447 5.79727 14.6596 4.94867C16.8446 4.07146 19.1699 3.62332 21.5703 3.62332C23.9708 3.62332 26.2961 4.06669 28.4811 4.94867C30.5959 5.79727 32.4953 7.01773 34.129 8.56715C34.5249 8.94378 34.8958 9.33471 35.2516 9.73517C35.4019 9.91157 35.6324 10.0117 35.868 10.0117H39.391C39.7067 10.0117 39.9022 9.67796 39.7268 9.42529C35.883 3.74251 29.1577 -0.0189976 21.5152 7.21726e-05C9.50781 0.0286768 -0.11916 9.30134 0.00111482 20.7098C0.121389 31.9371 9.73333 41 21.5703 41C29.1927 41 35.888 37.2433 39.7268 31.5748C39.8972 31.3221 39.7067 30.9884 39.391 30.9884ZM43.8462 20.1997L36.7349 14.8602C36.4693 14.6599 36.0835 14.8411 36.0835 15.1605V18.7838H20.3475C20.127 18.7838 19.9466 18.9554 19.9466 19.1652V21.8349C19.9466 22.0447 20.127 22.2163 20.3475 22.2163H36.0835V25.8396C36.0835 26.159 36.4743 26.3401 36.7349 26.1399L43.8462 20.8004C43.8941 20.7647 43.9328 20.7191 43.9595 20.6671C43.9861 20.615 44 20.5579 44 20.5C44 20.4422 43.9861 20.385 43.9595 20.333C43.9328 20.2809 43.8941 20.2354 43.8462 20.1997Z" fill="#FF6058"/>
</svg>

              </div>
              <div class="alert-description-content">
                <p class="alert-description p-3">
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
export class LogoutAlertComponent implements OnInit{
  msg = "Are you sure, You want to Logout ?"
  
  constructor(
    public dialogRef: MatDialogRef<LogoutAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if(data) {
         if(data.msg !== '') {
        this.msg = data.msg
      }
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
