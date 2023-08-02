import { useTypedSelector } from './useTypedSelector';

export const useToggle = () => {
  const toggleState = useTypedSelector((state) => state.toggleReducer);
  return toggleState;
};
