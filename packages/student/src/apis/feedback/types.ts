type feedbackType = {
  id: string;
  type: string;
  comment: string;
  status: string;
};

export interface IFeedback {
  numberOfData: number;
  data: feedbackType[];
}

export interface IAccFeedback {
  id: string;
}
