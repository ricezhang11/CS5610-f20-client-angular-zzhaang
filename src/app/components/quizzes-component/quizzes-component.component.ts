import { Component, OnInit } from '@angular/core';
import {QuizzesServiceClient} from '../../../services/quiz.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quizzes-component',
  templateUrl: './quizzes-component.component.html',
  styleUrls: ['./quizzes-component.component.css']
})
export class QuizzesComponent implements OnInit {
  constructor(private service: QuizzesServiceClient,
              private route: ActivatedRoute) { }
  courseId = '';
  quizzes: any[] = [];
  attempts: any[] = [];


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.cid;
      this.service.findAllQuizzes()
        .then(quizzes => {
          this.quizzes = quizzes;
          this.findAttempts();
        });
    });
  }
  findAttempts = () => {
    for (let i = 0; i < this.quizzes.length; i++){
      // @ts-ignore
      this.service.findAttemptsForQuiz(this.quizzes[i]._id)
        .then(attempts => {
            for (const attempt of attempts){
              const currentQuizId = attempt.quiz._id;
              if (typeof this.attempts[currentQuizId] === 'undefined'){
                // @ts-ignore
                this.attempts[currentQuizId] = [];
              }
              let found = false;
              // @ts-ignore
              for (const currentAttempt of this.attempts[currentQuizId]){
                if (currentAttempt._id === attempt._id) {
                  found = true;
                }
              }
              if (!found){
                // @ts-ignore
                this.attempts[currentQuizId].push(attempt);
              }
            }
          }
        );
    }
  }
}
