import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { filter, map } from 'rxjs/operators';

export const enum EventType {
  CONTENT_SCROLL = 'content_scroll',
}

export interface BusEvent<T = any> {
  type: EventType;
  payload: T;
}

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private eventSubject$ = new Subject<BusEvent>();

  /**
   * Subscribe to event
   * @param type - event type
   */
  public on<T = any>(type: EventType): Observable<T> {
    return this.eventSubject$.pipe(
      filter(event => event.type === type),
      map(event => event.payload)
    );
  }

  /**
   * Push next event
   * @param event - event name
   */
  public next(event: BusEvent): void {
    this.eventSubject$.next(event);
  }
}
