export type dataType = {
  id: string,
  name: string,
};

export interface IGetMajors {
  data: dataType[];
  dataOfNumber: Number;
}
