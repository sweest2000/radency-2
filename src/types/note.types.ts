export interface INotes {
  id?: string;
  icon: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
}

export interface INote {
  notes: INotes[];
  notesHeader: INotes[];
  archive: INotes[];
}
