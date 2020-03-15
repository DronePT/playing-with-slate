import { ReactEditor } from 'slate-react';
import { Transforms, Editor } from 'slate';
import { KeyDownStrategy } from '../KeyDownStrategy';
export class TableElement implements KeyDownStrategy {
  private _editor: ReactEditor;

  public strategyName: string;

  constructor(editor: ReactEditor) {
    this._editor = editor;

    this.strategyName = 'table';
  }

  public get isActive(): boolean {
    return this.isTableActive();
  }

  private toggleTable(): void {
    const isActive = this.isTableActive();
    Transforms.setNodes(
      this._editor,
      { type: isActive ? null : this.strategyName },
      { match: n => Editor.isBlock(this._editor, n) }
    );
  }

  private isTableActive(): boolean {
    const [match] = Editor.nodes(this._editor, {
      match: n => n.type === this.strategyName
    });
    return !!match;
  }

  toggle(): void {
    this.toggleTable();
  }
}
