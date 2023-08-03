import { createSlice } from '@reduxjs/toolkit';
import { IToggles } from '../types/toggle.types';

const initialState: IToggles = {
  toggleState: true,
  modalState: false,
  currentNote: null,
};

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    switchReducer: (state) => {
      state.toggleState = !state.toggleState;
    },
    toggleModal: (state, { payload: id }) => {
      if (id) state.currentNote = id;
      state.modalState = !state.modalState;
    },
    nullifyCurrentNote: (state) => {
      state.currentNote = null;
    },
  },
});

export const { actions, reducer } = toggleSlice;
