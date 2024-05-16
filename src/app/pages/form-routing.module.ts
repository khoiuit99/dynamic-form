import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormListQuestionsComponent } from '../components/form-list-questions/form-list-questions.component';
import { FormReviewComponent } from '../components/form-review/form-review.component';
import { FormComponent } from './form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'builder',
        pathMatch: 'full'
      },
      {
        path: 'builder',
        component: FormListQuestionsComponent,
      },
      {
        path: 'review',
        component: FormReviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
