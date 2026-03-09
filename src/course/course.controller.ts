import { Controller, Post, Body } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post('enroll')
  enroll(@Body() body: { studentId: string; courseName: string }) {
    return this.courseService.enroll(body.studentId, body.courseName);
  }
}