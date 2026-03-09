import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { StudentService } from '../student/student.service';

@Injectable()
export class DepartmentService {
  private departments = [
    { id: '1', name: 'Software Engineering' },
    { id: '2', name: 'Network Engineering' },
  ];

  constructor(
    @Inject(forwardRef(() => StudentService))
    private studentService: StudentService,
  ) {}

  findAll() {
    return this.departments;
  }

  findById(id: string) {
    return this.departments.find((d) => d.id === id) || null;
  }
}