import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersLoginComponent } from './sellers-login.component';

describe('SellersLoginComponent', () => {
  let component: SellersLoginComponent;
  let fixture: ComponentFixture<SellersLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
