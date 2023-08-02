import { createSlice } from '@reduxjs/toolkit';
import { INote } from '../types/note.types';

const initialState: INote = {
  notes: [
    {
      icon: 'src/assets/cart-fill.svg',
      name: 'Shopping list',
      created: 'April 20, 2021',
      category: 'Task',
      content: 'Tomatoes, bread',
      dates: '-',
    },
    {
      icon: 'src/assets/brain-fill.svg',
      name: 'The theory of evolution',
      created: 'April 27, 2021',
      category: 'Random Thought',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      dates: '-',
    },
    {
      icon: 'src/assets/lightbulb-fill.svg',
      name: 'New Feature',
      created: 'May 05, 2021',
      category: 'Idea',
      content: 'Implement new things on 3/5/2021 and 5/5/2021',
      dates: '3/5/2021, 5/5/2021',
    },
    {
      icon: 'src/assets/cart-fill.svg',
      name: 'Books',
      created: 'May 15, 2021',
      category: 'Task',
      content: 'The Lean Startup',
      dates: '-',
    },
    {
      icon: 'src/assets/brain-fill.svg',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      created: 'April 27, 2021',
      category: 'Random Thought',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      dates: '-',
    },
    {
      icon: 'src/assets/lightbulb-fill.svg',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      created: 'April 27, 2021',
      category: 'Idea',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      dates: '-',
    },
    {
      icon: 'src/assets/brain-fill.svg',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      created: 'April 27, 2021',
      category: 'Random Thought',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      dates: '-',
    },
  ],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, { payload: note }) => {
      state.notes.push(note);
    },
  },
});

export const { actions, reducer } = notesSlice;
