import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import {
  EventService,
  EEvent,
  IEvent,
} from 'src/app/core/services/event.service';
import { Question, TypeQuestion } from 'src/app/models/question.model';

@Component({
  selector: 'app-form-list-questions',
  templateUrl: './form-list-questions.component.html',
  styleUrls: ['./form-list-questions.component.scss'],
})
export class FormListQuestionsComponent implements OnInit {
  readonly TypeQuestion = TypeQuestion;
  readonly EEvent = EEvent;

  showDialog = false;

  selectedValue: string[] = [];
  listQuestions: Question[] = [];

  constructor(private _eventService: EventService, private _router: Router) {
    this._eventService
      .receive()
      .pipe(
        tap((p: IEvent) => {
          if (p.action === EEvent.PUSH_QUESTION) {
            this.listQuestions.push(p.payload);
          } else if (p.action === EEvent.BACK_TO_FORM) {
            this.listQuestions = p.payload;
          }
        })
      )
      .subscribe();
  }

  ngOnInit(): void {}

  reviewAnswers() {
    if (
      this.listQuestions.some(
        (x) => x.pickedAnswer.length == 0 || !x.pickedAnswer
      )
    ) {
      return;
    }

    console.log(this.listQuestions);

    this._eventService.push({
      action: EEvent.REVIEW_QUESTION,
      payload: this.listQuestions,
    });

    this._router.navigate(['/form/review']);
  }

  random() {
    return Math.random();
  }

  addPickedAnswer(id: number, event?: FocusEvent) {
    let index = this.listQuestions.findIndex((x) => x.id === id);
    if (index > -1) {
      let temp: string[] = [];
      this.selectedValue.forEach((x) => {
        //Check box action
        if (x.split('/')[1] === id.toString() && x.split('/')[0] !== 'Other') {
          temp.push(x.split('/')[0]);
        } else {
          event ? console.log('none') : temp.push(x);
        }

        //Input action
        if (
          (event?.target as HTMLInputElement).value &&
          x.split('/')[0] === 'Other'
        ) {
          temp = temp.filter((x) => x);
          temp.push(
            x.split('/')[0] + ' - ' + (event?.target as HTMLInputElement).value
          );
        }
      });
      this.listQuestions[index].pickedAnswer! = [...temp];
    }
  }
}
