import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsightComponent } from './admin-insight.component';

describe('AdminInsightComponent', () => {
  let component: AdminInsightComponent;
  let fixture: ComponentFixture<AdminInsightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInsightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
