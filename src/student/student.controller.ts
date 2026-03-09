import { Body, Controller, Get, Inject, Param, Post, forwardRef } from '@nestjs/common';
import { StudentService } from './student.service';
import { CourseService } from '../course/course.service';
import { DepartmentService } from '../department/department.service';

@Controller('student')
export class StudentController {
  constructor(
    private studentService: StudentService,
    @Inject(forwardRef(() => CourseService))
    private courseService: CourseService,
    @Inject(forwardRef(() => DepartmentService))
    private departmentService: DepartmentService,
  ) {}

  @Post('create')
  create(@Body() body: { name: string; major: string; deptId: string }) {
    const dept = this.departmentService.findById(body.deptId);
    if (!dept) return { error: 'Department does not exist!' };
    return this.studentService.create(body);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Post('enroll')
  enroll(@Body() body: { studentId: string; courseName: string }) {
    return this.courseService.enroll(body.studentId, body.courseName);
  }
}