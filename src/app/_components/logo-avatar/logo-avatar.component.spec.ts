import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAvatarComponent } from './logo-avatar.component';

describe('LogoAvatarComponent', () => {
  let component: LogoAvatarComponent;
  let fixture: ComponentFixture<LogoAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
