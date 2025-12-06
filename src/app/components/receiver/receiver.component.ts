import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MessageService } from '../../services/message.service';

@Component({
    standalone: true,
    selector: 'app-receiver',
    imports: [CommonModule, AsyncPipe],
    template: `
        <h3>Receiver</h3>
        <p>Last message: {{ lastMessage$ | async }}</p>
    `,
})
export class ReceiverComponent {
    // 直接用 async pipe, 省掉订阅/取消订阅
    lastMessage$: Observable<string>;

    constructor(messageService: MessageService) {
        this.lastMessage$ = messageService.messages$;
    }
}