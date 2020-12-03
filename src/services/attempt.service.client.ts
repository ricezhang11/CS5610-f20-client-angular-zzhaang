import {Injectable} from '@angular/core';

@Injectable()
export class AttemptServiceClient {
  findAttemptById = (aid: any) => fetch(`https://cs5610-server-node-azhang.herokuapp.com/api/attempts/${aid}`)
    .then(response => response.json())
}
