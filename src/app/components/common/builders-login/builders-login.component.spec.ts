import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildersLoginComponent } from './builders-login.component';

describe('BuildersLoginComponent', () => {
  let component: BuildersLoginComponent;
  let fixture: ComponentFixture<BuildersLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildersLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildersLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
