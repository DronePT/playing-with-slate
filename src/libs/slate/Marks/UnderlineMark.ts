import { ReactEditor } from 'slate-react';
import { Transforms, Text, Editor } from 'slate';
import { ElementOrMarkStrategy } from '../ElementOrMarkStrategy';

export class UnderlineMark extends ElementOrMarkStrategy {
  constructor(editor: ReactEditor) {
    super('underline', 'meta+u', editor);
  }

  public get isActive(): boolean {
    return this.isUnderlineMarkActive();
  }

  private toggleUnderlineMark(): void {
    const isActive = this.isUnderlineMarkActive();
    Transforms.setNodes(
      this._editor,
      { underline: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    );
  }

  private isUnderlineMarkActive(): boolean {
    const [match] = Editor.nodes(this._editor, {
      match: n => n.underline === true,
      universal: true
    });
    return !!match;
  }

  toggle(): void {
    this.toggleUnderlineMark();
  }
}
