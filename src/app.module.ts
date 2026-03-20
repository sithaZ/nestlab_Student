import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { DepartmentModule } from './department/department.module';


@Module({
  imports: [StudentModule, CourseModule, DepartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
