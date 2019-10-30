import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklytasksComponent } from './weeklytasks.component';

describe('WeeklytasksComponent', () => {
  let component: WeeklytasksComponent;
  let fixture: ComponentFixture<WeeklytasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklytasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklytasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
