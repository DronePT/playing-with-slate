import { ReactEditor } from 'slate-react';
import { Transforms, Text, Editor } from 'slate';
import { KeyDownStrategy } from '../KeyDownStrategy';

export class BoldMarkToggler extends KeyDownStrategy {
  constructor(editor: ReactEditor) {
    super('bold', editor);
  }

  public get isActive(): boolean {
    return this.isBoldMarkActive();
  }

  private toggleBoldMark(): void {
    const isActive = this.isBoldMarkActive();
    Transforms.setNodes(
      this._editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    );
  }

  private isBoldMarkActive(): boolean {
    const [match] = Editor.nodes(this._editor, {
      match: n => n.bold === true,
      universal: true
    });
    return !!match;
  }

  toggle(): void {
    this.toggleBoldMark();
  }
}
