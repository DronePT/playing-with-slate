import { ReactEditor } from 'slate-react';
import { Transforms, Text, Editor } from 'slate';
import { EditorKeyDownEvent } from "../EditorKeyDownEvent";

export class ItalicMarkToggler implements EditorKeyDownEvent {
  private _editor: ReactEditor;
  constructor(editor: ReactEditor) {
    this._editor = editor;
  }
  private toggleItalicMark() {
    const isActive = this.isItalicMarkActive();
    Transforms.setNodes(this._editor, { italic: isActive ? null : true }, { match: n => Text.isText(n), split: true });
  }
  private isItalicMarkActive() {
    const [match] = Editor.nodes(this._editor, {
      match: n => n.italic === true,
      universal: true,
    });
    return !!match;
  }
  toggle() {
    this.toggleItalicMark();
  }
}
