import './App.css';
import Table from './components/table/Table';
import Button from './components/ui/Button';
import Modal from './components/ui/Modal';
import { useToggle } from './hooks/useToggle';

function App() {
  const { modalState } = useToggle();

  return (
    <div className="flex flex-col gap-7 m-10">
      <Table tableType="notes" />
      <div className="flex justify-end">
        <Button buttonText="Create Note" />
      </div>
      <Table tableType="stats" />
      {modalState && <Modal />}
    </div>
  );
}

export default App;
