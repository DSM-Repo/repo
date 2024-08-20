type feedbackType = {
  id: string;
  type: string;
  comment: string;
  status: string;
};

export interface IFeedback {
  number_of_data: number;
  data: feedbackType[];
}

export interface IAccFeedback {
  id: string;
}
