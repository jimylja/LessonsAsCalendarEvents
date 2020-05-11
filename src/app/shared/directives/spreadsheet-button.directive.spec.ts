import {ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';
import {Component, NO_ERRORS_SCHEMA} from '@angular/core';

import { SpreadsheetButtonDirective } from './spreadsheet-button.directive';
import { ActiveItemsFacade } from 'src/app/feature/active-items/active-items.facade';
import { of } from 'rxjs';
import { activeItemsInitialState } from 'src/app/feature/active-items/state/active-items.reducer';

@Component({
  selector: 'app-test-container',
  template: `
    <div>
      <button id="button1" appSpreadsheetButton>B1</button>
      <div id="button2" appSpreadsheetButton class="disabled">B2</div>
    </div>
  `
})
class MockComponent {}

describe('SpreadsheetButtonDirective', () => {
  let fixture: ComponentFixture<MockComponent>;
  let container: MockComponent;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent, SpreadsheetButtonDirective],
      providers: [
        { provide: ActiveItemsFacade, useValue: {activeItems$: of(activeItemsInitialState)} },
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(MockComponent);
    container = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should set "disabled" class to element', () => {
    const targetElement = element.querySelector('#button1') as HTMLDivElement;
    expect(targetElement.classList).toContain('disabled');
    expect(targetElement.getAttributeNames()).toContain('disabled');
  });

});
