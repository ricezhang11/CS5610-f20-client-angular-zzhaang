import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-multiple-choice-question-component',
  templateUrl: './multiple-choice-question-component.component.html',
  styleUrls: ['./multiple-choice-question-component.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', correct: '', type: '', choices: [], answer: ''};
  @Input()
  answer = '';
  @Input()
  isAttempt = false;
  @Input()
  graded = false;
  @Output()
  answerChange = new EventEmitter<string>();
  submitAnswer = (choice: string) => {
    this.answer = choice;
    this.answerChange.emit(this.answer);
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


  constructor() { }
  ngOnInit(): void {
  }


}
