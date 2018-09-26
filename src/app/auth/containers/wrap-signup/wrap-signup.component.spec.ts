import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapSignupComponent } from './wrap-signup.component';

describe('WrapSignupComponent', () => {
  let component: WrapSignupComponent;
  let fixture: ComponentFixture<WrapSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
