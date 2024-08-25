// 인증 Auth -------------------
export interface ILogin {
  account_id: string;
  password: string;
}

export interface IData {
  access_token: string;
  refresh_token: string;
  access_expired_at: number;
  refresh_expired_at: number;
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

// 도서관 Library -------------
type libraryType = {
  id: string;
  access_right: "PUBLIC" | "PRIVATE" | "RELEASED";
  year: number;
  grade: number;
  generation: number;
};

export interface ILibrary {
  data: libraryType[];
  number_of_data: number;
}

export interface IRenderAll {
  grade: number;
}

// 전공 Major -----------------
export interface IAddMajor {
  majors: string[];
}

export type dataType = {
  id: string;
  name: string;
};

export interface IMajors {
  data: dataType[];
  data_of_number: Number;
}

export interface IDelMajor {
  id: string;
}

// 선생님 Teacher -------------
export interface ITeacher {
  name: string;
}

// 연혁 History ---------------
type historyType = {
  id: string;
  date: string;
  content: string;
};

export type historiesType = historyType[];

export interface IAddHistory {
  date: string;
  content: string;
}

export interface IDelHistory {
  id: string;
}
