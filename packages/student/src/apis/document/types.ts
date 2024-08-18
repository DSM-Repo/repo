export interface ICompletion {
  writerInfo: boolean;
  introduce: boolean;
  certificateAndAward: boolean;
  activity: boolean;
  project: boolean;
  percentComplete: Number;
}

type sharedType = {
  id: string;
  year: number;
  grade: number;
  generation: number;
};

export interface IIntroduce {
  introduce: {
    elementId: string;
    heading: string;
    introduce: string;
    name: "자기 소개";
  };
  recentlyShared: sharedType[];
}

export interface IIntroduceSpec {
  elementId: string;
  heading: string;
  introduce: string;
}

export interface IUpdateWriter {
  majorId: string;
  email: string;
  url: string;
  skillSet: string[];
}
