import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-true-false-question-component',
  templateUrl: './true-false-question-component.component.html',
  styleUrls: ['./true-false-question-component.component.css'],
  // template: '<h1>hello world</h1>'
})

export class TrueFalseQuestionComponent implements OnInit {
  choices = ['true', 'false'];
  @Input()
  question = {_id: '', title: '', question: '', correct: '', type: '', answer: ' '};
  @Input()
  answer = '';
  @Input()
  isAttempt = undefined;
  @Input()
  graded = false;
  @Output()
  answerChange = new EventEmitter<string>();
  submitAnswer = (choice: string) => {
    this.answer = choice;
    this.answerChange.emit(this.answer);
  }
  constructor() { }
  ngOnInit(): void {
  }

  checkFormat = (choice: string) => {
    if (this.isAttempt && choice === this.question.correct) {
      return 'list-group-item background-green';
    } else if (this.isAttempt && choice === this.question.answer && this.question.answer !== this.question.correct) {
      return 'list-group-item background-red';
    } else {
      return 'list-group-item';
    }
  }
}
