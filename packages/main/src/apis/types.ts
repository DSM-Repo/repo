import { typeType } from "@/pages";

export type historyType = {
  id: string;
  date: string;
  content: string;
};

export type historiesType = historyType[];

export type addFeedbackType = {
  resume_id: string;
  type: typeType;
  comment: string;
};

type feedbackType = {
  id: string;
  type: string;
  comment: string;
  status: string;
  rejected: boolean;
};

export interface IFeedback {
  data: feedbackType[];
  number_of_data: number;
}

export type editFeedbackType = {
  id: string;
};

type indexType = {
  name: string;
  major: string;
  student_number: number;
  page_number: number;
};

export interface ILibrary {
  id: string;
  year: number;
  grade: number;
  generation: number;
  resume_url: string;
  index: indexType[];
}

export interface IAccess {
  library_id: string;
  access_right: accessType;
}

export type accessType = "PUBLIC" | "PRIVATE";
