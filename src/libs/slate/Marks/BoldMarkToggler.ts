import { ReactEditor } from 'slate-react';
import { Transforms, Text, Editor } from 'slate';
import { KeyDownStrategy } from "../KeyDownStrategy";

export class BoldMarkToggler implements KeyDownStrategy {
  private _editor: ReactEditor;
  public strategyName: string;

  constructor(editor: ReactEditor) {
    this._editor = editor;
    this.strategyName = 'bold';
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


