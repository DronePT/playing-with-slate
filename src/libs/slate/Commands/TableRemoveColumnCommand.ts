import { ReactEditor } from 'slate-react';
import { CommandStrategy } from '../CommandStrategy';
import { Transforms, Path } from 'slate';
import {
  getTableCellPath,
  getTablePath,
  getTableChildren
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
        // this gives us the table body and table header (if it exists)
        const tableChildren = getTableChildren(_editor, tablePath);

        for (let i = 0; i < tableChildren.length; i++) {
          // here we are checking tbody and theader, so we know
          // if we have to delete from header as well

          for (let r = 0; r < tableChildren[i].children.length; r++) {
            // here we will run through each row and delete
            // the column (cell) index that we are clicking on
            // by using the following formula:
            // [table, body/header, row, cell];

            Transforms.removeNodes(this._editor, {
              at: [...tablePath, i, r, deleteColumnCellIndex] as Path
            });
          }
        }

        // just need to check if table has any cells, if not we delete it
        // make helper function to check that
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
