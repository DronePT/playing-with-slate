import { ReactEditor } from 'slate-react';
import { Transforms, Editor } from 'slate';
import { KeyDownStrategy } from '../KeyDownStrategy';
export class TableElement extends KeyDownStrategy {
  constructor(editor: ReactEditor) {
    super('table', editor);
  }

  public get isActive(): boolean {
    return this.isTableActive();
  }

  private toggleTable(): void {
    const isActive = this.isTableActive();
    Transforms.setNodes(
      this._editor,
      { type: isActive ? null : 'code' },
      { match: n => Editor.isBlock(this._editor, n) }
    );
  }

  private isTableActive(): boolean {
    const [match] = Editor.nodes(this._editor, {
      match: n => n.type === 'code'
    });
    return !!match;
  }

  toggle(): void {
    this.toggleTable();
  }
}
