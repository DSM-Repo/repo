import { Document } from "./Document";

type CommonLayout<T> = {
  data: T;
  number_of_data: number;
};

declare namespace Auth {
  interface LoginInput {
    account_id: string;
    password: string;
  }

  interface LoginOutput {
    access_token: string;
    refresh_token: string;
    access_expired_at: number;
    refresh_expired_at: number;
  }
}

export declare namespace Resume {
  type recentlySharedData = {
    id: string;
    year: number;
    grade: number;
    generation: number;
  };

  type resumeStudentData = {
    resume_id: string;
    student_info: {
      name: string;
      school_number: string;
    };
    status: Document.statusType;
    feedback_list: Feedback.feedbackData[];
  };

  export interface Resume {
    introduce: {
      heading: string;
      introduce: string;
    };
    recently_shared: recentlySharedData[];
  }

  type ResumeStudent = CommonLayout<resumeStudentData>;
  interface ResumeStudentDetail extends Document.resume {}
  interface ResumeDetail extends Document.resume {}
  interface ResumeCompletion {
    writer_info: boolean;
    introduce: boolean;
    certificate_and_award: boolean;
    activity: boolean;
    project: boolean;
    percent_complete: number;
  }
}

export declare namespace Major {
  type majorData = {
    id: string;
  };

  type Major = CommonLayout<majorData[]>;

  interface MajorAdd {
    majors: string[];
  }
}

export declare namespace Library {
  type accessType = "PUBLIC" | "PRIVATE";

  type libraryListData = {
    id: string;
    access_right: accessType;
    year: number;
    grade: number;
    generation: number;
  };

  type indexData = {
    name: string;
    major: string;
    student_number: number;
    page_number: number;
  };

  type Library = CommonLayout<libraryListData[]>;
  interface LibraryAdd {
    pdf: string;
    index: {};
  }
  interface LibraryDetail {
    id: string;
    access_right: accessType;
    year: number;
    grade: number;
    generation: number;
    resume_url: string;
    index: indexData[];
  }
}

export declare namespace Feedback {
  type statusType = "PENDING" | "CONFIRMED";

  type feedbackData = {
    id: string;
    comment: string;
    type: string;
    status: statusType;
    rejected: true;
  };
}
