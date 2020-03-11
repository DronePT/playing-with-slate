import { ReactEditor } from 'slate-react';
import { Transforms, Text, Editor } from 'slate';
import { EditorKeyDownEvent } from "../EditorKeyDownEvent";

export class BoldMarkToggler implements EditorKeyDownEvent {
  private _editor: ReactEditor;
  constructor(editor: ReactEditor) {
    this._editor = editor;
  }
  private toggleBoldMark() {
    const isActive = this.isBoldMarkActive();
    Transforms.setNodes(this._editor, { bold: isActive ? null : true }, { match: n => Text.isText(n), split: true });
  }
  private isBoldMarkActive() {
    const [match] = Editor.nodes(this._editor, {
      match: n => n.bold === true,
      universal: true,
    });
    return !!match;
  }
  toggle() {
    this.toggleBoldMark();
  }
}


