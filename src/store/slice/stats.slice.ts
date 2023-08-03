import { createSlice } from '@reduxjs/toolkit';
import { IStat } from '../../types/stat.types';

const initialState: IStat = {
  stats: [
    {
      image: 'src/assets/cart-fill.svg',
      name: 'Task',
      active: '0',
      archived: '0',
    },
    {
      image: 'src/assets/lightbulb-fill.svg',
      name: 'Idea',
      active: '0',
      archived: '0',
    },
    {
      image: 'src/assets/brain-fill.svg',
      name: 'Random Thought',
      active: '0',
      archived: '0',
    },
  ],
  statsHeader: [
    {
      image: '',
      name: 'Note Category',
      active: 'Active',
      archived: 'Archived',
    },
  ],
};

export const statsSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    countActive: (state, { payload: notes }) => {
      state.stats.find((item) => item.name === 'Task')!.active = notes.filter(
        (item: { category: string }) => item.category === 'Task'
      ).length;
      state.stats.find((item) => item.name === 'Idea')!.active = notes.filter(
        (item: { category: string }) => item.category === 'Idea'
      ).length;
      state.stats.find((item) => item.name === 'Random Thought')!.active =
        notes.filter(
          (item: { category: string }) => item.category === 'Random Thought'
        ).length;
    },
    countArchived: (state, { payload: archive }) => {
      state.stats.find((item) => item.name === 'Task')!.archived =
        archive.filter(
          (item: { category: string }) => item.category === 'Task'
        ).length;
      state.stats.find((item) => item.name === 'Idea')!.archived =
        archive.filter(
          (item: { category: string }) => item.category === 'Idea'
        ).length;
      state.stats.find((item) => item.name === 'Random Thought')!.archived =
        archive.filter(
          (item: { category: string }) => item.category === 'Random Thought'
        ).length;
    },
  },
});

export const { actions, reducer } = statsSlice;
