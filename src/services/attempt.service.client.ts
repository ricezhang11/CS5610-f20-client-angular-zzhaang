import {Injectable} from '@angular/core';

@Injectable()
export class AttemptServiceClient {
  findAttemptById = (aid: any) => fetch(`http://localhost:3000/api/attempts/${aid}`)
    .then(response => response.json())
}
