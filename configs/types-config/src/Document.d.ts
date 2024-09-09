type imageType = {
  image_path: string;
  original_name: string;
};

type dateType = {
  start_date?: string;
  end_date?: string;
};

type classType = {
  grade?: number;
  class_number?: number;
  number?: number;
  school_number?: string;
};

export declare namespace Document {
  type sectionType =
    | "WRITER_INFO"
    | "INTRODUCE"
    | "PROJECT"
    | "CERTIFICATE"
    | "ACHIEVEMENT";
  type statusType = "ONGOING" | "SUBMITTED" | "RELEASED";
  type achieveType = "AWARD" | "CERTIFICATE";
  type projectType = "PERSONAL" | "TEAM";

  interface resume {
    id: string;
    status: statusType;
    writer: writer;
    introduce: introduce;
    achievement_list: achievement_list[];
    activity_list: activity_list[];
    project_list: project_list[];
  }

  type student = {
    name: string;
    class_info: classType;
    profile_image: string;
    major_name: string;
  };

  type writer = {
    name: string;
    class_info: classType;
    email: string;
    major_name: string;
    department?: string;
    url: string;
    skill_set: string[];
  };

  type introduce = {
    heading: string;
    introduce: string;
  };

  type achievement_list = {
    element_id: string;
    name: string;
    institution: string;
    date: string;
    type: achieveType;
  };

  type activity_list = {
    element_id: string;
    name: string;
    date: dateType;
    description: string;
    is_period: boolean;
  };

  type project_list = {
    element_id: string;
    name: string;
    logo?: imageType;
    type: projectType;
    date?: dateType;
    skill_set: string[];
    sections: sectionData[];
    url: string;
  };

  type majorData = {
    id: string;
    name: string;
  };

  type sectionData = {
    element_id: string;
    title: string;
    description: string;
  };
}
