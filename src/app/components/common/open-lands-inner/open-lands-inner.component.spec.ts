import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenLandsInnerComponent } from './open-lands-inner.component';

describe('OpenLandsInnerComponent', () => {
  let component: OpenLandsInnerComponent;
  let fixture: ComponentFixture<OpenLandsInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenLandsInnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenLandsInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
