import { ReactEditor, RenderLeafProps } from 'slate-react';
import { Transforms, Text, Editor } from 'slate';
import { ElementOrMarkStrategy } from '../ElementOrMarkStrategy';
import React from 'react';

export class ItalicMark extends ElementOrMarkStrategy {
  constructor(editor: ReactEditor) {
    super('italic', 'meta+i', editor);
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

  render(props: RenderLeafProps): JSX.Element {
    return <div {...props} />;
  }
}
