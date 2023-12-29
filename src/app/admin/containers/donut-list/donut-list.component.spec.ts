import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutListComponent } from './donut-list.component';

describe('DonutListComponent', () => {
  let component: DonutListComponent;
  let fixture: ComponentFixture<DonutListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonutListComponent]
    });
    fixture = TestBed.createComponent(DonutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
