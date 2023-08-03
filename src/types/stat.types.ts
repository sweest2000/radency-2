export interface IStats {
  image: string;
  name: string;
  active: string;
  archived: string;
}

export interface IStat {
  stats: IStats[];
  statsHeader: IStats[];
}
