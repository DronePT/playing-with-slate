import React from 'react';
import { ReactEditor, RenderElementProps } from 'slate-react';
import { Transforms, Editor } from 'slate';

import { ElementOrMarkStrategy } from '../ElementOrMarkStrategy';
// import TableRemoveRow from '../../../components/Table/components/TableRemoveRow';

export class TableRemoveRowElement extends ElementOrMarkStrategy {
  constructor(editor: ReactEditor) {
    super('table-remove-row', 'meta+t+r+del', editor);
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

  render(props: RenderElementProps): JSX.Element {
    return <div {...props} />;
  }
}
