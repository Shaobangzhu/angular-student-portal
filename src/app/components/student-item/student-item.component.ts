import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Student } from '../../models/student';

@Component({
    standalone: true,
    selector: 'app-student-item',
    imports: [CommonModule],
    template: `
        <div class="student-item">
            <span>{{ student.name }} ({{ student.email || 'N/A' }})</span>
            <button type="button" (click)="onSelect()">Select</button>
        </div>
    `,
    styles: [
        `
            .student-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 4px 0;
            }
            button {
                margin-left: 8px;
            }
        `,
    ],
})
export class StudentItemComponent {
    @Input() student!: Student;
    @Output() select = new EventEmitter<number>();

    onSelect(): void {
        this.select.emit(this.student.id);
    }
}