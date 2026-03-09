import { forwardRef, Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { StudentModule } from '../student/student.module';

@Module({
  imports: [forwardRef(() => StudentModule)],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService],
})
export class CourseModule {}