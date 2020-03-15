import { ReactEditor } from 'slate-react';
import { Transforms, Editor } from 'slate';
import { ElementOrMarkStrategy } from '../ElementOrMarkStrategy';
export class CodeBlockElement extends ElementOrMarkStrategy {
  constructor(editor: ReactEditor) {
    super('code', 'meta+\\', editor);
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
