import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { StudentItemComponent } from '../student-item/student-item.component';

@Component({
    standalone: true,
    selector: 'app-student-list',
    imports: [CommonModule, RouterLink, StudentItemComponent],
    templateUrl: './student-list.component.html',
})
export class StudentListComponent implements OnInit {
    students: Student[] = [];
    loading = false;
    error: string | null = null;

    constructor(
        private readonly studentService: StudentService,
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
        // 这里可以只console.log, 或者在模板中用routerLink
        console.log('Selected student id: ', id);
    }
}
