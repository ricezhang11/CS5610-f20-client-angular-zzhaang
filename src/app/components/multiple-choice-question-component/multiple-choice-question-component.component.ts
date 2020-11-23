import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-multiple-choice-question-component',
  templateUrl: './multiple-choice-question-component.component.html',
  styleUrls: ['./multiple-choice-question-component.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', correct: '', type: '', quizId: '', choices: []};
  selected = '';
  grading = false;
  grade = () => {
    this.grading = true;
  }
  constructor() { }
  ngOnInit(): void {
  }
  checkAnswer = (choice: string) => {
    if (this.grading){
      if (this.selected === choice && this.selected === this.question.correct || choice === this.question.correct) {
        return 'list-group-item background-green';
      } else if (this.selected !== choice) {
      return 'list-group-item';
    } else {
      return 'list-group-item background-red';
    }}
   else {
     if (this.selected === choice){
       return 'list-group-item background-green';
     } else {
       return 'list-group-item';
     }
    }
  }

}
