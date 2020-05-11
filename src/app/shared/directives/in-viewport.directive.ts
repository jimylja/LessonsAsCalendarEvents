import {Directive, ElementRef, Renderer2, DoCheck, OnDestroy} from '@angular/core';
import {EventBusService, EventType} from '../../core/event-bus.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Directive({
  selector: '[appInViewport]',
})
export class InViewportDirective implements DoCheck, OnDestroy {
  isElementFixed = false;
  isScrollInTheBottom = false;
  onDestroy$ = new Subject();
  constructor(
    private eventBus: EventBusService,
    private renderer: Renderer2, private elRef: ElementRef) {
    this.eventBus.on(EventType.CONTENT_SCROLL)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(
      event => {
        this.isScrollInTheBottom = event.target.scrollTop >= (event.target.scrollHeight - event.target.offsetHeight);
        this.setPositionRules();
      }
    );
  }

  static isScrolledIntoView(el) {
    const scroll = window.scrollY || window.pageYOffset;
    const boundsTop = el.getBoundingClientRect().top + scroll;

    const viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight - 56,
    };

    const bounds = {
      top: boundsTop,
      bottom: boundsTop + el.clientHeight,
    };

    return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom )
      || ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
  }


  ngDoCheck() {
    this.setPositionRules();
  }

  private setPositionRules() {
    const isVisible = InViewportDirective.isScrolledIntoView(this.elRef.nativeElement);
    if (!isVisible) { this.fixElement(); }
    if (this.isElementFixed && this.isScrollInTheBottom && isVisible) { this.returnStyleBack(); }
  }


  private fixElement() {
    this.isElementFixed = true;
    this.renderer.addClass(this.elRef.nativeElement, 'fixed');
  }

  private returnStyleBack() {
    this.isElementFixed = false;
    this.renderer.removeClass(this.elRef.nativeElement, 'fixed');
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }
}
