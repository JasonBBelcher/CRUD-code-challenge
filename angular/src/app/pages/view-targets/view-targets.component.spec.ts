import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTargetsComponent } from './view-targets.component';

describe('ViewTargetsComponent', () => {
  let component: ViewTargetsComponent;
  let fixture: ComponentFixture<ViewTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
