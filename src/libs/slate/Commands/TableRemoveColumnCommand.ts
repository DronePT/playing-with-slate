import { ReactEditor } from 'slate-react';
import { CommandStrategy } from '../CommandStrategy';
import { Transforms, Path } from 'slate';
import {
  getTableCellPath,
  getTablePath,
  getAllTableRowsPaths,
  doesTableOnlyHaveOneColumnLeft
} from '../helpers/table';

export class TableRemoveColumnCommand implements CommandStrategy {
  public name = 'table-remove-column';

  private _editor: ReactEditor | null = null;

  setEditor(editor: ReactEditor): void {
    this._editor = editor;
  }

  execute(): void {
    if (!this._editor) return;

    const _editor = this._editor;
    const path = _editor.selection?.anchor.path || [];

    // get the index of the column we want to delete
    const tableCellPath = getTableCellPath(_editor, path);

    if (tableCellPath) {
      const deleteColumnCellIndex = tableCellPath[tableCellPath?.length - 1];

      // get the path to the table of the column we want to delete
      const tablePath = getTablePath(_editor, path);

      if (tablePath) {
        if (doesTableOnlyHaveOneColumnLeft(_editor, tablePath)) {
          return Transforms.removeNodes(_editor, {
            at: tablePath as Path
          });
        }

        const tableRowsPaths = getAllTableRowsPaths(_editor, tablePath);

        tableRowsPaths.forEach(rowPath => {
          Transforms.removeNodes(_editor, {
            at: [...rowPath, deleteColumnCellIndex] as Path
          });
        });
      }
    }

    return;

    // // Find table body to get the size of it (number of rows)
    // const [[tableBody]] = Editor.nodes(this._editor, {
    //   match: n => n.type === 'table-body'
    // });

    // // first see if it's a body or header
    // // then do code differently

    // const [[, cellPath]] = Editor.nodes(this._editor, {
    //   match: n => {
    //     // console.log('nodes', n);

    //     return n.type === 'table-cell';
    //   }
    // });

    // const columnIndex = cellPath.pop();
    // cellPath.pop();

    // for (let i = 0; i < tableBody.children.length; i += 1) {
    //   Transforms.removeNodes(this._editor, {
    //     at: [...cellPath, i, columnIndex] as Path
    //   });
    // }

    // // remove table header if it exists
    // const tableHeaderExists = cellPath.slice(-1)[0] > 0;
    // if (tableHeaderExists) {
    //   const tableHeaderCell = [...cellPath.splice(0, cellPath.length - 1), 0];
    //   Transforms.removeNodes(this._editor, {
    //     at: [...tableHeaderCell, 0, columnIndex] as Path
    //   });
    // }

    // // check if we should remove table as well by checking if table rows
    // // has no table-cell
    // const [[tableRow]] = Editor.nodes(this._editor, {
    //   match: n => n.type === 'table-row'
    // });

    // const doesTableCellExist = tableRow.children.find(
    //   (child: Node) => child.type === 'table-cell'
    // );
    // if (!doesTableCellExist) {
    //   Transforms.removeNodes(this._editor, {
    //     match: n => n.type === 'table'
    //   });
    // }
  }
}
