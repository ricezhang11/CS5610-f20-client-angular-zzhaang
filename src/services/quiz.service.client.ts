import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () => fetch('http://localhost:3000/api/quizzes')
    .then(response => response.json())
  findQuizById = (qid: any) => fetch(`http://localhost:3000/api/quizzes/${qid}`)
    .then(response => response.json())
  findAttemptsForQuiz = (qzid: any) => fetch(`http://localhost:3000/api/quizzes/${qzid}/attempts`)
    .then(response => response.json())
  createAttemptForQuiz = (qzid: any, questions: any) => fetch(`http://localhost:3000/api/quizzes/${qzid}/attempts`,
    {
      method: 'POST',
      body: JSON.stringify(questions),
      headers: {
        'content-type': 'application/json'
      }})
    .then(response => response.json())
}
