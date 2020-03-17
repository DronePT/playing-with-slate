import React, { useState, ChangeEvent } from 'react';
import { Transforms, Node } from 'slate'; // hammer
// import CustomEditor from '../../../../libs/slate/CustomEditor';
import { ReactEditor } from 'slate-react';

import './TableSelection.scss';

interface TableSelectionProps {
  editor: ReactEditor;
  onSelection: () => void;
}

const TableSelection: React.FC<TableSelectionProps> = ({
  editor,
  onSelection
}) => {
  const [tableData, setTableData] = useState({
    useTableHeader: false
  });

  const handleButtonClick = (
    onSelection: () => void,
    editor: ReactEditor,
    table: { rows: number; columns: number }
  ): void => {
    const tableStructure: Node = {
      type: 'table',
      children: []
    };
    const tableHeader: Node = {
      type: 'table-header',
      children: []
    };
    const tableBody: Node = {
      type: 'table-body',
      children: []
    };

    for (let r = 0; r < table.rows; r++) {
      const columns: Array<Node> = [];
      const isTableHeader = r === 0 && tableData.useTableHeader;

      for (let c = 0; c < table.columns; c++) {
        columns.push({
          type: isTableHeader ? 'table-header-cell' : 'table-cell',
          children: [{ text: `cell ${r} - ${c}` }]
        });
      }

      const tableArray = isTableHeader ? tableHeader : tableBody;

      tableArray.children.push({
        type: 'table-row',
        children: columns
      });
    }

    // still to refactor
    if (tableHeader.children.length > 0) {
      tableStructure.children.push(tableHeader);
    }

    if (tableBody.children.length > 0) {
      tableStructure.children.push(tableBody);
    }

    Transforms.insertNodes(editor, tableStructure);

    onSelection();
  };

  const handleInputChange = (event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setTableData(oldState => ({
      ...oldState,
      [name]: value
    }));
  };

  return (
    <div className="table-selection">
      <div className="table-selection__headers">
        <input
          type="checkbox"
          id="useTableHeader"
          name="useTableHeader"
          value={tableData.useTableHeader ? 'checked' : ''}
          onChange={handleInputChange}
        />
        <label htmlFor="useTableHeader">Use table headers</label>
      </div>
      <div className="table-selection__grid">
        <button
          onClick={(): void =>
            handleButtonClick(onSelection, editor, {
              columns: 2,
              rows: 2
            })
          }
        >
          2x2
        </button>
        <button
          onClick={(): void =>
            handleButtonClick(onSelection, editor, {
              columns: 2,
              rows: 2
            })
          }
        >
          2x4
        </button>
        <button
          onClick={(): void =>
            handleButtonClick(onSelection, editor, {
              columns: 4,
              rows: 4
            })
          }
        >
          4x4
        </button>
        <button
          onClick={(): void =>
            handleButtonClick(onSelection, editor, {
              columns: 4,
              rows: 6
            })
          }
        >
          4x6
        </button>
      </div>
    </div>
  );
};

export default TableSelection;
