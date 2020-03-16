import { ReactEditor, RenderLeafProps, RenderElementProps } from 'slate-react';

export abstract class ElementOrMarkStrategy {
  protected _editor: ReactEditor;

  public strategyName: string;
  public keyboardShortcut: string;

  public abstract get isActive(): boolean;

  public abstract toggle(): void;
  public abstract render?<T>(
    props: T | RenderLeafProps | RenderElementProps
  ): JSX.Element;

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
