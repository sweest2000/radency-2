import { useState } from 'react';

type RowProps = {
  rowData: Array<string>;
  rowType: string;
};

const TableRow = ({ rowData, rowType }: RowProps) => {
  const [enabled, setEnabled] = useState(true);

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
        return (
          <td
            key={item + index}
            className={
              index === 0 ? 'w-12' : rowType.includes('stat') ? 'w-96' : ''
            }
          >
            {index === 0 ? (
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
            <button>
              <img src="src/assets/pencil-fill.svg" />
            </button>
            <button>
              <img src="src/assets/archive-fill.svg" />
            </button>
            <button>
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
                value=""
                className="sr-only peer"
                checked={enabled}
                onChange={() => setEnabled(!enabled)}
              />
              <div className="w-11 h-6 border bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-transparent  dark:peer-focus:ring-transparent dark:bg-[#999999] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-white peer-checked:bg-[#999999]"></div>
            </label>
            <button id="archive-all">
              <img
                className="invert"
                src="src/assets/archive-fill.svg"
                id="th-archive"
                width="25"
                height="25"
              />
            </button>
            <button id="delete-all">
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
