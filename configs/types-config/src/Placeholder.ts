import * as Document from "./Document";
import * as Api from "./Api";

export const CommonLayoutPlace: Api.CommonLayout<any> = {
  data: [],
  number_of_data: 0
};

export const RecentlySharedPlace: Api.Resume.RecentlyShared = {
  introduce: {
    heading: "",
    introduce: ""
  },
  recently_shared: []
};

export const LibraryDetailPlace: Api.Library.LibraryDetail = {
  id: "",
  access_right: "PRIVATE",
  year: 2024,
  grade: 1,
  generation: 10,
  resume_url: "",
  index: []
};

export const ResumeCompletionPlace: Api.Resume.ResumeCompletion = {
  writer_info: false,
  introduce: false,
  certificate_and_award: false,
  activity: false,
  project: false,
  percent_complete: 0
};

export const StudentPlace: Api.Info.Student = {
  name: "홍길동",
  class_info: {
    grade: 1,
    class_number: 1,
    number: 11,
    school_number: "1111"
  },
  profile_image: "",
  major: "전공 미정"
};

export const ResumeDetailPlace: Document.Resume = {
  id: "",
  writer: {
    name: "홍길동",
    email: "gildong@hong.com",
    major: "전공 미정",
    class_info: {
      grade: 1,
      class_number: 1,
      number: 1,
      school_number: "1111",
      generation: 10
    },
    department: "소프트웨어개발과",
    url: "",
    skill_set: []
  },
  status: "ONGOING",
  introduce: {
    heading: "",
    introduce: ""
  },
  project_list: [],
  achievement_list: [],
  activity_list: []
};
