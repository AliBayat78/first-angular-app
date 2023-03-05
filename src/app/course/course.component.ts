import { CourseServices } from './course.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  courses;
  constructor(service: CourseServices) {
    this.courses = service.getCourses();
  }
}
