import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlytasksComponent } from './monthlytasks.component';

describe('MonthlytasksComponent', () => {
  let component: MonthlytasksComponent;
  let fixture: ComponentFixture<MonthlytasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlytasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlytasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
