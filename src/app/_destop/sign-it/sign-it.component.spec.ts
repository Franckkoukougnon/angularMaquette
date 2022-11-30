import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignItComponent } from './sign-it.component';

describe('SignItComponent', () => {
  let component: SignItComponent;
  let fixture: ComponentFixture<SignItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignItComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
