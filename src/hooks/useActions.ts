import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as modal } from '../store/modal.slice';
import { actions as note } from '../store/notes.slice';
import { actions as stat } from '../store/stats.slice';
import { actions as toggle } from '../store/toggle.slice';

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
