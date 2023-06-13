import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenLandsComponent } from './open-lands.component';

describe('OpenLandsComponent', () => {
  let component: OpenLandsComponent;
  let fixture: ComponentFixture<OpenLandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenLandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenLandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
