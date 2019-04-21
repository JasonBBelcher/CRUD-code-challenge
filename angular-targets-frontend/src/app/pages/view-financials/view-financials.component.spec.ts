import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFinancialsComponent } from './view-financials.component';

describe('ViewFinancialsComponent', () => {
  let component: ViewFinancialsComponent;
  let fixture: ComponentFixture<ViewFinancialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFinancialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFinancialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
