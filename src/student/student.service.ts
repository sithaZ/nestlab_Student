import { Injectable } from '@nestjs/common';

export interface Student {
  id: string;
  name: string;
  major: string;
  deptId: string;
}

@Injectable()
export class StudentService {
  private students: Student[] = [];

  findAll() {
    return this.students;
  }

  findById(id: string) {
    return this.students.find((s) => s.id === id) || null;
  }

  findByDept(deptId: string) {
    return this.students.filter((s) => s.deptId === deptId);
  }

  create(data: { name: string; major: string; deptId: string }) {
    const student = {
      id: Date.now().toString(),
      ...data,
    };
    this.students.push(student);
    return student;
  }
}