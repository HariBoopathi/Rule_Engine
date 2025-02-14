import { Dialog } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertComponent } from '../../alert/alert/alert.component';
// import { AlertComponent } from '../../../app-core/core-component/dialog-component.component';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private dialogRef!: any;
  private onDialogClosed = new BehaviorSubject<boolean>(false);

  constructor(private dialog: Dialog) { }

  watchOnDialogClosed(): Observable<boolean> {
    return this.onDialogClosed.asObservable();
  }

  openDialog(template: any, option: any): Promise<any> {
    return new Promise((resolve) => {
      this.dialogRef = this.dialog.open<string>(template, option);
      this.dialogRef.closed.subscribe((result: any) => {
        resolve(result);
      });
    });
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.onDialogClosed.next(true);
      this.dialog.closeAll();
    }
  }

  notificationDialog(message: any): Promise<any> {
    const options = this.getDialogOptions('notification-pane', message, "notification");
    return this.openDialog(AlertComponent, options);
  }

  errorMessageOnly(message: any): Promise<any> {
    const options = this.getDialogOptions('Common-pane', message, "commonError");
    return this.openDialog(AlertComponent, options);
  }

  singleErrorMessageOnly(message: any): Promise<any> {
    const options = this.getDialogOptions('Common-pane', message, "singleError");
    return this.openDialog(AlertComponent, options);
  }

  private getDialogOptions(panelClass: string, message: any, type: any) {
    return {
      width: '500px',
      disableClose: true,
      panelClass,
      data: {
        msg: message,
        type: type
      },
    };
  }


  // logout() {
  //   return new Promise(async (resolve: any) => {
  //     let options = {
  //       width: '360px',
  //       data: {
  //         type: 'logout'
  //       },
  //     }
  //     let response = await this.openDialog(AlertComponent, options);
  //     resolve(response);

  //   });
  // }


  // checkDelete(message: any) {
  //   return new Promise(async (resolve: any) => {
  //     let options = {
  //       width: '360px',
  //       data: {
  //         msg: message,
  //         type: 'delete'
  //       },
  //     }
  //     let response = await this.openDialog(AlertComponent, options);
  //     resolve(response);

  //   });
  // }
}
