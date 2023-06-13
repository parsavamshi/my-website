import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTrandsComponent } from './price-trands.component';

describe('PriceTrandsComponent', () => {
  let component: PriceTrandsComponent;
  let fixture: ComponentFixture<PriceTrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceTrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceTrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
