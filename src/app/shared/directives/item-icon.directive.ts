import {Directive, ElementRef, OnInit, Renderer2, Input} from '@angular/core';

export enum ItemIcons {
  'file' = 'web-google-sheets-icon.png',
  'calendar' = 'web-google-calendar-icon.png'
}

@Directive({
  selector: '[appItemIcon]'
})
export class ItemIconDirective implements OnInit {
  @Input() iconType: 'file'|'calendar';
  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit(): void {
    const iconUrl = `url(\'./assets/${ItemIcons[this.iconType]}\')`;
    this.renderer.setStyle(this.elRef.nativeElement, 'background-size', 'cover');
    this.renderer.setStyle(this.elRef.nativeElement, 'background-image', iconUrl);
  }
}
