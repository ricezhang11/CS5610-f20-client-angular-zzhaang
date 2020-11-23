import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceQuestionComponentComponent } from './multiple-choice-question-component.component';

describe('MultipleChoiceQuestionComponentComponent', () => {
  let component: MultipleChoiceQuestionComponentComponent;
  let fixture: ComponentFixture<MultipleChoiceQuestionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleChoiceQuestionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceQuestionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
