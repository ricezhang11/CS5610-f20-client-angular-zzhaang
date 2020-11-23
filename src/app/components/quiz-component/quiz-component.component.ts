import { Component, OnInit } from '@angular/core';
import {QuestionsServiceClient} from '../../../services/question.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz-component',
  templateUrl: './quiz-component.component.html',
  styleUrls: ['./quiz-component.component.css']
})
export class QuizComponent implements OnInit {
  questions = [];
  quizId = '';
  constructor(private service: QuestionsServiceClient,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.qid;
      this.service.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    });
  }

}
