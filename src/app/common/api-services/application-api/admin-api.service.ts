import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { DataService } from '../../services/data/data.service';
import { ApiDataService } from "../../api-services/api-data.service";
import { AppSettingsService } from '../../services/app-settings/app-settings.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { ITGRule } from "./application-api.classes";

@Injectable({
  providedIn: "root",
})
export class AdminApiService {

  constructor(private data: DataService, private apiData: ApiDataService, private appSettings: AppSettingsService,
    private http: HttpClient
  ) { }


  // saveRuleSet(body: any, options?: any): Observable<any> {
  //   this.data.serviceStarted();
  //   options === undefined
  //     ? (options = this.apiData.defaultOptions)
  //     : (options = this.apiData.setOptions(options));
  //   return this.apiData
  //     .postData('localhost:5000/' + 'api/Rules', body)
  //     .pipe(
  //       finalize(() => this.data.serviceCompleted()),
  //       catchError((err) => {
  //         options ? options.hideErrorMethod ? '' : this.data.errorMethod(err) : '';
  //         return throwError(() => new Error(err));
  //       })
  //     );
  // }


  saveRuleSet(data: ITGRule): Observable<ITGRule> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 
      })
    };
    return this.http.post<ITGRule>('http://localhost:5000/api/Rules', data, httpOptions)
      .pipe(
        map((response: ITGRule) => {
          return response;
        }),
      );
  }
}