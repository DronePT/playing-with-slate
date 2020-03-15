import { ReactEditor } from 'slate-react';

export abstract class ElementOrMarkStrategy {
  public strategyName: string;
  public keyboardShortcut: string;
  public abstract toggle(): void;
  public abstract get isActive(): boolean;
  protected _editor: ReactEditor;

  constructor(
    strategyName: string,
    keyboardShortcut: string,
    editor: ReactEditor
  ) {
    this.strategyName = strategyName;
    this.keyboardShortcut = keyboardShortcut;

    this._editor = editor;
  }
}
