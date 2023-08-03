import { createSlice } from '@reduxjs/toolkit';
import { IModals } from '../../types/modal.types';

const initialState: IModals = {
  name: '',
  category: '',
  content: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setName: (state, { payload: data }) => {
      state.name = data.name;
    },
    setCategory: (state, { payload: data }) => {
      state.category = data.category;
    },
    setContent: (state, { payload: data }) => {
      state.content = data.content;
    },
  },
});

export const { actions, reducer } = modalSlice;
