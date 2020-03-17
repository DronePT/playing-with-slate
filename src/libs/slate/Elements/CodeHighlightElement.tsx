import React from 'react';
import { ReactEditor, RenderElementProps } from 'slate-react';
import { Transforms, Editor } from 'slate';

import { ElementOrMarkStrategy } from '../ElementOrMarkStrategy';
import CodeHighlight from '../../../components/CodeHighlight';

export class CodeHighlightElement extends ElementOrMarkStrategy {
  constructor(editor: ReactEditor) {
    super('code-highlight', 'meta+x', editor);
  }

  public get isActive(): boolean {
    return this.isCodeHighlightActive();
  }

  private toggleCodeHighlight(): void {
    // const isActive = this.isCodeHighlightActive();

    Transforms.insertNodes(this._editor, {
      type: this.strategyName,
      children: [
        {
          text: '',
          code: `      function foo() {
        console.log('bar');
      }`
        }
      ]
    });
    // Transforms.setNodes(
    //   this._editor,
    //   {
    //     type: isActive ? null : this.strategyName
    //   },
    //   { match: n => Editor.isBlock(this._editor, n) }
    // );
  }

  private isCodeHighlightActive(): boolean {
    const [match] = Editor.nodes(this._editor, {
      match: n => n.type === this.strategyName
    });
    return !!match;
  }

  toggle(): void {
    this.toggleCodeHighlight();
  }

  render(props: RenderElementProps): JSX.Element {
    return <CodeHighlight {...props} />;
  }
}
