export interface Question {
  id: number;
  name: string;
  type: string;
  answers: string[];
  isRequired: boolean;
  isSpecify: boolean;
  pickedAnswer: string[];
}

export enum TypeQuestion {
  PARAGRAPH = 'Paragraph',
  DROPDOWN_LIST = 'Checkbox list',
}
