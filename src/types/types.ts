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

export interface Anime {
  id: number | string;
  title: {
    english: string;
    [key: string]: string;
  };
}

export interface FormComponentProps {
  onSubmit: (values: FormValues, { resetForm }: any) => void;
  animeItems: Anime[];
  initialValues?: FormValues;
  isSubmitted: Boolean;
}
