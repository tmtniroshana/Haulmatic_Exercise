import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDerectiveComponent } from './dashboard-derective.component';

describe('DashboardDerectiveComponent', () => {
  let component: DashboardDerectiveComponent;
  let fixture: ComponentFixture<DashboardDerectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDerectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDerectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
