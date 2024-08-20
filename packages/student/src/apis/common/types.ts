export type dataType = {
  id: string;
  name: string;
};

export interface IGetMajors {
  data: dataType[];
  data_of_number: Number;
}
