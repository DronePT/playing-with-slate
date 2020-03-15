import { ReactEditor } from 'slate-react';
import { Transforms, Editor } from 'slate';
import { KeyDownStrategy } from '../KeyDownStrategy';
export class CodeBlockElement extends KeyDownStrategy {
  constructor(editor: ReactEditor) {
    super('code', editor);
  }

  public get isActive(): boolean {
    return this.isCodeBlockActive();
  }

  private toggleCodeBlock(): void {
    const isActive = this.isCodeBlockActive();
    Transforms.setNodes(
      this._editor,
      { type: isActive ? null : 'code' },
      { match: n => Editor.isBlock(this._editor, n) }
    );
  }

  private isCodeBlockActive(): boolean {
    const [match] = Editor.nodes(this._editor, {
      match: n => n.type === 'code'
    });
    return !!match;
  }

  toggle(): void {
    this.toggleCodeBlock();
  }
}
