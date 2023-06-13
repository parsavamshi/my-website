import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeLocationsComponent } from './prime-locations.component';

describe('PrimeLocationsComponent', () => {
  let component: PrimeLocationsComponent;
  let fixture: ComponentFixture<PrimeLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
