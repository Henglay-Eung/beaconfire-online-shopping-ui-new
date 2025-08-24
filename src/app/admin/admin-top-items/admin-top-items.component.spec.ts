import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopItemsComponent } from './admin-top-items.component';

describe('AdminTopItemsComponent', () => {
  let component: AdminTopItemsComponent;
  let fixture: ComponentFixture<AdminTopItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTopItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTopItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
