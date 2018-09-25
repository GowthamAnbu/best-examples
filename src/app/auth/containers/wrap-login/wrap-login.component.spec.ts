import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapLoginComponent } from './wrap-login.component';

describe('WrapLoginComponent', () => {
  let component: WrapLoginComponent;
  let fixture: ComponentFixture<WrapLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
