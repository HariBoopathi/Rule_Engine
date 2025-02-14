import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
// import { AdminApiService } from '../../api-services/admin-api/admin-api.service';

@Injectable({
  providedIn: 'root',
})
export class InitialDataService {
  getTikinainfo: any = {};
  getislandinfo: any = {};
  getvillageinfo: any = {};

  getTikinainfo1: any = {};
  getislandinfo1: any = {};
  getvillageinfo1: any = {};

  // constructor(public adminService: AdminApiService, public data: DataService) {}

  DDLValues: any = {};
  DDLWorkflowValues: any = {
    ClientDDL: [],
  };

  // getDDL(methodName: keyof ApplicationApiService, options?: any): Promise<boolean> {
  //   return new Promise((resolve) => {
  //     const method = this.apiService[methodName];
  //     if (typeof method !== 'function') {
  //       console.error('Method not found on apiService', methodName);
  //       resolve(false);
  //     }
  //     this.apiService[methodName](options)
  //       .subscribe((success: any) => {
  //         success.data.forEach((element: any) => {
  //           this.DDLValues[element.key] = element.value;
  //         });
  //         resolve(true);
  //       });
  //   });
  // }

  // getAdminDDL(
  //   methodName: keyof AdminApiService,
  //   options?: any
  // ): Promise<boolean> {
  //   return new Promise((resolve) => {
  //     const method = this.adminService[methodName];
  //     if (typeof method !== 'function') {
  //       console.error('Method not found on apiService', methodName);
  //       resolve(false);
  //     }
  //     this.adminService[methodName](options).subscribe((success: any) => {
  //       success.data.forEach((element: any) => {
  //         this.DDLWorkflowValues[element.key] = element.value;
  //       });
  //       resolve(true);
  //     });
  //   });
  // }
}
