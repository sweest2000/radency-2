export interface IToggles {
  toggleState: boolean;
  modalState: boolean;
  currentNote: string | null;
}

export interface IToggle {
  toggles: IToggles;
}
