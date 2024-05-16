import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { PrimengModule } from '../core/primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { FormListQuestionsComponent } from '../components/form-list-questions/form-list-questions.component';
import { FormReviewComponent } from '../components/form-review/form-review.component';
import { AddQuestionComponent } from '../components/add-question/add-question.component';

@NgModule({
  declarations: [
    FormComponent,

    FormListQuestionsComponent,
    FormReviewComponent,
    AddQuestionComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    SharedModule
  ],
})
export class FormModule {}
