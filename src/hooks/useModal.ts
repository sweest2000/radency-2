import { useTypedSelector } from './useTypedSelector';

export const useModal = () => {
  const modalState = useTypedSelector((state) => state.modalReducer);
  return modalState;
};
