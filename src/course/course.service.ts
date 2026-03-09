import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { StudentService } from '../student/student.service';

@Injectable()
export class CourseService {
  constructor(
    @Inject(forwardRef(() => StudentService))
    private studentService: StudentService,
  ) {}

  enroll(studentId: string, courseName: string) {
    const student = this.studentService.findById(studentId);
    if (!student) return { error: 'Cannot enroll: Student not found' };
    
    return {
      message: `Success! ${student.name} from Dept ${student.deptId} is now in ${courseName}`,
    };
  }
}