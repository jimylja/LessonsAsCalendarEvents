import { Component } from '@angular/core';
import { MessageService } from '../../../core/message.service';

@Component({
  selector: 'app-snackbar-message',
  templateUrl: './snackbar-message.component.html',
  styleUrls: ['./snackbar-message.component.scss']
})
export class SnackbarMessageComponent {

  message$ = this.messageService.getMessage();
  constructor(private messageService: MessageService) { }
}
