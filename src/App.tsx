import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/table/Table';
import Button from './components/ui/Button/Button';
import Modal from './components/ui/Modal/Modal';
import { useActions } from './hooks/useActions';
import { useNotes } from './hooks/useNotes';
import { useToggle } from './hooks/useToggle';

function App() {
  const { notes, archive } = useNotes();
  const { modalState, toggleState } = useToggle();
  const { countActive, countArchived } = useActions();

  const [notesTableType, setNotesTableType] = useState('notes');

  useEffect(() => {
    toggleState ? setNotesTableType('notes') : setNotesTableType('archive');
  }, [toggleState]);

  useEffect(() => {
    countActive(notes);
    countArchived(archive);
  }, [notes, archive]);

  return (
    <div className='flex flex-col gap-7 m-10'>
      <Table tableType={notesTableType} />
      <div className='flex justify-end'>
        <Button buttonText='Create Note' />
      </div>
      <Table tableType='stats' />
      {modalState && <Modal />}
    </div>
  );
}

export default App;
