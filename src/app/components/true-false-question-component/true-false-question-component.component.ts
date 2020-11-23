import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-true-false-question-component',
  templateUrl: './true-false-question-component.component.html',
  styleUrls: ['./true-false-question-component.component.css']
})

export class TrueFalseQuestionComponent implements OnInit {
  @Input()
  question = {_id: '', title: '', question: '', correct: '', type: '', quizId: ''};
  grading = false;
  choices = ['TRUE', 'FALSE'];
  selected = '';
  grade = () => {
    this.grading = true;
  }
  checkAnswer = (choice: string) => {
    if (!this.grading){
      if (this.selected === choice) {
        return 'list-group-item background-green';
      } else{
        return 'list-group-item';
      }
    } else{
      if (choice.toLowerCase() === this.question.correct){
        return 'list-group-item background-green';
      } else if (choice === this.selected && choice.toLowerCase() !== this.question.correct) {
        return 'list-group-item background-red';
      } else{
        return 'list-group-item';
      }
    }
  }
  constructor() { }
  ngOnInit(): void {
  }

}
