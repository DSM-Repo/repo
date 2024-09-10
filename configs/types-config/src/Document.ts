import { File } from "./Api";

export type dateType = {
  start_date?: string;
  end_date?: string;
};

export type classType = {
  grade?: number;
  class_number?: number;
  number?: number;
  school_number?: string;
  generation?: number;
};

export type sectionType =
  | "WRITER_INFO"
  | "INTRODUCE"
  | "PROJECT"
  | "ACTIVITY"
  | "ACHIEVEMENT";

export type sectionKeyType =
  | "writer"
  | "introduce"
  | "achievement_list"
  | "activity_list"
  | "project_list";

export type statusType = "ONGOING" | "SUBMITTED" | "RELEASED";
export type achieveType = "AWARD" | "CERTIFICATE";
export type projectType = "PERSONAL" | "TEAM";

export type sectionData = {
  element_id: string;
  title: string;
  description: string;
};

export interface Resume {
  id: string;
  status: statusType;
  writer: Writer;
  introduce: Introduce;
  achievement_list: Achievement_list[];
  activity_list: Activity_list[];
  project_list: Project_list[];
}

export type Student = {
  name: string;
  class_info: classType;
  profile_image: string;
  major_name: string;
};

export type Writer = {
  name: string;
  class_info: classType;
  email: string;
  major: string;
  department?: string;
  url: string;
  skill_set: string[];
};

export type Introduce = {
  heading: string;
  introduce: string;
};

export type Achievement_list = {
  element_id: string;
  name: string;
  institution: string;
  date: string;
  type: achieveType;
};

export type Activity_list = {
  element_id: string;
  name: string;
  date: dateType;
  description: string;
  is_period: boolean;
};

export type Project_list = {
  element_id: string;
  name: string;
  logo?: File.Image;
  type: projectType;
  date?: dateType;
  skill_set: string[];
  sections: sectionData[];
  url: string;
};
