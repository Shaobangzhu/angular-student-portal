import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
})
export class StudentListComponent implements OnInit {
    students: Student[] = [];
    loading = false;
    error: string | null = null;

    constructor(
        private readonly studentService: StudentService,
        private readonly router: Router,
    ){}

    ngOnInit(): void {
        this.loadStudents();
    }

    loadStudents(): void {
        this.loading = true;
        this.error = null;

        this.studentService.getStudents().subscribe({
            next: (data) => {
                this.students = data;
                this.loading = false;
            },
            error: (err) => {
                this.error = 'Failed to load students';
                console.error(err);
                this.loading = false;
            },
        });
    }

    onSelectStudent(id: number): void {
        // Demo: 选中后跳转至详情页
        this.router.navigate(['/students', id]);
    }
}
