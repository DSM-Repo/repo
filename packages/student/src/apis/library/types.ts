type libraryType = {
  year: number;
  grade: number;
  generation: number;
  id: string;
};

export interface ILibrary {
  data: libraryType[];
  number_of_data: number;
}
