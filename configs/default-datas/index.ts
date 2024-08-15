import { IResume, IStudent } from "./types";
export * from "./types";

export const studentData: IStudent = {
  name: "홍길동",
  classInfo: {
    grade: 2,
    classNumber: 2,
    number: 2,
    schoolNumber: "2202"
  },
  profileImage: "",
  majorName: "Frontend Developer"
};

export const resumeData: IResume = {
  status: "ONGOING",
  writer: {
    name: "홍길동",
    email: "",
    majorName: "Frontend Developer",
    classInfo: {
      grade: 2,
      classNumber: 2,
      number: 2,
      schoolNumber: "2202"
    },
    department: "소프트웨어개발과",
    url: "",
    skillSet: []
  },
  introduce: {
    elementId: "",
    heading: "",
    introduce: ""
  },
  achievementList: [],
  activityList: [],
  projectList: []
};
