import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    private readonly messageSubject = new Subject<string>();

    // 只暴露 Observable, 防止外部乱next()
    readonly message$ = this.messageSubject.asObservable();

    send(message: string): void {
        this.messageSubject.next(message);
    }
}