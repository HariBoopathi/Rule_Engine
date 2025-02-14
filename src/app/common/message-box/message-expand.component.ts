import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageHeaderComponent } from './message-header.component';
import { DataService } from '../services/data/data.service';
import { MessageFilterPipe } from './message-filter.pipe';
import { MessageBoxService } from './message-box.service';

@Component({
  selector: 'app-message-expand',
  standalone: true,
  imports: [CommonModule, MessageHeaderComponent, MessageFilterPipe],
  template: `
    <div class="message-cover">
      <div class="message-status" [ngClass]="{'error': messageBoxService.errorMessage, 'warn': messageBoxService.warningMessage, 'info': messageBoxService.infoMessage}">
          <ng-container *ngIf="messageBoxService.errorMessage">
              Error
          </ng-container>
          <ng-container *ngIf="messageBoxService.warningMessage">
              Warning
          </ng-container>
          <ng-container *ngIf="messageBoxService.infoMessage">
              Info
          </ng-container>
      </div> 
      <div class="message-content-banner">
          <div class="message-header" [ngClass]="{'error': messageBoxService.errorMessage, 'warn': messageBoxService.warningMessage, 'info': messageBoxService.infoMessage}">
              <app-message-header></app-message-header>
          </div>
          <div class="message-content-container">
              <div class="message-content-portal" [ngClass]="{'closing': messageBoxService.closing, 'animation-none': messageBoxService.isExpanded}">
                  <div class="message-content-box">
                      <ng-container *ngIf="messageBoxService.errorMessage">
                        <ul class="error-message">
                          <li class="d-flex align-items-center" *ngFor="let message of data.message.errorMessage | messageFilter: 2; let i = index">
                              {{i+1}}.  {{message.errorMsg}}
                          </li>
                        </ul>
                      </ng-container>

                      <ul class="warn-message" *ngIf="messageBoxService.warningMessage">
                          <li class="d-flex align-items-center" *ngFor="let message of data.message.errorMessage | messageFilter: 1; let i = index">
                            {{i+1}}. {{message.errorMsg}}
                          </li>
                      </ul>
                      <ul class="info-message" *ngIf="messageBoxService.infoMessage">
                          <li class="d-flex align-items-center" *ngFor="let message of data.message.errorMessage | messageFilter: 0; let i = index">
                            {{i+1}}. {{message.errorMsg}}
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class MessageExpandComponent implements OnInit {

  constructor(
    public data: DataService,
    public messageBoxService: MessageBoxService
  ) {

  }

  ngOnInit(): void {

  }
}
