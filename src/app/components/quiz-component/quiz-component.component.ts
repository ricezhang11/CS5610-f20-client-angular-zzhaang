import { Component, OnInit } from '@angular/core';
import {QuestionsServiceClient} from '../../../services/question.service.client';
import {QuizzesServiceClient} from '../../../services/quiz.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz-component',
  templateUrl: './quiz-component.component.html',
  styleUrls: ['./quiz-component.component.css']
})
export class QuizComponent implements OnInit {
  questions: any[] = [];
  quizId = '';
  courseId = '';
  graded = false;
  constructor(private service: QuestionsServiceClient,
              private quizService: QuizzesServiceClient,
              private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.qid;
      this.courseId = params.cid;
      this.service.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    });
  }
  submitQuiz = () => {
    this.graded = true;
    this.quizService.createAttemptForQuiz(this.quizId, this.questions)
      .then(response => response.json());
  }
}
