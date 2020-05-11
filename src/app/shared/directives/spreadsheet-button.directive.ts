import {AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2} from '@angular/core';
import {map, takeUntil} from 'rxjs/operators';
import {ActiveItemsState} from '../../feature/active-items/state/active-items.reducer';
import {ActiveItemsFacade} from '../../feature/active-items/active-items.facade';
import {Subject} from 'rxjs';

@Directive({
  selector: '[appSpreadsheetButton]'
})
export class SpreadsheetButtonDirective  implements AfterViewInit, OnDestroy {

  constructor(private renderer: Renderer2,
              private elRef: ElementRef,
              private activeItemsFacade: ActiveItemsFacade
              ) { }
  onDestroy$ = new Subject();

  ngAfterViewInit(): void {
    const element = this.elRef.nativeElement;
    this.activeItemsFacade.activeItems$.pipe(
      map((activeItems: ActiveItemsState) => Boolean(activeItems.activeCalendar && activeItems.activeFile)),
      takeUntil(this.onDestroy$)
    ).subscribe((isSpreadsheetEnabled) => {
      if (!isSpreadsheetEnabled) {
        this.renderer.addClass(element, 'disabled');
        this.renderer.setProperty(element, 'disabled', true);
      } else {
        this.renderer.removeClass(element, 'disabled');
        this.renderer.setProperty(element, 'disabled', false);
      }
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

}
