import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/CourseService';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})

export class CourseTableComponent implements OnInit {
  courses = [];
  selectedCourse = {
    title: ''
  };

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
