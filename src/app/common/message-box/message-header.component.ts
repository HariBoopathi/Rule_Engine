import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MessageBoxService } from './message-box.service';
import { DataService } from '../services/data/data.service';
import { MessageFilterPipe } from './message-filter.pipe';

@Component({
  selector: 'app-message-header',
  standalone: true,
  imports: [CommonModule, MatRippleModule, MessageFilterPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="message-header-banner">
      <div class="ml-auto d-flex align-items-center">
          <ng-container *ngIf="(data.message.errorMessage | messageFilter : 2).length > 0">
            <div class="error-button" matRipple [ngClass]="{'active': messageBoxService.errorMessage}" (click)="messageBoxService.setErrorMessageView(2)">
                <div class="title">
                  Error
                </div>
                <div class="count">
                {{(data.message.errorMessage |
                  messageFilter: 2).length}}
                </div>
            </div>
          </ng-container>
          <ng-container *ngIf="(data.message.errorMessage | messageFilter : 1).length > 0">
            <div class="warn-button" matRipple [ngClass]="{'active': messageBoxService.warningMessage}" (click)="messageBoxService.setErrorMessageView(1)">
                <div class="title">
                  Warning
                </div>
                <div class="count">
                {{(data.message.errorMessage |
                  messageFilter: 1).length}}
                </div>
            </div>
          </ng-container>
          <ng-container *ngIf="(data.message.errorMessage | messageFilter : 0).length > 0">
            <div class="info-button" matRipple [ngClass]="{'active': messageBoxService.infoMessage}" (click)="messageBoxService.setErrorMessageView(0)">
                <div class="title">
                  Information
                </div>
                <div class="count">
                {{(data.message.errorMessage |
                  messageFilter: 0).length}}
                </div>
            </div>
          </ng-container>
          <div class="message-controls">
              <div class="icon-button" matRipple (click)="messageBoxService.toggle()" [ngClass]="{'rotate-button': messageBoxService.closing}">
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 1.90284L14.12 -8.21774e-08L8 6.18084L1.88 -6.17205e-07L-8.31756e-08 1.90283L8 10L16 1.90284Z"  fill="#656464"/>
                </svg>
              </div>
              <div class="icon-button" matRipple (click)="messageBoxService.closeErrorMessageBox()">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1.20857L10.7914 0L6 4.79143L1.20857 0L0 1.20857L4.79143 6L0 10.7914L1.20857 12L6 7.20857L10.7914   12L12 10.7914L7.20857 6L12 1.20857Z" fill="#49454F"/>
                </svg>
              </div>
          </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class MessageHeaderComponent {

  constructor(
    public messageBoxService: MessageBoxService,
    public data: DataService
  ) {

  }

}
