import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptsComponentComponent } from './attempts-component.component';

describe('AttemptsComponentComponent', () => {
  let component: AttemptsComponentComponent;
  let fixture: ComponentFixture<AttemptsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttemptsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
