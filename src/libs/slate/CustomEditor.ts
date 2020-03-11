import { ReactEditor } from 'slate-react';
import { EditorKeyDownToggler } from './EditorKeyDownToggler';

class CustomEditor {
  private _editor: ReactEditor;

  constructor(editor: ReactEditor) {
    this._editor = editor
  }

  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    if (!event.metaKey) {
      return
    }

    const toggler = EditorKeyDownToggler.getToggler(event.key, this._editor);

    toggler?.toggle()
  }
}

export default CustomEditor
