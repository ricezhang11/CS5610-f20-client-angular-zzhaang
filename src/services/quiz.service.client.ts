import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () => fetch('https://cs5610-server-node-azhang.herokuapp.com/api/quizzes')
    .then(response => response.json())
  findQuizById = (qid: any) => fetch(`https://cs5610-server-node-azhang.herokuapp.com/api/quizzes/${qid}`)
    .then(response => response.json())
  findAttemptsForQuiz = (qzid: any) => fetch(`https://cs5610-server-node-azhang.herokuapp.com/api/quizzes/${qzid}/attempts`)
    .then(response => response.json())
  createAttemptForQuiz = (qzid: any, questions: any) =>
    fetch(`https://cs5610-server-node-azhang.herokuapp.com/api/quizzes/${qzid}/attempts`,
    {
      method: 'POST',
      body: JSON.stringify(questions),
      headers: {
        'content-type': 'application/json'
      }})
    .then(response => response.json())
}
