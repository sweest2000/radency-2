import { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useToggle } from '../../hooks/useToggle';

type RowProps = {
  rowData: Array<string>;
  rowType: string;
};

const TableRow = ({ rowData, rowType }: RowProps) => {
  const {
    switchReducer,
    deleteNote,
    moveNote,
    moveAll,
    deleteAll,
    toggleModal,
  } = useActions();
  const { toggleState } = useToggle();
  const [id, setId] = useState(rowData[0]);

  return (
    <tr
      className={
        rowType === 'notesHeader'
          ? 'flex justify-between bg-[#999999] rounded-md text-white font-extrabold'
          : rowType === 'statsHeader'
          ? 'flex gap-3 bg-[#999999] rounded-md text-white font-extrabold'
          : rowType === 'stat'
          ? 'gap-3 justify-normal'
          : 'flex justify-between'
      }
    >
      {rowData.map((item, index) => {
        if (index === 0 && rowType === 'note') return null;
        const isImageCell =
          (index === 1 && rowType === 'note') ||
          (index === 0 && rowType === 'stat');
        return (
          <td
            key={crypto.randomUUID()}
            className={rowType.includes('stat') ? 'w-96' : ''}
          >
            {isImageCell ? (
              <img src={item} />
            ) : (
              <span className="truncate">{item}</span>
            )}
          </td>
        );
      })}
      {rowType === 'note' ? (
        <td className="flex justify-end mr-3">
          <div className="flex gap-3">
            <button onClick={() => toggleModal(id)}>
              <img src="src/assets/pencil-fill.svg" />
            </button>
            <button onClick={() => moveNote(id)}>
              <img src="src/assets/archive-fill.svg" />
            </button>
            <button onClick={() => deleteNote(id)}>
              <img src="src/assets/trash-fill.svg" />
            </button>
          </div>
        </td>
      ) : rowType === 'notesHeader' ? (
        <td className="flex justify-end mr-3">
          <div className="flex gap-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                value=""
                checked={toggleState}
                onChange={() => switchReducer()}
              />
              <div className="w-11 h-6 border bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-transparent  dark:peer-focus:ring-transparent dark:bg-[#999999] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-white peer-checked:bg-[#999999]"></div>
            </label>
            <button id="archive-all" onClick={() => moveAll(toggleState)}>
              <img
                className="invert"
                src="src/assets/archive-fill.svg"
                id="th-archive"
                width="25"
                height="25"
              />
            </button>
            <button id="delete-all" onClick={() => deleteAll(toggleState)}>
              <img
                className="invert"
                src="src/assets/trash-fill.svg"
                id="th-trash"
                width="25"
                height="25"
              />
            </button>
          </div>
        </td>
      ) : null}
    </tr>
  );
};

export default TableRow;
