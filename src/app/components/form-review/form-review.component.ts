import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import {
  EEvent,
  EventService,
  IEvent,
} from 'src/app/core/services/event.service';
import { Question, TypeQuestion } from 'src/app/models/question.model';

@Component({
  selector: 'app-form-review',
  templateUrl: './form-review.component.html',
  styleUrls: ['./form-review.component.scss'],
})
export class FormReviewComponent implements OnInit {
  listAnswers: Question[] = [];

  readonly TypeQuestion = TypeQuestion;

  constructor(
    private _eventService: EventService,
    private _router: Router,
    private _location: Location
  ) {
    this._eventService
      .receive()
      .pipe(
        tap((x: IEvent) => {
          if (x.action === EEvent.REVIEW_QUESTION) {
            this.listAnswers = x.payload;
          }
        })
      )
      .subscribe();
  }

  ngOnInit(): void {}

  goback() {
    this._eventService.push({
      action: EEvent.BACK_TO_FORM,
      payload: this.listAnswers,
    });
    this._location.back();
  }
}
