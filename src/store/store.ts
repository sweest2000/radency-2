import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as modalReducer } from './slice/modal.slice';
import { reducer as notesReducer } from './slice/notes.slice';
import { reducer as statsReducer } from './slice/stats.slice';
import { reducer as toggleReducer } from './slice/toggle.slice';

const reducers = combineReducers({
  toggleReducer,
  notesReducer,
  modalReducer,
  statsReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
