export interface ICompletion {
  writer_info: boolean;
  introduce: boolean;
  certificate_and_award: boolean;
  activity: boolean;
  project: boolean;
  percent_complete: Number;
}

type sharedType = {
  id: string;
  year: number;
  grade: number;
  generation: number;
};

export interface IIntroduce {
  introduce: {
    element_id: string;
    heading: string;
    introduce: string;
    name: "자기 소개";
  };
  recently_shared: sharedType[];
}

export interface IIntroduceSpec {
  element_id: string;
  heading: string;
  introduce: string;
}

export interface IUpdateWriter {
  major_id: string;
  email: string;
  url: string;
  skill_set: string[];
}
