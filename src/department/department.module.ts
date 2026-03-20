import { forwardRef, Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { StudentModule } from '../student/student.module';

@Module({
  imports: [forwardRef(() => StudentModule)], 
  controllers: [DepartmentController],
  providers: [DepartmentService],
  exports: [DepartmentService],
})
export class DepartmentModule {}