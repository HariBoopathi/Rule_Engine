import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageExpandComponent } from './message-expand.component';

describe('MessageExpandComponent', () => {
  let component: MessageExpandComponent;
  let fixture: ComponentFixture<MessageExpandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MessageExpandComponent]
    });
    fixture = TestBed.createComponent(MessageExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
