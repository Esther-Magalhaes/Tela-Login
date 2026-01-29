import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginC2Component } from './login-c2.component';

describe('LoginC2Component', () => {
  let component: LoginC2Component;
  let fixture: ComponentFixture<LoginC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginC2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
