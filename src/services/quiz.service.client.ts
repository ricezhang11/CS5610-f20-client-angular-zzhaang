import {Injectable} from '@angular/core';

@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () => fetch('https://cs5610-server-node-azhang.herokuapp.com/api/quizzes')
    .then(response => response.json())
  findQuizById = (qid: any) => fetch(`https://cs5610-server-node-azhang.herokuapp.com/api/quizzes/${qid}`)
    .then(response => response.json())
}
