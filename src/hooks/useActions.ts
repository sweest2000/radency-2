import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as modal } from '../store/slice/modal.slice';
import { actions as note } from '../store/slice/notes.slice';
import { actions as stat } from '../store/slice/stats.slice';
import { actions as toggle } from '../store/slice/toggle.slice';

const rootActions = {
  ...toggle,
  ...note,
  ...modal,
  ...stat,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
