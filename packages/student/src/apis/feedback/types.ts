type feedbackType = {
  id: string;
  type: string;
  comment: string;
};

export interface IFeedback {
  numberOfData: number;
  data: feedbackType[];
}
