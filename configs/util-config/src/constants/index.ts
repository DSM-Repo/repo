import { IResume, IStudent } from "./types";
export * from "./types";

export const studentData: IStudent = {
  name: "홍길동",
  class_info: {
    grade: 2,
    class_number: 2,
    number: 2,
    school_number: "2202"
  },
  profile_image: "",
  major_name: "Frontend Developer"
};

export const resumeData: IResume = {
  status: "ONGOING",
  id: undefined,
  writer: {
    name: "홍길동",
    email: "",
    major_name: "Frontend Developer",
    class_info: {
      grade: 2,
      class_number: 2,
      number: 2,
      school_number: "2202"
    },
    department: "소프트웨어개발과",
    url: "",
    skill_set: []
  },
  introduce: {
    element_id: "",
    heading: "",
    introduce: ""
  },
  achievement_list: [],
  activity_list: [],
  project_list: []
};
