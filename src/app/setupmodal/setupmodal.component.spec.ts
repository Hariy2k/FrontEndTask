import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupmodalComponent } from './setupmodal.component';

describe('SetupmodalComponent', () => {
  let component: SetupmodalComponent;
  let fixture: ComponentFixture<SetupmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
