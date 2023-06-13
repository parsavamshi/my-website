import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressRelasesComponent } from './press-relases.component';

describe('PressRelasesComponent', () => {
  let component: PressRelasesComponent;
  let fixture: ComponentFixture<PressRelasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressRelasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressRelasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
