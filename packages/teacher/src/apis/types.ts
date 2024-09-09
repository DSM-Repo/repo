export interface ITeacher {
  name: string;
}

// 도서관 Library ---------------
type libraryType = {
  year: number;
  grade: number;
  generation: number;
  access_right: "PRIVATE" | "PUBLIC";
  id: string;
};

export interface ILibrary {
  data: libraryType[];
  number_of_data: number;
}

export type indexType = {
  name: string;
  major: string;
  student_number: number;
  page_number: number;
};

export interface IBook {
  id: string;
  year: number;
  access_right: "PUBLIC" | "PRIVATE";
  grade: number;
  generation: number;
  resume_url: string;
  index: indexType[];
}

// 문서 Document -------------
export type feedbackListType = {
  id: string;
  comment: string;
  type: string;
  status: string;
  rejected: boolean;
};

type studentType = {
  resume_id: string;
  student_info: {
    school_number: string;
    name: string;
  };
  status: string;
  feedback_list: feedbackListType[];
};

export interface IStudent {
  data: studentType[];
  number_of_data: number;
}

// 전공 Major -----------------
export interface IAddMajor {
  majors: string[];
}

export type dataType = {
  id: string;
};

export interface IMajors {
  data: dataType[];
  number_of_data: Number;
}

// 피드백 Feedback ------------
export interface IAddFeedback {
  comment: string;
  type: string;
  resume_id: string;
}

export interface IFeedback {
  data: {
    id: string;
    type: string;
    comment: string;
    status: string;
    rejected: boolean;
  }[];
  number_of_data: 0;
}
