import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService} from '../../../services/CourseService';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  course = {
    _id: '',
    title: ''
  };

  constructor(private activeRoute: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const courseId = params.cid;
      if (typeof courseId !== 'undefined') {
        this.courseService.findCourseById(courseId)
          .then(course => this.course = course);
      }
    });

  }

}
