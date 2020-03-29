import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HeaderComponent {
  @Input() user: User;
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor() { }

  sidenavToggle(): void {
    this.toggleSidenav.emit();
  }
}
