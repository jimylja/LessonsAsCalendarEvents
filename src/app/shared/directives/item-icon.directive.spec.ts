import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { Component, Input } from '@angular/core';
import {ItemIconDirective, ItemIcons} from './item-icon.directive';

@Component({
  selector: 'app-test-container',
  template: `
    <div>
      <div id="icon" appItemIcon [iconType]="'file'"></div>
    </div>
  `
})
class MockComponent {
  @Input() iconType: 'file'|'calendar';
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<MockComponent>;
  let container: MockComponent;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent, ItemIconDirective],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ],
    });

    fixture = TestBed.createComponent(MockComponent);
    container = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should set background-color green when passing green parameter', () => {
    container.iconType = 'file';
    const targetElement = element.querySelector('#icon') as HTMLDivElement;
    const iconUrl = `url(\'./assets/${ItemIcons[container.iconType]}\')`;
    expect(targetElement.style.backgroundSize).toEqual('cover');
    expect(targetElement.style.backgroundImage).toEqual(iconUrl);
  });
});
