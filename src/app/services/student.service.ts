import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from '../models/student';

@Injectable({
    providedIn: 'root',
})
export class StudentService {
    // 把 baseUrl 抽出来, 方便以后改 / 配合环境变量
    private readonly baseUrl = 'http://localhost:3000/api/students';

    constructor(private http: HttpClient) {}

    // Q1 获取全部学生列表
    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.baseUrl);
    }

    // Q1: 根据id获取单个学生
    getStudentById(id: number): Observable<Student> {
        return this.http.get<Student>(`${this.baseUrl}/${id}`);
    }

    // Q2: 使用RxJS对结果做转换，只拿email数组
    getStudentEmails(): Observable<string[]> {
        return this.http.get<Student[]>(this.baseUrl).pipe(
            map((students) => students.map((s) => s.email ?? '')),
        );
    }
}