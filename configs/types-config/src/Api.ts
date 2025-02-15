// @ts-expect-error
import { UseMutationOptions } from "@tanstack/react-query";
import * as Document from "./Document";

export type CommonLayout<T> = {
  data: T[];
  number_of_data: number;
};

export type MutationOption<T, K> = UseMutationOptions<T, Error, K, unknown>;

export type DisableType = {
  state: boolean;
  reason: string;
};

export declare namespace Auth {
  // /auth/student, /auth/teacher
  interface LoginInput {
    account_id: string;
    password: string;
  }

  // /auth/student, /auth/teacher
  interface LoginOutput {
    access_token: string;
    refresh_token: string;
    access_expired_at: number;
    refresh_expired_at: number;
  }
}

export declare namespace Feedback {
  type statusType = "PENDING" | "CONFIRMED";

  interface feedbackData {
    id: string;
    comment: string;
    type: Document.sectionType;
    status: statusType;
    rejected: true;
  }

  interface feedbackStudentData extends feedbackData {
    teacher_name: string;
  }

  // /feedback, /feedback/{resumeId}, /feedback/teacher
  type Feedback = CommonLayout<feedbackStudentData>;

  // /feedback (POST)
  interface FeedbackAdd {
    comment: string;
    type: Document.sectionType;
    resume_id: string;
  }

  // /feedback/{feedbackId} (PATCH)
  interface FeedbackEdit {
    comment: string;
  }
}

export declare namespace File {
  interface Image {
    image_path: string;
    original_name: string;
  }
}

export declare namespace History {
  type historyData = {
    id: string;
    date: string;
    content: string;
  };

  // /history
  type History = CommonLayout<historyData>;

  // /history (POST)
  interface HistoryAdd {
    date: string;
    content: string;
  }
}

export declare namespace Info {
  // /user/current/info
  interface Student {
    name: string;
    class_info: {
      grade: number;
      class_number: number;
      number: number;
      school_number: string;
    };
    profile_image: string;
    major: string;
  }

  // /teacher
  interface Teacher {
    name: string;
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

  // /library
  type Library = CommonLayout<libraryListData>;

  // /library (POST)
  interface LibraryAdd {
    pdf: string;
    index: {};
  }

  // /library/{libraryId}
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

export declare namespace Major {
  type majorData = {
    id: string;
  };

  // /major
  type Major = CommonLayout<majorData>;

  // /major (POST)
  interface MajorAdd {
    majors: string[];
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

  // /resume
  interface RecentlyShared {
    introduce: {
      heading: string;
      introduce: string;
    };
    recently_shared: recentlySharedData[];
  }

  // /resume/student
  type ResumeStudent = CommonLayout<resumeStudentData>;

  type ResumeReleased = CommonLayout<Document.Resume>;

  // /resume/detail, /resume/student/{studentId}
  interface ResumeDetail extends Document.Resume {}

  // /resume (PATCH)
  interface ResumeUpdate extends Document.Resume {}

  // /resume/completion
  interface ResumeCompletion {
    writer_info: boolean;
    introduce: boolean;
    certificate_and_award: boolean;
    activity: boolean;
    project: boolean;
    percent_complete: number;
  }
}

export declare namespace Notice {
  type noticeData = {
    id: string;
    title: string;
    content: string;
    writer_name: string;
    created_at: string;
    checked: boolean;
  };

  interface AddNotice {
    title: string;
    content: string;
  }

  // /notice
  type NoticeList = CommonLayout<noticeData>;
}
