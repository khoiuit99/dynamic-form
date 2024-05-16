import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

export enum EEvent {
  PUSH_QUESTION = 'PUSH_QUESTION',
  REVIEW_QUESTION = 'REVIEW_QUESTION',
  BACK_TO_FORM = 'BACK_TO_FORM'
}

export interface IEvent {
  action: EEvent;
  payload: any;
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private subjet = new ReplaySubject<IEvent>();

  constructor() {}

  push(data: IEvent) {
    this.subjet.next(data);
  }

  receive() {
    return this.subjet;
  }
}
