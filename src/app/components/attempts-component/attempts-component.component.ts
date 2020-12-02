import { Component, OnInit } from '@angular/core';
import {AttemptServiceClient} from '../../../services/attempt.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-attempts-component',
  templateUrl: './attempts-component.component.html',
  styleUrls: ['./attempts-component.component.css']
})
export class AttemptsComponent implements OnInit {

  constructor(private service: AttemptServiceClient,
              private route: ActivatedRoute
  ) { }
  attempt = {_id: '', quiz: {}, answers: [], score: 0};
  attemptId = '';
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.attemptId = params.aid;
      this.service.findAttemptById(this.attemptId)
        .then(attempt => {
          console.log('executed');
          this.attempt = attempt;
        });
    });
  }
}

