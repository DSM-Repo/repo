export type IStudent = {
  name: string;
  classInfo: {
    grade: Number;
    classNumber: Number;
    number: Number;
    schoolNumber: string;
  };
  profileImage: string;
  majorName: string;
};

export type majorType = {
  id: string;
  name: string;
};

export interface IMajor {
  data: majorType[];
  dataOfNumber: Number;
}

export type achievementType = {
  elementId: string;
  name: string;
  institution: string;
  date: string;
  type: "AWARD" | "CERTIFICATE";
};

export type activityType = {
  elementId: string;
  name: string;
  startDate?: string;
  endDate?: string;
  description: string;
};

export type projectType = {
  elementId: string;
  name: string;
  imagePath?: string;
  type: "PERSONAL" | "TEAM" | "CLUB";
  startDate?: string;
  endDate?: string;
  skillSet: string[];
  description?: string;
  url: string;
};

export type writerType = {
  name: string;
  email: string;
  majorName: string;
  classInfo: {
    grade?: Number;
    classNumber?: Number;
    number?: Number;
    schoolNumber?: string;
  };
  department?: string;
  url: string;
  skillSet: string[];
};

export type introduceType = {
  elementId: string;
  heading: string;
  introduce: string;
};

export interface IResume {
  documentId: string;
  status: string;
  writer: writerType;
  introduce: introduceType;
  achievementList: achievementType[];
  activityList: activityType[];
  projectList: projectType[];
}
