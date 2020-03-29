import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `<div class="avatar" #avatarComponent></div>`,
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent implements OnInit {
  @Input() avatar: string;
  @ViewChild('avatarComponent', {static: true}) avatarComponent: ElementRef;

  constructor() { }

  ngOnInit() {
    this.generateAvatar();
  }

  /**
   * Method generate avatar
   */
  private generateAvatar(): void {
    this.avatarComponent.nativeElement.style.backgroundImage = `url(${this.avatar})`;
  }
}
