import React from 'react';
import { Transforms } from 'slate'; // hammer
// import CustomEditor from '../../../../libs/slate/CustomEditor';
import { ReactEditor } from 'slate-react';

import './TableSelection.scss';

interface TableSelectionProps {
  editor: ReactEditor;
  onSelection: () => void;
}

const handleButtonClick = (
  onSelection: () => void,
  editor: ReactEditor,
  tableRows: number,
  tableColumns: number
): void => {
  const tableStructure = [];

  for (let r = 0; r < tableRows; r++) {
    const columns = [];
    for (let c = 0; c < tableColumns; c++) {
      columns.push({
        type: 'table-cell',
        children: [{ text: `cell ${r} - ${c}` }]
      });
    }

    tableStructure.push({
      type: 'table-row',
      children: columns
    });
  }

  const block = {
    type: 'table',
    children: tableStructure
  };

  Transforms.insertNodes(editor, block);

  onSelection();
};

const TableSelection: React.FC<TableSelectionProps> = ({
  editor,
  onSelection
}) => {
  return (
    <div className="TableSelection">
      <button
        onClick={(): void => handleButtonClick(onSelection, editor, 2, 2)}
      >
        2x2
      </button>
      <button
        onClick={(): void => handleButtonClick(onSelection, editor, 2, 4)}
      >
        2x4
      </button>
      <button
        onClick={(): void => handleButtonClick(onSelection, editor, 4, 4)}
      >
        4x4
      </button>
      <button
        onClick={(): void => handleButtonClick(onSelection, editor, 4, 6)}
      >
        4x6
      </button>
    </div>
  );
};

export default TableSelection;
