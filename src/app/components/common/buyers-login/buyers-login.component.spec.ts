import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyersLoginComponent } from './buyers-login.component';

describe('BuyersLoginComponent', () => {
  let component: BuyersLoginComponent;
  let fixture: ComponentFixture<BuyersLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyersLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyersLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
