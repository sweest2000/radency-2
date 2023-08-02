import { useTypedSelector } from './useTypedSelector';

export const useNotes = () => {
  const notesState = useTypedSelector((state) => state.notesReducer);
  return notesState;
};
