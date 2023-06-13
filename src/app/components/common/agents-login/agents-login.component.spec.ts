import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsLoginComponent } from './agents-login.component';

describe('AgentsLoginComponent', () => {
  let component: AgentsLoginComponent;
  let fixture: ComponentFixture<AgentsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
