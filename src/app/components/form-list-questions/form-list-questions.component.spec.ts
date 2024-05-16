import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListQuestionsComponent } from './form-list-questions.component';

describe('FormListQuestionsComponent', () => {
  let component: FormListQuestionsComponent;
  let fixture: ComponentFixture<FormListQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormListQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormListQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
