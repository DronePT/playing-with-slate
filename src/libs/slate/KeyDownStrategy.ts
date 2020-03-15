import { ReactEditor } from 'slate-react';

export abstract class KeyDownStrategy {
  public strategyName: string;
  public abstract toggle(): void;
  public abstract get isActive(): boolean;
  protected _editor: ReactEditor;

  constructor(strategyName: string, editor: ReactEditor) {
    this.strategyName = strategyName;
    this._editor = editor;
  }
}
