import {Injectable} from '@angular/core';


@Injectable()
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid: any) => fetch(`http://localhost:3000/api/quizzes/${qid}/questions`)
    .then(response => response.json())
}
