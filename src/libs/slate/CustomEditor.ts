import { ReactEditor } from 'slate-react';
import { KeyDownStrategyManager } from './KeyDownStrategyManager';

class CustomEditor {
  private keyDownStrategyManager: KeyDownStrategyManager;

  constructor(editor: ReactEditor) {
    this.keyDownStrategyManager = new KeyDownStrategyManager(
      editor,
      // eslint-disable-next-line no-undef
      new Map([
        ['meta+\\', 'code'],
        ['meta+b', 'bold'],
        ['meta+i', 'italic'],
        ['meta+u', 'underline']
      ])
    );

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  sendKeyPress(keyCombination: string): void {
    const keyDownStrategy = this.keyDownStrategyManager.getStrategy(
      keyCombination
    );

    keyDownStrategy?.toggle();
  }

  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    const { key, metaKey } = event;

    const keyName = [key];

    if (metaKey) {
      keyName.unshift('meta');
    }

    this.sendKeyPress(keyName.join('+'));
  }
}

export default CustomEditor;
