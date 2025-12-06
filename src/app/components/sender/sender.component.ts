import { Component } from "@angular/core";
import { MessageService } from "../../services/message.service";

@Component({
    selector: 'app-sender',
    template: `
        <h3>Sender</h3>
        <input [ngModel]="text" />
        <button type="button" (click)="send()">Send</button>
    `,
})
export class SenderComponent {
    text = '';

    constructor(private readonly messageService: MessageService){}

    send(): void {
        const trimmed = this.text.trim();
        if (!trimmed) return;

        this.messageService.send(trimmed);
        this.text = '';
    }
}
