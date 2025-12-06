import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Student } from '../../models/student';
import { StudentService } from "../../services/student.service";

@Component({
    selector: 'app-student-detail',
    templateUrl: './student-detail.component.html',
})
export class StudentDetailComponent implements OnInit {
    student?: Student;
    loading = false;
    error: string | null = null;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly studentService: StudentService,
    ) {}

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (!id) {
            this.error = 'Invalid student id';
            return;
        }

        this.loading = true;
        this.studentService.getStudentById(id).subscribe({
            next: (data) => {
                this.student = data;
                this.loading = false;
            },
            error: (err) => {
                console.error(err);
                this.error = 'Failed to load student';
                this.loading = false;
            },
        });
    }
}
