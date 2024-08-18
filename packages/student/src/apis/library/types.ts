type libraryType = {
  year: number;
  grade: number;
  generation: number;
  id: string;
};

export interface ILibrary {
  data: libraryType[];
  numberOfData: number;
}
