import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [StudentModule, CourseModule, DepartmentModule],
})
export class AppModule {}