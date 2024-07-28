export interface FormValues {
  surveyName: string;
  selectedOption: string;
  recipientOption: string;
  agreeToTerms: boolean;
  deadline: string;
  notes: string;
}

export interface AnimeTitle {
  english: string;
}

export interface typePost {
  id: number;
  title: string;
  body: string;
}

export interface FormComponentProps {
  onSubmit: (values: FormValues, { resetForm }: any) => void;
  posts: typePost[];
  initialValues?: FormValues;
  isSubmitted: Boolean;
}
