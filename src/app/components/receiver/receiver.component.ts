import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from '../../services/message.service';

@Component({
    selector: 'app-receiver',
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