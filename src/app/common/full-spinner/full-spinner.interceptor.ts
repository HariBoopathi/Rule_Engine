import {
  HttpEvent,
  HttpHandler,
  HttpHandlerFn,
  HttpHeaders,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { PreLoaderService } from './pre-loader.service';

export const fullSpinnerInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const fullSpinner = inject(PreLoaderService);
  let spinnerSubscription: Subscription;
  if (req.headers.has('Spinner')) {
    if (req.headers.get('Spinner') === 'true') {
      spinnerSubscription = fullSpinner.emptySpinner.subscribe();
    }
  }
  let auth: any = req.headers.has('Authorization')
    ? req.headers.get('Authorization')
    : '';
  const newRequest = req.clone({
    headers: new HttpHeaders({
      Authorization: auth,
      'ngrok-skip-browser-warning': '69420',
    }),
  });
  return next(newRequest).pipe(
    finalize(() => {
      if (spinnerSubscription) {
        spinnerSubscription.unsubscribe();
      }
    })
  );
};
