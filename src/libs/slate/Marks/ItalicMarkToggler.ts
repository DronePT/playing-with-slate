import { ReactEditor } from 'slate-react';
import { Transforms, Text, Editor } from 'slate';
import { KeyDownStrategy } from '../KeyDownStrategy';

export class ItalicMarkToggler implements KeyDownStrategy {
  private _editor: ReactEditor;
  public strategyName: string;

  constructor(editor: ReactEditor) {
    this._editor = editor;
    this.strategyName = 'italic';
  }

  public get isActive(): boolean {
    return this.isItalicMarkActive();
  }

  private toggleItalicMark(): void {
    const isActive = this.isItalicMarkActive();
    Transforms.setNodes(
      this._editor,
      { italic: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    );
  }

  private isItalicMarkActive(): boolean {
    const [match] = Editor.nodes(this._editor, {
      match: n => n.italic === true,
      universal: true
    });

    return !!match;
  }

  toggle(): void {
    this.toggleItalicMark();
  }
}
