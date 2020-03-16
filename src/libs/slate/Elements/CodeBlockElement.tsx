import React from 'react';
import { ReactEditor, RenderElementProps } from 'slate-react';
import { Transforms, Editor } from 'slate';

import { ElementOrMarkStrategy } from '../ElementOrMarkStrategy';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

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
      { type: isActive ? null : this.strategyName },
      { match: n => Editor.isBlock(this._editor, n) }
    );
  }

  private isCodeBlockActive(): boolean {
    const [match] = Editor.nodes(this._editor, {
      match: n => n.type === this.strategyName
    });
    return !!match;
  }

  toggle(): void {
    this.toggleCodeBlock();
  }

  render(props: RenderElementProps): JSX.Element {
    return <CodeBlock {...props} />;
  }
}
