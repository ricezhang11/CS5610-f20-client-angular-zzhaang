import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFalseQuestionComponentComponent } from './true-false-question-component.component';

describe('TrueFalseQuestionComponentComponent', () => {
  let component: TrueFalseQuestionComponentComponent;
  let fixture: ComponentFixture<TrueFalseQuestionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrueFalseQuestionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueFalseQuestionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
