import './App.css';
import Table from './components/table/Table';
import Button from './components/ui/Button';

function App() {
  return (
    <div className="flex flex-col gap-7 m-10">
      <Table tableType="notes" />
      <div className="flex justify-end">
        <Button buttonText="Create Note" />
      </div>
      <Table tableType="stats" />
    </div>
  );
}

export default App;
