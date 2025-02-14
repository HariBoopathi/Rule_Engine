import { Injectable } from '@angular/core';
// import {  UserDto } from './common/api-services/admin-api/admin-api.classes';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  userLoginId: any = '';
  breadCrumb: any = []
  // userData:any = new UserDto();
  
  constructor() { }
}
