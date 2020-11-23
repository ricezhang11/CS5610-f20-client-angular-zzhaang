import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { LessonService } from '../../../services/LessonService';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  courseId = '';
  moduleId = '';
  lessonId = '';
  lessons = [];
  constructor(private activeRoute: ActivatedRoute,
              private lessonService: LessonService) { }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.courseId = params.cid;
      this.lessonId = params.lid;
      const mid = params.mid;
      // debugger
      if (mid !== this.moduleId && typeof mid !== 'undefined'){
        // debugger
        this.moduleId = mid;
        this.lessonService.findLessonsForModule(this.moduleId)
          .then(lessons => this.lessons = lessons);
      }
    });
  }
}
