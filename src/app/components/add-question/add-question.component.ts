import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EEvent, EventService } from 'src/app/core/services/event.service';
import { Question } from 'src/app/models/question.model';
import getRandomInt from 'src/app/shared/constant';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
})
export class AddQuestionComponent implements OnInit {
  @Input() showDialog = false;
  @Output() showDialogChange = new EventEmitter();

  listQuestionType: string[] = ['Checkbox list', 'Paragraph'];
  listNumberAnswers: number = 0;

  isSpecify = true;
  isRequired = true;

  questionType: string = this.listQuestionType[0];
  questionName: string = '';

  answerList: string[] = [];

  constructor(private _eventService: EventService) {}

  ngOnInit(): void {}

  selectType(event: any) {
    this.questionType = event.value;
  }

  addMoreAnswers() {
    if (this.listNumberAnswers >= 5) return;

    this.listNumberAnswers++;
  }

  submit() {
    if (!this.checkValidator()) {
      const payload: Question = {
        id: getRandomInt(1, 10000),
        name: this.questionName,
        isRequired: this.isRequired,
        isSpecify: this.isSpecify,
        type: this.questionType,
        answers: this.answerList,
        pickedAnswer: []
      };

      this._eventService.push({
        action: EEvent.PUSH_QUESTION,
        payload: payload,
      });

      this.showDialogChange.emit(false);
    }
  }

  checkValidator() {
    if (this.questionName == '') {
      return true;
    }

    if (
      this.questionType == this.listQuestionType[0] &&
      this.answerList.length == 0
    ) {
      return true;
    }

    if (this.answerList.some((x) => x.trim().length == 0 || x == '')) {
      return true;
    }

    return false;
  }
}
