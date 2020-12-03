import {Injectable} from '@angular/core';


@Injectable()
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid: any) => fetch(`https://cs5610-server-node-azhang.herokuapp.com/api/quizzes/${qid}/questions`)
    .then(response => response.json())
}
