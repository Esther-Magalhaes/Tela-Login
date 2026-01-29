import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginC1Component } from './login-c1.component';

describe('LoginC1Component', () => {
  let component: LoginC1Component;
  let fixture: ComponentFixture<LoginC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginC1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
