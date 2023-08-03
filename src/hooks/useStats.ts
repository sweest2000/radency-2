import { useTypedSelector } from './useTypedSelector';

export const useStats = () => {
  const statsState = useTypedSelector((state) => state.statsReducer);
  return statsState;
};
