import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyLivingComponent } from './happy-living.component';

describe('HappyLivingComponent', () => {
  let component: HappyLivingComponent;
  let fixture: ComponentFixture<HappyLivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappyLivingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyLivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
