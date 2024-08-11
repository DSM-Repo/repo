import { IMajor, IResume, IStudent } from "./types";
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

export const majorData: IMajor = {
  data: [
    {
      id: "4c9019ad-283c-42cb-8349-c07b9cf99a0c",
      name: "Backend Engineer"
    },
    {
      id: "4c9019ad-283c-42cb-8349-c07b9cf99a0c",
      name: "Frontend Engineer"
    }
  ],
  dataOfNumber: 2
};

export const resumeData: IResume = {
  documentId: "4c9019ad-283c-42cb-8349-c07b9cf99a0c",
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
