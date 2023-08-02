import { createSlice } from '@reduxjs/toolkit';
import { IToggles } from '../types/toggle.types';

const initialState: IToggles = {
  toggleState: true,
  modalState: false,
};

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    switchReducer: (state) => {
      state.toggleState = !state.toggleState;
    },
    toggleModal: (state) => {
      state.modalState = !state.modalState;
    },
  },
});

export const { actions, reducer } = toggleSlice;
