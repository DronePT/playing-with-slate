import { ReactEditor } from 'slate-react';
import { Transforms, Editor } from 'slate';
import { EditorKeyDownEvent } from "../EditorKeyDownEvent";
export class CodeBlockElement implements EditorKeyDownEvent {
  private _editor: ReactEditor;
  constructor(editor: ReactEditor) {
    this._editor = editor;
  }
  private toggleCodeBlock() {
    const isActive = this.isCodeBlockActive();
    Transforms.setNodes(this._editor, { type: isActive ? null : 'code' }, { match: n => Editor.isBlock(this._editor, n) });
  }
  private isCodeBlockActive(): boolean {
    const [match] = Editor.nodes(this._editor, {
      match: n => n.type === 'code',
    });
    return !!match;
  }
  toggle() {
    this.toggleCodeBlock();
  }
}
