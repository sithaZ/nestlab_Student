import { forwardRef, Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { CourseModule } from '../course/course.module';
import { DepartmentModule } from '../department/department.module';

@Module({
  imports: [
    forwardRef(() => CourseModule),
    forwardRef(() => DepartmentModule),
  ],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {}