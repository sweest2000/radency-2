import { createSlice } from '@reduxjs/toolkit';
import { INote } from '../types/note.types';

const initialState: INote = {
  notes: [
    {
      id: crypto.randomUUID(),
      icon: 'src/assets/cart-fill.svg',
      name: 'Shopping list',
      created: 'April 20, 2021',
      category: 'Task',
      content: 'Tomatoes, bread',
      dates: '-',
    },
    {
      id: crypto.randomUUID(),
      icon: 'src/assets/brain-fill.svg',
      name: 'The theory of evolution',
      created: 'April 27, 2021',
      category: 'Random Thought',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      dates: '-',
    },
    {
      id: crypto.randomUUID(),
      icon: 'src/assets/lightbulb-fill.svg',
      name: 'New Feature',
      created: 'May 05, 2021',
      category: 'Idea',
      content: 'Implement new things on 3/5/2021 and 5/5/2021',
      dates: '3/5/2021, 5/5/2021',
    },
    {
      id: crypto.randomUUID(),
      icon: 'src/assets/cart-fill.svg',
      name: 'Books',
      created: 'May 15, 2021',
      category: 'Task',
      content: 'The Lean Startup',
      dates: '-',
    },
    {
      id: crypto.randomUUID(),
      icon: 'src/assets/brain-fill.svg',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      created: 'April 27, 2021',
      category: 'Random Thought',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      dates: '-',
    },
    {
      id: crypto.randomUUID(),
      icon: 'src/assets/lightbulb-fill.svg',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      created: 'April 27, 2021',
      category: 'Idea',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      dates: '-',
    },
    {
      id: crypto.randomUUID(),
      icon: 'src/assets/brain-fill.svg',
      name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      created: 'April 27, 2021',
      category: 'Random Thought',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
      dates: '-',
    },
  ],
  notesHeader: [
    {
      icon: '',
      name: 'Name',
      created: 'Created',
      category: 'Category',
      content: 'Content',
      dates: 'Dates',
    },
  ],
  archive: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, { payload: note }) => {
      state.notes.push(note);
    },
    changeNote: (state, { payload: note }) => {
      const targetItem =
        state.notes.find((item) => item.id === note.id) ||
        state.archive.find((item) => item.id === note.id);
      if (targetItem) {
        targetItem.icon = note.icon;
        targetItem.name = note.name;
        targetItem.category = note.category;
        targetItem.content = note.content;
        targetItem.dates = note.dates;
      }
    },
    deleteNote: (state, { payload: id }) => {
      state.notes = state.notes.filter((item) => item.id !== id);
      state.archive = state.archive.filter((item) => item.id !== id);
    },
    moveNote: (state, { payload: id }) => {
      const targetIndex = state.notes.findIndex((item) => item.id === id);
      if (targetIndex === -1) {
        const targetIndex = state.archive.findIndex((item) => item.id === id);
        const [targetArchived] = state.archive.splice(targetIndex, 1);
        state.notes.push(targetArchived);
      } else {
        const [targetActive] = state.notes.splice(targetIndex, 1);
        state.archive.push(targetActive);
      }
    },
    deleteAll: (state, { payload: toggle }) => {
      toggle ? (state.notes.length = 0) : (state.archive.length = 0);
    },
    moveAll: (state, { payload: toggle }) => {
      toggle
        ? (state.archive.push(...state.notes), (state.notes.length = 0))
        : (state.notes.push(...state.archive), (state.archive.length = 0));
    },
  },
});

export const { actions, reducer } = notesSlice;
