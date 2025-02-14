import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { interval, switchMap, catchError, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AppSettingsService {

  private settingsSubject = new BehaviorSubject<any>(null);

  public environment: any = {};
  helperText: any = {};
  screenPath = '';

  constructor(private http: HttpClient) { 
    // this.pollSettings();
  }

  pollSettings() {
    interval(3000)
      .pipe(
        switchMap(() => this.loadConfig()), 
        catchError(error => {
          console.error('Error fetching settings', error);
          return [];
        })
      )
      .subscribe(newSettings => {
        const currentSettings = this.settingsSubject.value;
        if (JSON.stringify(currentSettings) !== JSON.stringify(newSettings)) {
          this.settingsSubject.next(newSettings);
          this.environment = newSettings;
        }
      });
  }

  loadConfig() {
    let d = new Date();
    let n = d.getTime();
    return this.http.get('./app.settings.json?v=' + n);
  }
  loadHelperText() {
    let d = new Date();
    let n = d.getTime();
    return this.http.get('./app.helper.json?v=' + n);
  }

  public get settingsChanges(): Observable<any> {
    return this.settingsSubject.asObservable();
  }
}
