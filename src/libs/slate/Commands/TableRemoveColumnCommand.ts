import { ReactEditor } from 'slate-react';
import { CommandStrategy } from '../CommandStrategy';
import { Editor, Transforms, Path } from 'slate';

export class TableRemoveColumnCommand implements CommandStrategy {
  public name = 'table-remove-column';

  private _editor: ReactEditor | null = null;

  setEditor(editor: ReactEditor): void {
    this._editor = editor;
  }

  execute(): void {
    if (!this._editor) return;

    // Find table body to get the size of it (number of rows)
    const [[tableBody]] = Editor.nodes(this._editor, {
      match: n => n.type === 'table-body'
    });

    const [[, cellPath]] = Editor.nodes(this._editor, {
      match: n => {
        // console.log('nodes', n);

        return n.type === 'table-cell';
      }
    });

    const columnIndex = cellPath.pop();
    cellPath.pop();

    for (let i = 0; i < tableBody.children.length; i += 1) {
      Transforms.removeNodes(this._editor, {
        at: [...cellPath, i, columnIndex] as Path
      });
    }
  }
}