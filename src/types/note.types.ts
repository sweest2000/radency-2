export interface INotes {
  icon: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
}

export interface INote {
  notes: INotes[];
}
