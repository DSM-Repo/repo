// 인증 Auth -------------------
export interface _ILogin {
  account_id: string;
  password: string;
}

export interface ILogin_ {
  access_token: string;
  refresh_token: string;
  access_expired_at: number;
  refresh_expired_at: number;
}

// 문서 Document ---------------
export interface ICompletion {
  writer_info: boolean;
  introduce: boolean;
  certificate_and_award: boolean;
  activity: boolean;
  project: boolean;
  percent_complete: number;
}

type sharedType = {
  id: string;
  year: number;
  grade: number;
  generation: number;
};

export interface IIntroduce {
  introduce: {
    element_id: string;
    heading: string;
    introduce: string;
    name: "자기 소개";
  };
  recently_shared: sharedType[];
}

// 피드백 Feedback --------------
type feedbackType = {
  id: string;
  teacher_name: string;
  type: "WRITER_INFO" | "INTRODUCE" | "ACHIEVEMENT" | "ACTIVITY" | "PROJECT";
  comment: string;
  rejected: boolean;
  status: string;
};

export interface IFeedback {
  number_of_data: number;
  data: feedbackType[];
}

export interface ICheckFeedback {
  id: string;
}

// 전공 Major ------------------
type majorType = {
  id: string;
};

export interface IMajors {
  data: majorType[];
  data_of_number: Number;
}

// 도서관 Library ---------------
type libraryType = {
  year: number;
  grade: number;
  generation: number;
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

// 파일 File -------------------
export interface IImage {
  image_path: string;
  original_name: string;
}

export interface IDelImage {
  url: string;
}
