import { useNotes } from '../../hooks/useNotes';
import { useStats } from '../../hooks/useStats';
import TableRow from './TableRow/TableRow';

type TableProps = {
  tableType: string;
};

const Table = ({ tableType }: TableProps) => {
  const { archive, notes, notesHeader } = useNotes();
  const { stats, statsHeader } = useStats();

  return (
    <>
      <table className='flex flex-col gap-3'>
        <thead>
          <TableRow
            rowData={
              tableType === 'notes' || tableType === 'archive'
                ? Object.values(notesHeader[0])
                : Object.values(statsHeader[0])
            }
            rowType={
              tableType === 'notes' || tableType === 'archive' ? 'notesHeader' : 'statsHeader'
            }
          />
        </thead>
        <tbody className='flex flex-col gap-3'>
          {tableType === 'notes'
            ? notes.map((item) => {
                return (
                  <TableRow
                    key={crypto.randomUUID()}
                    rowData={Object.values(item)}
                    rowType='note'
                  />
                );
              })
            : tableType === 'stats'
            ? stats.map((item) => {
                return (
                  <TableRow
                    key={crypto.randomUUID()}
                    rowData={Object.values(item)}
                    rowType='stat'
                  />
                );
              })
            : archive.map((item) => {
                return (
                  <TableRow
                    key={crypto.randomUUID()}
                    rowData={Object.values(item)}
                    rowType='note'
                  />
                );
              })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
