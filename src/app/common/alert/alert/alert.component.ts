import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  msg: string;
  trueBtnText: string;
  trueBtnColor: string;
  trueRaised?: boolean;
  showTrue?: boolean;
  falseBtnText: string;
  falseBtnColor: string;
  falseRaised?: boolean;
  showFalse?: boolean;
}
@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
<div class="p-3 alert-box">
    <div mat-dialog-title class="d-flex align-items-center justify-content-center mb-3">
        <div class="alert-icon">
          <ion-icon name="alert-circle-outline"></ion-icon>
        </div>
        <div class="mb-1">
            <div class="alert-text">Alert</div>
        </div>
    </div>
    <div mat-dialog-content class="container-b text-center mb-3">
        <p class="tc">{{data.msg}}</p>
    </div>
    <div mat-dialog-actions class="d-flex align-items-center justify-content-center">
        <ng-container *ngIf="data.showFalse">
            <ng-container *ngIf="data.falseRaised">
                <button mat-raised-button (click)="valueClicked(false)"
                    [color]="data.falseBtnColor">{{data.falseBtnText}}</button>
            </ng-container>
            <ng-container *ngIf="!data.falseRaised">
                <button mat-button (click)="valueClicked(false)"
                    [color]="data.falseBtnColor">{{data.falseBtnText}}</button>
            </ng-container>
        </ng-container>
        <ng-container *ngIf="data.showTrue">
            <ng-container *ngIf="data.trueRaised">
                <button mat-raised-button (click)="valueClicked(true)"
                    [color]="data.trueBtnColor">{{data.trueBtnText}}</button>
            </ng-container>
            <ng-container *ngIf="!data.trueRaised">
                <button mat-button (click)="valueClicked(true)"
                    [color]="data.trueBtnColor">{{data.trueBtnText}}</button>
            </ng-container>
        </ng-container>
    </div>
</div>
`,
styles: [
]
})
export class AlertComponent implements OnInit {
  trueRaised = true;
  falseRaised = false;
  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (this.data.showFalse === undefined) {
      this.data.showFalse = true;
    }
    if (this.data.showTrue === undefined) {
      this.data.showTrue = true;
    }
    // g(this.data);
    // this.data.falseRaised ? this.falseRaised = this.data.falseRaised : '';
    // this.data.trueRaised ? this.trueRaised = this.data.trueRaised : '';
  }

  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  valueClicked(val: any) {
    this.dialogRef.close(val);
  }
}
