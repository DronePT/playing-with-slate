import React from 'react';
import { ReactEditor, RenderElementProps } from 'slate-react';
import { Transforms, Editor } from 'slate';

import { ElementOrMarkStrategy } from '../ElementOrMarkStrategy';
import Paragraph from '../../../components/Paragraph';

export class ParagraphElement extends ElementOrMarkStrategy {
  constructor(editor: ReactEditor) {
    super('paragraph', 'meta+ctrl+p', editor);
  }

  public get isActive(): boolean {
    return this.isBlockActive();
  }

  private toggleParagraphBlock(): void {
    const isActive = this.isBlockActive();
    Transforms.setNodes(
      this._editor,
      { type: isActive ? null : this.strategyName },
      { match: n => Editor.isBlock(this._editor, n) }
    );
  }

  private isBlockActive(): boolean {
    const [match] = Editor.nodes(this._editor, {
      match: n => n.type === this.strategyName
    });
    return !!match;
  }

  toggle(): void {
    this.toggleParagraphBlock();
  }

  render(props: RenderElementProps): JSX.Element {
    return <Paragraph {...props} />;
  }
}
