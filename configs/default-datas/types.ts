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
  isPeriod: boolean;
};

type imageType = {
  imagePath: string;
  originalName: string;
};

type descriptionType = {
  motive: string;
  role: string;
  retrospective: string;
};

export type projectType = {
  elementId: string;
  name: string;
  imageInfo?: imageType;
  type: "PERSONAL" | "TEAM";
  startDate?: string;
  endDate?: string;
  skillSet: string[];
  description: descriptionType;
  url: string;
};

export type writerType = {
  name: string;
  email: string;
  majorName: string;
  classInfo: {
    grade?: number;
    classNumber?: number;
    number?: number;
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
  id?: string;
  status: string;
  writer: writerType;
  introduce: introduceType;
  achievementList: achievementType[];
  activityList: activityType[];
  projectList: projectType[];
}
