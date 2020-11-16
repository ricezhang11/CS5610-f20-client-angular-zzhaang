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
      if (cid !== this.courseId && typeof this.courseId !== 'undefined') {
        this.courseId = cid;
        this.moduleService.findModulesForCourse(this.courseId)
          .then(modules => this.modules = modules);
      }
    });
  }

}
