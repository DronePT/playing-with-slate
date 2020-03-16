import React from 'react';
import { ReactEditor, RenderLeafProps } from 'slate-react';
import { Transforms, Text, Editor } from 'slate';
import { ElementOrMarkStrategy } from '../ElementOrMarkStrategy';

export class BoldMark extends ElementOrMarkStrategy {
  constructor(editor: ReactEditor) {
    super('bold', 'meta+b', editor);
  }

  public get isActive(): boolean {
    return this.isBoldMarkActive();
  }

  private toggleBoldMark(): void {
    const isActive = this.isBoldMarkActive();
    Transforms.setNodes(
      this._editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    );
  }

  private isBoldMarkActive(): boolean {
    const [match] = Editor.nodes(this._editor, {
      match: n => n.bold === true,
      universal: true
    });
    return !!match;
  }

  toggle(): void {
    this.toggleBoldMark();
  }

  render(props: RenderLeafProps): JSX.Element {
    return <div {...props} />;
  }
}
