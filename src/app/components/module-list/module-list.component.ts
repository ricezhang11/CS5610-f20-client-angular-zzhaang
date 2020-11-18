import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from '../../../services/ModuleService';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})

export class ModuleListComponent implements OnInit {
  modules = [];
  courseId = '';
  moduleId = '';
  constructor(private moduleService: ModuleService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const cid = params.cid;
      this.moduleId = params.mid;
      // console.log(this.courseId);
      // console.log(cid);
      if (cid !== this.courseId && typeof cid !== 'undefined') {
        this.courseId = cid;
        // console.log('after fix' + this.courseId);
        this.moduleService.findModulesForCourse(this.courseId)
          .then(modules => this.modules = modules);
      }
    });
  }
}
