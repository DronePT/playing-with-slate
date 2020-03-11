import { ReactEditor } from 'slate-react';
import { Transforms, Text, Editor } from 'slate';
import { EditorKeyDownEvent } from "../EditorKeyDownEvent";
export class UnderlineMarkToggler implements EditorKeyDownEvent {
  private _editor: ReactEditor;
  constructor(editor: ReactEditor) {
    this._editor = editor;
  }
  private toggleUnderlineMark() {
    const isActive = this.isUnderlineMarkActive();
    Transforms.setNodes(this._editor, { underline: isActive ? null : true }, { match: n => Text.isText(n), split: true });
  }
  private isUnderlineMarkActive() {
    const [match] = Editor.nodes(this._editor, {
      match: n => n.underline === true,
      universal: true,
    });
    return !!match;
  }
  toggle() {
    this.toggleUnderlineMark();
  }
}
