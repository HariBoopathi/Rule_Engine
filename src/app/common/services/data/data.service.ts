import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OverlayService } from '../overlay/overlay.service';
import { AlertComponent } from '../../alert/alert/alert.component';
import { StorageService } from '../storage/storage.service';
import { AppSettingsService } from '../app-settings/app-settings.service';
import { MessageBoxService } from '../../message-box/message-box.service';
// import { AppMessage } from '../../api-services/admin-api/admin-api.classes';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly defaultOptions: any = {
    hideErrorMethod: false,
    hideFullSpinner: false,
    hidejwt: false,
    type: '',
  };
  basePath = '';
  loadingTrue = false;
  btnClicked = false;
  token = '';
  message:any
  messageBoxExpandTrue = false;
  selectedInputId = '';

  constructor(
    public storage: StorageService,
    public appSetting: AppSettingsService,
    private http: HttpClient,
    private dialog: MatDialog,
    // private alert: AlertService,
    private snackBar: MatSnackBar,
    public router: Router,
    // public appService: AppService,
    public overlayService: OverlayService,
    // public megaMenu: MegaMenuOverlayRef,
    public messageBoxService: MessageBoxService
  ) { }

  async getToken() {
    await this.storage.get('userData').then((val) => {
      if (val) {
        // this.appService.userData = val;
        this.token = val.jwtToken;
      }
    });
  }

  checkToken(): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      if (this.token !== '') {
        resolve(true);
      } else {
        await this.storage.get('userData').then((val) => {
          if (val) {
            this.token = val.jwtToken;
            resolve(true);
          }
        });
      }
    });
  }

  setOptions(options: any) {
    for (const opPath of Object.keys(this.defaultOptions)) {
      options[opPath] === undefined
        ? (options[opPath] = this.defaultOptions[opPath])
        : '';
    }
    return options;
  }

  serviceStarted() {
    this.message 
    this.loadingTrue = true;
    this.btnClicked = true;
  }
  serviceCompleted() {
    this.loadingTrue = false;
    this.btnClicked = false;
  }

  // Error Methods
  errorMethod(err: any) {
    ;
    switch (err.status) {
      case 0:
        if (err.statusText === 'Unknown Error') {
          this.internalServerError('');
        }
        break;
      case 400:
        this.message = err.error;
        setTimeout(() => {
          this.messageBoxService.expandMessageBox(this.message.errorMessage[0].errorMsgType);
        }, 400);
        break;
      case 401:
        this.internalServerError('');
        break;
      case 500:
        this.internalServerError(err.error);
        break;
      case 501:
        this.internalServerError(err.error);
        break;
      case 503:
        this.internalServerError(err.error);
        break;
      default:
        break;
    }
  }

  async internalServerError(msg: any) {
    // this.constructErrorMsg(msg);
    let xmsg = '';
    msg !== '' && msg != null
      ? (xmsg = msg)
      : (xmsg =
          'We are currently facing some technical issues right now. Please try again after some time.');
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '450px',
      height: '250px',
      disableClose: true,
      data: {
        msg: xmsg,
        trueBtnText: 'Ok',
        trueBtnColor: 'danger',
        trueRaised: true,
        falseBtnText: '',
        falseBtnColor: 'danger',
        showTrue: true,
        showFalse: false,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  confirmSessionOut(msg: any) {
    let xmsg = '';
    msg !== ''
      ? (xmsg = msg)
      : (xmsg = 'Your session expired. Please login again to continue.');
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '350px',
      disableClose: true,
      data: {
        msg: xmsg,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.router.navigateByUrl('/');
      }
    });
  }

  successMessage(msg: any) {
    this.snackBar.open(msg, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['bg-primary'],
      duration: 3000,
    });
  }

  errorMesaageOnly(msg: any) {
    
    this.constructErrorMsg(msg);
  }

  constructErrorMsg(val: any) {
    this.message.hasError = true;
    this.message.errorMessage = [];
    const obj = {
      msgID: 0,
      msgType: 2,
      msgDescription: val,
    };
    this.message.errorMessage.push(obj);
    setTimeout(() => {
      // this.messageBoxExpandTrue = true;
      this.messageBoxService.expandMessageBox(2);
    }, 400);
  }

  clearMessageBox() {
    this.message
    // this.messageBoxService.detachOverlay();
  }
  testErrorMsg() {
    this.message = {
      infoMessage: {
        errorID: 0,
        errorMsg: '',
        errorMsgType: 0,
      },
      errorMessage: [
        { errorID: 0, errorMsgType: 0, errorMsg: 'UserLoginId Already Exists' },
        { errorID: 0, errorMsgType: 1, errorMsg: 'UserLoginId Already Exists' },
        { errorID: 0, errorMsgType: 2, errorMsg: 'UserLoginId Already Exists' },
       
      ],
      hasError: true,
    };
    this.messageBoxService.expandMessageBox(2);
    setTimeout(() => {
      this.messageBoxExpandTrue = true;
    }, 400);
  }
}
