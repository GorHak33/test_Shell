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
  id: number;
  title: AnimeTitle;
}
