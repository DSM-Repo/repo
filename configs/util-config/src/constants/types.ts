export interface IStudent {
  name: string;
  class_info: {
    grade: Number;
    class_number: Number;
    number: Number;
    school_number: string;
  };
  profile_image: string;
  major_name: string;
}

export interface ITeacher {}

export type majorType = {
  id: string;
  name: string;
};

export interface IMajor {
  data: majorType[];
  data_of_number: Number;
}

export type achievementType = {
  element_id: string;
  name: string;
  institution: string;
  date: string;
  type: "AWARD" | "CERTIFICATE";
};

export type activityType = {
  element_id: string;
  name: string;
  date: dateType;
  description: string;
  is_period: boolean;
};

type imageType = {
  image_path: string;
  original_name: string;
};

export type sectionType = {
  element_id: string;
  title: string;
  description: string;
};

type dateType = {
  start_date?: string;
  end_date?: string;
};

export type projectType = {
  element_id: string;
  name: string;
  logo?: imageType;
  type: "PERSONAL" | "TEAM";
  date?: dateType;
  skill_set: string[];
  sections: sectionType[];
  url: string;
};

export type writerType = {
  name: string;
  email: string;
  major_name: string;
  class_info: {
    grade?: number;
    class_number?: number;
    number?: number;
    school_number?: string;
  };
  department?: string;
  url: string;
  skill_set: string[];
};

export type introduceType = {
  element_id: string;
  heading: string;
  introduce: string;
};

export interface IResume {
  id?: string;
  status: string;
  writer: writerType;
  introduce: introduceType;
  achievement_list: achievementType[];
  activity_list: activityType[];
  project_list: projectType[];
}
