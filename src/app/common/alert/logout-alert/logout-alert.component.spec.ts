import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutAlertComponent } from './logout-alert.component';

describe('LogoutAlertComponent', () => {
  let component: LogoutAlertComponent;
  let fixture: ComponentFixture<LogoutAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LogoutAlertComponent]
    });
    fixture = TestBed.createComponent(LogoutAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
