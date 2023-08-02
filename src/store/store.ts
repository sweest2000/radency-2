import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as modalReducer } from './modal.slice';
import { reducer as notesReducer } from './notes.slice';
import { reducer as toggleReducer } from './toggle.slice';

const reducers = combineReducers({ toggleReducer, notesReducer, modalReducer });

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
