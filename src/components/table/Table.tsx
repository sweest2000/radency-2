import { useNotes } from '../../hooks/useNotes';
import TableRow from './TableRow';

type TableProps = {
  tableType: string;
};

const Table = ({ tableType }: TableProps) => {
  const { notes } = useNotes();
  //   const { addNote } = useActions();

  const notesHeader: string[] = [
    '',
    'Name',
    'Created',
    'Category',
    'Content',
    'Dates',
  ];
  const statsHeader: string[] = ['', 'Note Category', 'Active', 'Archived'];

  const stats = [
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
  ];

  return (
    <>
      <table className="flex flex-col gap-3">
        <thead>
          <TableRow
            rowData={tableType === 'notes' ? notesHeader : statsHeader}
            rowType={tableType === 'notes' ? 'notesHeader' : 'statsHeader'}
          />
        </thead>
        <tbody className="flex flex-col gap-3">
          {tableType === 'notes'
            ? notes.map((item, index) => {
                return (
                  <TableRow
                    key={item.name + index}
                    rowData={Object.values(item)}
                    rowType="note"
                  />
                );
              })
            : stats.map((item, index) => {
                return (
                  <TableRow
                    key={item.name + index}
                    rowData={Object.values(item)}
                    rowType="stat"
                  />
                );
              })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
