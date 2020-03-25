import { ReactEditor } from 'slate-react';
import { CommandStrategy } from '../CommandStrategy';
import { Transforms } from 'slate';

export class TableRemoveCommand implements CommandStrategy {
  public name = 'table-remove';

  private _editor: ReactEditor | null = null;

  setEditor(editor: ReactEditor): void {
    this._editor = editor;
  }

  execute(): void {
    if (!this._editor) return;

    Transforms.removeNodes(this._editor, {
      match: n => n.type === 'table'
    });
  }
}
